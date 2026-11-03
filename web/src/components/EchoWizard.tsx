import { echoWizard } from '../data/cv'
import { Reveal } from './Reveal'

export function EchoWizard() {
  return (
    <section className="section" id="echo-wizard" aria-labelledby="echo-wizard-title">
      <Reveal>
        <span className="section__label">Flagship project · Launched {echoWizard.launched}</span>
        <h2 className="section__title" id="echo-wizard-title">
          Echo Wizard: echo simulation with exact answers
        </h2>
        <p className="section__lead">{echoWizard.summary}</p>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="ew-hero">
          <div className="ew-hero__text">
            <p>{echoWizard.why}</p>
            <div className="ew-hero__actions">
              <a className="btn btn--primary" href={echoWizard.url} target="_blank" rel="noreferrer">
                Try the simulators
              </a>
              <span className="ew-hero__url">echo-wizard.com</span>
            </div>
          </div>
          <ul className="ew-stats">
            {echoWizard.launchStats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="ew-subtitle">The simulators</h3>
        <ul className="ew-sims">
          {echoWizard.simulators.map((sim) => (
            <li key={sim.title} className="ew-sim">
              <strong>{sim.title}</strong>
              <span>{sim.detail}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="ew-grid">
        <Reveal delay={0.12}>
          <div className="about__block">
            <h3>What else it does</h3>
            <ul className="profile-list">
              {echoWizard.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="about__block">
            <h3>How it was built</h3>
            <ol className="ew-timeline">
              {echoWizard.timeline.map((t) => (
                <li key={t.when}>
                  <span className="ew-timeline__when">{t.when}</span>
                  <span>{t.what}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <p className="ew-disclaimer">{echoWizard.disclaimer}</p>
      </Reveal>
    </section>
  )
}
