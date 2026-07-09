import { About } from './components/About'
import { Education } from './components/Education'
import { EmailButton } from './components/EmailButton'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Work } from './components/Work'
import { profile } from './data/cv'

function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden>
      <div className="atmosphere__mesh" />
      <div className="atmosphere__grid" />
      <div className="atmosphere__wave" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Atmosphere />
      <div className="app">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Expertise />
          <Education />
          <Work />
        </main>
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="footer__links">
            <EmailButton className="footer__email" />
            <a href={profile.links.mycardiac} target="_blank" rel="noreferrer">
              MyCardiac
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </span>
        </footer>
      </div>
    </>
  )
}
