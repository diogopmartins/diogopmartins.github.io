import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile, stats } from '../data/cv'
import { EmailButton } from './EmailButton'

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setN(value)
      return
    }
    let frame = 0
    const duration = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(eased * value))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value, reduce])

  return (
    <>
      {n}
      {suffix}
    </>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <motion.div
          className="hero__lockup"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <motion.img
            className="hero__logo"
            src="/brand/logo-mark.png"
            alt=""
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="hero__lockup-text">
            <h1 className="hero__name">
              Diogo <em>Martins</em>
            </h1>
            <p className="hero__role">{profile.title}</p>
          </div>
        </motion.div>

        <motion.p
          className="hero__creds"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {profile.credentials}
        </motion.p>
        <motion.p
          className="hero__tagline"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <EmailButton>Start a conversation</EmailButton>
          <a className="btn btn--ghost" href={profile.links.mycardiac} target="_blank" rel="noreferrer">
            MyCardiac
          </a>
          <a className="btn btn--ghost" href="#about">
            About me
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat__value">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden>
        Scroll
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
