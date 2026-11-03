import { profile, projects } from '../data/cv'
import { EmailButton } from './EmailButton'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <Reveal>
        <span className="section__label">Beyond the clinic</span>
        <h2 className="section__title" id="work-title">
          Projects
        </h2>
        <p className="section__lead">
          Software for echo education and imaging, independent products and lessons learned, built alongside clinical work.
        </p>
      </Reveal>

      <div className="work-cards">
        {projects.map((p, i) => {
          const inner = (
            <>
              <div className="work-card__label">
                {p.label}
                {p.status && (
                  <span className={`work-card__status work-card__status--${p.status.toLowerCase()}`}>
                    {p.status}
                  </span>
                )}
              </div>
              <h3 className="work-card__title">{p.title}</h3>
              <p className="work-card__desc">{p.desc}</p>
              {p.linkText && (
                <span className="work-card__link">
                  {p.linkText} <span aria-hidden>→</span>
                </span>
              )}
            </>
          )
          return (
            <Reveal key={p.id} delay={0.06 + i * 0.05} className={p.id === 'echowizard' ? 'work-cards__flagship' : undefined}>
              {p.href ? (
                <a className={`work-card${p.id === 'echowizard' ? ' work-card--flagship' : ''}`} href={p.href} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div className="work-card work-card--static">{inner}</div>
              )}
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="contact-band" id="contact">
          <div>
            <h2>Let’s talk echo education, imaging & service innovation</h2>
            <p>
              Open to training collaborations, NHS digital projects, and conversations where clinical depth meets
              product thinking.
            </p>
          </div>
          <div className="contact-band__actions">
            <EmailButton subject="Hello from your website">Email Diogo</EmailButton>
            <a className="btn btn--ghost-light" href={profile.links.echowizard} target="_blank" rel="noreferrer">
              Echo Wizard
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
