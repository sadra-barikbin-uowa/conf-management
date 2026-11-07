import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Sun, Moon, Languages, Menu, X, ArrowUp, Check, Copy, Sparkles, Send, ChevronDown, Clock, Flag } from 'lucide-react'
import './App.css'
import logo from './assets/warith-logo.png'
import heroImage1 from '../pic4.jpg'
import heroImage2 from '../pic8.jpg'
import heroImage3 from '../imam-hussein-shrine.jpg'
import { usePrefs } from './context.jsx'
import { Reveal, SectionHead, CountUp, Magnetic, TiltCard, Icon, stagger, item, ease } from './components/ui.jsx'
import {
  EVENT, EMAIL, TITLE, UI, DATES, AXES, GOALS, UNIS, SUPPORTERS, RULES, SPEC, COMMITTEES, CONTACTS,
} from './data.js'

const SECTIONS = ['dates', 'axes', 'submit', 'about', 'gallery', 'committees', 'contact']
const DAY = 864e5
const GALLERY_IMAGES = (() => {
  const modules = import.meta.glob('../pics/*.{jpg,jpeg,png,webp,avif,gif}', { eager: true })
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, module]) => module.default)
})()

/* ============ HOOKS ============ */
function useNow(interval = 1000) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => { const i = setInterval(() => setNow(Date.now()), interval); return () => clearInterval(i) }, [interval])
  return now
}

function useActiveSection() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && setActive(e.target.id))
    }, { rootMargin: '-45% 0px -50% 0px' })
    SECTIONS.forEach(id => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}

/* ============ CHROME ============ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div className="progress" style={{ scaleX }} />
}

function Nav() {
  const { t, theme, toggleTheme, toggleLang } = usePrefs()
  const active = useActiveSection()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  const links = SECTIONS.map(id => (
    <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>
      {active === id && <motion.span layoutId="nav-pill" className="pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
      <span>{t(UI.nav[id])}</span>
    </a>
  ))

  return (
    <motion.nav className={solid ? 'solid' : ''} initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: .8, ease }}>
      <div className="wrap nav-in">
        <a href="#top" className="brand">
          <img src={logo} alt="" className="brand-logo" />
          <span>{t(UI.brand)}</span>
        </a>
        <div className="links">{links}</div>
        <div className="tools">
          <button type="button" className="icon-btn lang-btn" onClick={toggleLang} aria-label={t(UI.lang)}>
            <Languages size={18} /><span>{t(UI.lang)}</span>
          </button>
          <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={t(UI.theme)}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={theme} initial={{ rotate: -90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }} transition={{ duration: .3 }} style={{ display: 'grid' }}>
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button type="button" className="icon-btn burger" onClick={() => setOpen(o => !o)} aria-label={t(UI.menu)} aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="drawer" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .25 }}>
            {links}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function BackToTop() {
  const { t } = usePrefs()
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useEffect(() => scrollY.on('change', v => setShow(v > 700)), [scrollY])
  return (
    <AnimatePresence>
      {show && (
        <motion.a href="#top" className="to-top" aria-label={t(UI.top)}
          initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .5 }}
          whileHover={{ y: -4 }} whileTap={{ scale: .9 }}>
          <ArrowUp size={20} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

/* ============ HERO ============ */
function Countdown() {
  const { t } = usePrefs()
  const now = useNow()
  const d = Math.max(0, EVENT - now)
  const vals = [Math.floor(d / DAY), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60]
  return (
    <div className="count" role="timer" aria-label={t(UI.countdown)}>
      {vals.map((v, i) => (
        <div key={i} className="count-cell">
          <div className="digits">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.strong key={v} initial={{ y: '-100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '100%', opacity: 0 }}
                transition={{ duration: .45, ease }}>
                {String(v).padStart(2, '0')}
              </motion.strong>
            </AnimatePresence>
          </div>
          <span>{t(UI.units[i])}</span>
        </div>
      ))}
    </div>
  )
}

function Hero({ onSubmit }) {
  const { t, lang } = usePrefs()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 140])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const words = t(TITLE).split(' ')
  const heroSlides = [heroImage1, heroImage2, heroImage3]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [heroSlides.length])

  return (
    <header className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true">
        <AnimatePresence mode="wait">
          {heroSlides.map((src, index) => index === activeSlide && (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="hero-bg-image"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          ))}
        </AnimatePresence>
        <div className="hero-overlay" />
      </div>
      <div className="hero-glow" aria-hidden="true" />
      <motion.div className="wrap hero-in" style={{ y, opacity }}>
        <h1 key={lang}>
          <motion.small initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>{t(UI.conference)}</motion.small>
          <span className="title-words">
            {words.map((w, i) => (
              <motion.span key={i} className="word" initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: .45 + i * .07, duration: .7, ease }}>
                {w}
              </motion.span>
            ))}
          </span>
        </h1>
        <motion.p className="sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .9, duration: .7, ease }}>
          {t(UI.heroSub)}
        </motion.p>
        <motion.div className="cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: .7, ease }}>
          <Magnetic>
            <button type="button" className="btn btn-gold shine" onClick={onSubmit}><Send size={18} /> {t(UI.ctaSubmit)}</button>
          </Magnetic>
          <Magnetic><a className="btn btn-ghost" href="#axes">{t(UI.ctaAxes)}</a></Magnetic>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: .7, ease }}>
          <Countdown />
        </motion.div>
      </motion.div>
      <a href="#facts" className="scroll-cue" aria-hidden="true" tabIndex={-1}><ChevronDown size={22} /></a>
    </header>
  )
}

/* Key facts and headline numbers, directly under the hero. */
function Facts() {
  const { t } = usePrefs()
  return (
    <section id="facts" className="facts-sec">
      <div className="wrap">
        <motion.div className="facts" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
          {UI.facts.map(f => (
            <TiltCard key={f.icon} className="card fact">
              <div className="fact-ico"><Icon name={f.icon} size={22} /></div>
              <small>{t(f.label)}</small>
              <h3>{t(f.value)}</h3>
              <p>{t(f.note)}</p>
            </TiltCard>
          ))}
        </motion.div>
        <div className="stats">
          {UI.stats.map((s, i) => (
            <Reveal key={i} delay={i * .08} className="stat">
              <strong><CountUp to={s.n} /></strong>
              <span>{t(s)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ DATES ============ */
function Timeline() {
  const { t, lang } = usePrefs()
  const now = useNow(60000)
  const steps = useMemo(() => DATES.map(s => ({ ...s, ts: new Date(s.date + 'T23:59:59+03:00').getTime() })), [])
  const nextIdx = steps.findIndex(s => s.ts >= now)
  const [sel, setSel] = useState(nextIdx === -1 ? steps.length - 1 : nextIdx)
  // fraction of the track that is filled, interpolated between milestones
  const fill = useMemo(() => {
    if (nextIdx === -1) return 1
    if (nextIdx === 0) return 0
    const a = steps[nextIdx - 1].ts, b = steps[nextIdx].ts
    return (nextIdx - 1 + (now - a) / (b - a)) / (steps.length - 1)
  }, [now, nextIdx, steps])

  const fmt = d => new Date(d).toLocaleDateString(lang === 'ar' ? 'ar-IQ' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const s = steps[sel]
  const left = Math.ceil((s.ts - now) / DAY)

  return (
    <section id="dates" className="dark-sec">
      <div className="wrap">
        <SectionHead title={t(UI.sec.dates.t)} sub={t(UI.sec.dates.s)} />
        <div className="tl">
          <div className="tl-track"><motion.div className="tl-fill" initial={{ scaleX: 0 }} whileInView={{ scaleX: fill }}
            viewport={{ once: true }} transition={{ duration: 1.6, ease }} /></div>
          {steps.map((st, i) => {
            const state = i < nextIdx || nextIdx === -1 ? 'done' : i === nextIdx ? 'next' : 'todo'
            return (
              <motion.button type="button" key={st.date} className={`step ${state} ${sel === i ? 'sel' : ''}`} onClick={() => setSel(i)}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * .12, duration: .6, ease }} aria-pressed={sel === i}>
                <span className="dot">{state === 'done' ? <Check size={20} /> : i === steps.length - 1 ? <Flag size={20} /> : i + 1}</span>
                <b>{t(st.t)}</b>
                <time>{fmt(st.ts)}</time>
                {state === 'next' && <span className="badge">{t(UI.next)}</span>}
              </motion.button>
            )
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={sel + lang} className="tl-detail" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .35 }}>
            <div>
              <h3>{t(s.t)}</h3>
              <p>{t(s.d)}</p>
            </div>
            <div className="tl-left">
              <Clock size={18} />
              {left > 0 ? <><strong>{left}</strong> {t(UI.daysLeft)}</> : left === 0 ? t(UI.today) : t(UI.done)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* ============ AXES ============ */
function Axes() {
  const { t } = usePrefs()
  return (
    <section id="axes">
      <div className="wrap">
        <SectionHead title={t(UI.sec.axes.t)} sub={t(UI.sec.axes.s)} />
        <motion.div className="axes" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
          {AXES.map((a, k) => (
            <TiltCard key={k} className="card axis">
              <div className="axis-head">
                <span className="axis-num">0{k + 1}</span>
                <div className="axis-ico"><Icon name={a.icon} size={24} /></div>
              </div>
              <small className="axis-label">{t(UI.axis)} {k + 1} · {a.items.length} {t(UI.topics)}</small>
              <h3>{t(a.name)}</h3>
              <ol>{a.items.map((x, i) => <li key={i}><span>{i + 1}</span>{t(x)}</li>)}</ol>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ============ SUBMIT ============ */
function Submit({ onEmail }) {
  const { t, lang } = usePrefs()
  return (
    <section id="submit" className="alt-sec">
      <div className="wrap">
        <SectionHead title={t(UI.sec.submit.t)} sub={t(UI.sec.submit.s)} />
        <div className="submit-grid">
          <Reveal className="card submit-card">
            <h3 className="card-title">{t(UI.rulesTitle)}</h3>
            <motion.ul className="checks" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {RULES.map((r, i) => <motion.li key={i} variants={item}><Check size={16} />{t(r)}</motion.li>)}
            </motion.ul>
          </Reveal>
          <Reveal className="card submit-card" delay={.1}>
            <h3 className="card-title">{t(UI.formatTitle)}</h3>
            <div className="spec">{SPEC.map((s, i) => <span className="chip" key={i}>{t(s)}</span>)}</div>
            <div className="note">{t(UI.formatNote)}</div>
            <div className="email-highlight">
              <span>{lang === 'ar' ? 'اضغط على البريد للنسخ' : 'Click the email to copy'}</span>
              <button type="button" className="link-btn" onClick={onEmail}>{EMAIL}</button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ============ ABOUT ============ */
function About() {
  const { t } = usePrefs()
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead title={t(UI.sec.about.t)} sub={t(UI.sec.about.s)} />
        <h3 className="sub-title">{t(UI.goals)}</h3>
        <motion.div className="goals" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
          {GOALS.map((g, k) => (
            <motion.div className="goal card" key={k} variants={item} whileHover={{ y: -6 }}>
              <span className="goal-num">{k + 1}</span>
              <p>{t(g)}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="partners">
          {[[UI.unis, UNIS], [UI.supporters, SUPPORTERS]].map(([title, list], k) => (
            <Reveal key={k} className="partner-block" delay={k * .1}>
              <h3 className="sub-title">{t(title)}</h3>
              {k === 0 ? (
                <motion.div className="uni-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  {list.map((u, i) => (
                    <motion.a key={i} href={u.href} target="_blank" rel="noreferrer" className={`uni-card${u.featured ? ' featured' : ''}`} variants={item} whileHover={{ y: -4, scale: 1.01 }}>
                      <img src={u.logo} alt={t(u)} />
                      <span>{t(u)}</span>
                    </motion.a>
                  ))}
                </motion.div>
              ) : (
                <motion.div className="uni-grid supporter-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  {list.map((u, i) => (
                    <motion.a key={i} href={u.href} target="_blank" rel="noreferrer" className={`uni-card supporter-card${u.featured ? ' featured' : ''}`} variants={item} whileHover={{ y: -4, scale: 1.01 }}>
                      <img src={u.logo} alt={t(u)} />
                      <span>{t(u)}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============ GALLERY ============ */
function Gallery() {
  const { t } = usePrefs()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const onKey = e => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section id="gallery" className="alt-sec">
      <div className="wrap">
        <SectionHead title={t(UI.sec.gallery.t)} sub={t(UI.sec.gallery.s)} />
        <motion.div className="gallery-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
          {GALLERY_IMAGES.map((src, index) => (
            <motion.button
              key={`${src}-${index}`}
              type="button"
              className="gallery-card"
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelected(src)}
              aria-label={t(UI.gallery)}
            >
              <img src={src} alt={t(UI.gallery)} loading="lazy" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="gallery-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.button type="button" className="gallery-close" onClick={() => setSelected(null)} aria-label={t(UI.close)}>
              <X size={20} />
            </motion.button>
            <motion.img
              src={selected}
              alt={t(UI.gallery)}
              className="gallery-zoom"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ============ COMMITTEES ============ */
const PREVIEW = 6

function Committee({ c, index }) {
  const { t } = usePrefs()
  const [open, setOpen] = useState(false)
  const chair = c.people.find(p => p.chair)
  const members = c.people.filter(p => !p.chair)
  const shown = open ? members : members.slice(0, PREVIEW)

  return (
    <Reveal className="committee card" delay={(index % 2) * .08}>
      <header className="committee-head">
        <div className="committee-ico"><Icon name={c.icon} size={22} /></div>
        <div>
          <span className="prio">{String(index + 1).padStart(2, '0')}</span>
          <h3>{t(c.t)}</h3>
        </div>
        <span className="count-pill">{c.people.length} {t(UI.members)}</span>
      </header>
      {chair && (
        <div className="chair-card">
          <span className="role">{t(UI.chair)}</span>
          <b>{chair.name}</b>
          <small>{t(chair.org)}</small>
        </div>
      )}
      <motion.ul className="members" layout>
        <AnimatePresence initial={false}>
          {shown.map(p => (
            <motion.li key={p.name} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>
              <b>{p.name}</b><small>{t(p.org)}</small>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {members.length > PREVIEW && (
        <button type="button" className="more" onClick={() => setOpen(o => !o)} aria-expanded={open}>
          {open ? t(UI.showLess) : `${t(UI.showAll)} (+${members.length - PREVIEW})`}
          <motion.span animate={{ rotate: open ? 180 : 0 }} style={{ display: 'grid' }}><ChevronDown size={16} /></motion.span>
        </button>
      )}
    </Reveal>
  )
}

function Committees() {
  const { t } = usePrefs()
  return (
    <section id="committees" className="alt-sec">
      <div className="wrap">
        <SectionHead title={t(UI.sec.committees.t)} sub={t(UI.sec.committees.s)} />
        <div className="committees">
          {COMMITTEES.map((c, i) => <Committee key={i} c={c} index={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ============ CONTACT ============ */
function Contact({ onEmail }) {
  const { t } = usePrefs()
  return (
    <section id="contact">
      <div className="wrap">
        <SectionHead title={t(UI.sec.contact.t)} sub={t(UI.sec.contact.s)} />
        <motion.div className="contact" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {CONTACTS.map((c, i) => {
            const body = <><div className="ico"><Icon name={c.icon} size={24} /></div><small>{t(c.t)}</small><strong>{c.v}</strong></>
            return (
              <TiltCard key={i} className="card contact-card">
                {c.href ? <a href={c.href}>{body}</a> : <button type="button" onClick={onEmail}>{body}</button>}
              </TiltCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

/* ============ EMAIL DIALOG ============ */
function EmailDialog({ open, onClose }) {
  const { t } = usePrefs()
  const [copied, setCopied] = useState(false)
  useEffect(() => { if (!open) setCopied(false) }, [open])
  useEffect(() => {
    if (!open) return
    const k = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open, onClose])

  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL) } catch {
      const i = document.createElement('textarea')
      i.value = EMAIL; i.style.position = 'fixed'; i.style.opacity = '0'
      document.body.appendChild(i); i.select(); document.execCommand('copy'); i.remove()
    }
    setCopied(true)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="modal" role="dialog" aria-modal="true" aria-label={t(UI.email)} onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: .9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}>
            <button type="button" className="modal-close" onClick={onClose} aria-label={t(UI.close)}><X size={20} /></button>
            <div className="modal-ico"><Icon name="mail" size={26} /></div>
            <p className="modal-label">{t(UI.email)}</p>
            <div className="email-box">{EMAIL}</div>
            <button type="button" className="btn btn-gold full" onClick={copy}>
              {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? t(UI.copied) : t(UI.copy)}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ============ APP ============ */
export default function App() {
  const { t } = usePrefs()
  const [emailOpen, setEmailOpen] = useState(false)
  const openEmail = () => setEmailOpen(true)

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero onSubmit={openEmail} />
        <Facts />
        <Timeline />
        <Axes />
        <Submit onEmail={openEmail} />
        <About />
        <Gallery />
        <Committees />
        <Contact onEmail={openEmail} />
      </main>
      <footer>
        <div className="wrap">
          <img src={logo} alt="" className="footer-logo" />
          <b>{t(TITLE)}</b>
          <p>{t(UI.footer)}</p>
        </div>
      </footer>
      <BackToTop />
      <EmailDialog open={emailOpen} onClose={() => setEmailOpen(false)} />
    </>
  )
}
