import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Calendar,
  MapPin,
  Building2,
  BookOpen,
  Target,
  Cpu,
  TrendingUp,
  Users,
  Crown,
  FlaskConical,
  ClipboardList,
  Megaphone,
  Handshake,
  Wallet,
  Phone,
  Mail,
} from "lucide-react";

export const ICONS = {
  calendar: Calendar,
  map: MapPin,
  building: Building2,
  book: BookOpen,
  target: Target,
  cpu: Cpu,
  trending: TrendingUp,
  users: Users,
  crown: Crown,
  flask: FlaskConical,
  clipboard: ClipboardList,
  megaphone: Megaphone,
  handshake: Handshake,
  wallet: Wallet,
  phone: Phone,
  mail: Mail,
};
export const Icon = ({ name, ...p }) => {
  const C = ICONS[name];
  return C ? <C {...p} /> : null;
};

export const ease = [0.22, 1, 0.36, 1];

/* Fades and lifts its children into view once, as the user scrolls. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
  ...rest
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </M>
  );
}

/* Parent/child variants for staggered grids. */
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
export const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

export function SectionHead({ title, sub, eyebrow }) {
  return (
    <Reveal className="head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

/* Counts from 0 to `to` when scrolled into view. */
export function CountUp({ to, duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease,
      onUpdate: (x) => setV(Math.round(x)),
    });
    return () => c.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{v}</span>;
}

/* Pulls its child slightly toward the pointer. */
export function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.span
      ref={ref}
      className="magnetic"
      style={{ x, y }}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {children}
    </motion.span>
  );
}

/* Card that tilts in 3D and shows a light spot following the pointer. */
export function TiltCard({ children, className = "", ...rest }) {
  const ref = useRef(null);
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width,
      py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 8);
    rx.set((0.5 - py) * 8);
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
  };
  const leave = () => {
    rx.set(0);
    ry.set(0);
  };
  return (
    <motion.div
      ref={ref}
      className={"tilt " + className}
      style={{ rotateX: rx, rotateY: ry }}
      onPointerMove={move}
      onPointerLeave={leave}
      variants={item}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
