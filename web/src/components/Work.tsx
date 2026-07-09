import { profile } from '../data/cv'
import { EmailButton } from './EmailButton'
import { Reveal } from './Reveal'

export function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <Reveal>
        <span className="section__label">Beyond the clinic</span>
        <h2 className="section__title" id="work-title">
          Building tools for cardiology teams
        </h2>
        <p className="section__lead">
          From NHS operations SaaS to open clinical workflow utilities — product thinking grounded in frontline
          imaging practice.
        </p>
      </Reveal>

      <div className="work-cards">
        <Reveal delay={0.08}>
          <a className="work-card" href={profile.links.mycardiac} target="_blank" rel="noreferrer">
            <div className="work-card__label">Flagship product</div>
            <h3 className="work-card__title">MyCardiac</h3>
            <p className="work-card__desc">
              Cardiology operations SaaS — rotas, equipment, governance, and AI-assisted planning for NHS
              departments.
            </p>
            <span className="work-card__link">
              Visit mycardiac.co.uk <span aria-hidden>→</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.14}>
          <a className="work-card" href={profile.links.github} target="_blank" rel="noreferrer">
            <div className="work-card__label">Open work</div>
            <h3 className="work-card__title">GitHub</h3>
            <p className="work-card__desc">
              Clinical workflow utilities and small-scale prototypes — practical problem-solving with lightweight
              software and AI-assisted tooling.
            </p>
            <span className="work-card__link">
              github.com/diogopmartins <span aria-hidden>→</span>
            </span>
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="contact-band" id="contact">
          <div>
            <h2>Let’s talk clinical AI, imaging & service innovation</h2>
            <p>
              Open to health AI research, NHS digital collaborations, and conversations where clinical depth meets
              product thinking.
            </p>
          </div>
          <div className="contact-band__actions">
            <EmailButton subject="Hello from your website">Email Diogo</EmailButton>
            <a className="btn btn--ghost-light" href={profile.links.mycardiac} target="_blank" rel="noreferrer">
              MyCardiac
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
