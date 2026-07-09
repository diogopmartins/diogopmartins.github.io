import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { languages, skills } from '../data/cv'
import { Reveal } from './Reveal'

const clinicalLevels: Record<string, number> = {
  'EchoPac (GE)': 95,
  'TomTec 4D LV/RV/MV': 90,
  'Philips Xcelera / Intellispace / QLAB': 92,
  'Philips EchoNav': 88,
  'Siemens Syngo Dynamics': 85,
  'McKesson Cardiology': 80,
  '3D Slicer reconstructions': 78,
  'DICOM & PACS workflows': 88,
}

export function Expertise() {
  return (
    <section className="section" id="expertise" aria-labelledby="expertise-title">
      <Reveal>
        <span className="section__label">Expertise</span>
        <h2 className="section__title" id="expertise-title">
          Tools of the trade
        </h2>
        <p className="section__lead">
          Multimodality imaging platforms, digital product craft, and the collaboration skills that make NHS
          delivery work.
        </p>
      </Reveal>

      <div className="expertise__grid">
        <Reveal delay={0.05}>
          <div className="expertise__col">
            <h3>Imaging & clinical systems</h3>
            {skills.clinical.map((name) => (
              <SkillBar key={name} label={name} level={clinicalLevels[name] ?? 80} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="expertise__col">
            <h3>Digital & AI tooling</h3>
            <ul className="skill-pills">
              {skills.digital.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <h3>Languages</h3>
              <ul className="chip-list" style={{ marginTop: '0.75rem' }}>
                {languages.map((l) => (
                  <li key={l} className="chip">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="expertise__col">
            <h3>How I work</h3>
            <ul className="skill-pills">
              {skills.soft.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SkillBar({ label, level }: { label: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__label">
        <span>{label}</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView || reduce ? level / 100 : 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
