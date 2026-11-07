import { useEffect, useRef } from "react";

/* Interactive constellation behind the hero: drifting nodes that link up
   when close and lean toward the pointer. Pauses when off-screen. */
export default function ParticleField() {
	const ref = useRef(null);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		const reduce = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		const mouse = { x: -9999, y: -9999 };
		let w = 0,
			h = 0,
			dpr = 1,
			nodes = [],
			raf = 0,
			visible = true;

		const seed = () => {
			const count = Math.round(Math.min(110, (w * h) / 14000));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * 0.35,
				vy: (Math.random() - 0.5) * 0.35,
				r: Math.random() * 1.6 + 0.8,
			}));
		};
		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			seed();
		};

		const LINK = 130;
		const frame = () => {
			ctx.clearRect(0, 0, w, h);
			for (const n of nodes) {
				const dx = mouse.x - n.x,
					dy = mouse.y - n.y,
					d = Math.hypot(dx, dy);
				if (d < 180) {
					n.vx += (dx / d) * 0.012;
					n.vy += (dy / d) * 0.012;
				}
				n.vx *= 0.99;
				n.vy *= 0.99;
				n.x += n.vx;
				n.y += n.vy;
				if (n.x < 0 || n.x > w) n.vx *= -1;
				if (n.y < 0 || n.y > h) n.vy *= -1;
			}
			for (let i = 0; i < nodes.length; i++) {
				const a = nodes[i];
				for (let j = i + 1; j < nodes.length; j++) {
					const b = nodes[j],
						d = Math.hypot(a.x - b.x, a.y - b.y);
					if (d < LINK) {
						ctx.strokeStyle = `rgba(255,215,90,${(1 - d / LINK) * 0.28})`;
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
				const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
				if (md < 180) {
					ctx.strokeStyle = `rgba(255,215,90,${(1 - md / 180) * 0.5})`;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.stroke();
				}
				ctx.fillStyle = "rgba(255,215,90,.85)";
				ctx.beginPath();
				ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
				ctx.fill();
			}
			if (!reduce && visible) raf = requestAnimationFrame(frame);
		};

		const onMove = (e) => {
			const r = canvas.getBoundingClientRect();
			mouse.x = e.clientX - r.left;
			mouse.y = e.clientY - r.top;
		};
		const onLeave = () => {
			mouse.x = mouse.y = -9999;
		};

		resize();
		frame();
		const ro = new ResizeObserver(() => {
			resize();
			if (reduce) frame();
		});
		ro.observe(canvas);
		const io = new IntersectionObserver(([e]) => {
			visible = e.isIntersecting;
			cancelAnimationFrame(raf);
			if (visible && !reduce) raf = requestAnimationFrame(frame);
		});
		io.observe(canvas);
		window.addEventListener("pointermove", onMove);
		document.addEventListener("pointerleave", onLeave);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			io.disconnect();
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("pointerleave", onLeave);
		};
	}, []);

	return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
