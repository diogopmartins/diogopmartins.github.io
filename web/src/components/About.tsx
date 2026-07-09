import { motion } from 'framer-motion'
import { clinicalProfile, strengths, summary, workplaces } from '../data/cv'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <Reveal>
        <span className="section__label">About</span>
        <h2 className="section__title" id="about-title">
          Clinical depth. Operational clarity. Digital ambition.
        </h2>
        <p className="section__lead">
          A rare mix of hands-on echocardiography, NHS service leadership and product thinking for health AI.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="strength-grid">
          {strengths.map((s, i) => (
            <motion.li
              key={s.title}
              className="strength-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.05 * i, duration: 0.45 }}
            >
              <strong>{s.title}</strong>
              <span>{s.detail}</span>
            </motion.li>
          ))}
        </ul>
      </Reveal>

      <div className="about__grid">
        <Reveal className="about__text" delay={0.1}>
          {summary.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </Reveal>

        <div className="about__side">
          <Reveal delay={0.15}>
            <div className="about__block">
              <h3>Workplaces</h3>
              <ul className="chip-list">
                {workplaces.map((l) => (
                  <li key={l} className="chip">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="about__block">
              <h3>Signature credentials</h3>
              <ul className="profile-list">
                {clinicalProfile.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: 0.03 * i, duration: 0.35 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
