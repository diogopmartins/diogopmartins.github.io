import { conferences, education } from '../data/cv'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <Reveal>
        <span className="section__label">Credentials</span>
        <h2 className="section__title" id="education-title">
          Education, accreditation & learning
        </h2>
        <p className="section__lead">
          Formal training, ESC/EACVI pathways, and continuous professional development across imaging and research.
        </p>
      </Reveal>

      <div className="edu-grid">
        <Reveal delay={0.08}>
          <h3 className="edu-side-label">Education & core certifications</h3>
          <ul className="edu-list">
            {education.map((e) => (
              <li key={e.title + e.period} className="edu-item">
                <div className="edu-item__period">{e.period}</div>
                <div className="edu-item__title">{e.title}</div>
                <div className="edu-item__org">{e.org}</div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <h3 className="edu-side-label">Selected conferences</h3>
          <ul className="conf-list">
            {conferences.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
