import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, profile } from '../data/cv'
import { EmailButton } from './EmailButton'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = nav.map((n) => document.getElementById(n.id))
      const y = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]
        if (el && el.offsetTop <= y) {
          setActive(nav[i].id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <img className="nav__brand-mark" src="/brand/logo-mark.png" alt="" />
          <span className="nav__brand-text">
            Diogo Martins
            <small>Clinical Cardiac Scientist</small>
          </span>
        </a>
        <ul className="nav__links">
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={active === item.id ? 'active' : ''}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <EmailButton className="nav__cta" />
        <button
          className={`nav__burger${open ? ' open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <EmailButton
              className="nav__mobile-email"
              onClickExtra={() => setOpen(false)}
            />
            <a href={profile.links.mycardiac} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              MyCardiac ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
