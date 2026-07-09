import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { experience } from '../data/cv'
import { Reveal } from './Reveal'

const FILTERS = ['All', 'Clinical', 'Leadership', 'Structural', 'Product'] as const

export function Experience() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const [openId, setOpenId] = useState<string | null>('northampton')

  const jobs = useMemo(() => {
    const list =
      filter === 'All' ? experience : experience.filter((e) => e.tags.includes(filter))
    return [...list].sort((a, b) => {
      const aEnd = a.end ?? 9999
      const bEnd = b.end ?? 9999
      if (aEnd !== bEnd) return bEnd - aEnd
      return b.start - a.start
    })
  }, [filter])

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <Reveal>
        <span className="section__label">Career</span>
        <h2 className="section__title" id="experience-title">
          Where the work happened
        </h2>
        <p className="section__lead">
          From scientist-led TOE services to structural heart labs and cardiology SaaS — newest roles first.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="timeline-filters" role="tablist" aria-label="Filter experience">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="exp-list">
        <AnimatePresence mode="popLayout">
          {jobs.map((job, i) => {
            const open = openId === job.id
            return (
              <motion.article
                key={job.id}
                className={`exp-item${open ? ' open' : ''}`}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, delay: i * 0.025 }}
              >
                <button
                  type="button"
                  className="exp-item__header"
                  onClick={() => setOpenId((id) => (id === job.id ? null : job.id))}
                  aria-expanded={open}
                >
                  <div className="exp-item__main">
                    <h3 className="exp-item__role">{job.role}</h3>
                    <p className="exp-item__org">{job.org}</p>
                  </div>
                  <span className="exp-item__period">{job.period}</span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="exp-item__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ul className="exp-item__highlights">
                        {job.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </AnimatePresence>
        {jobs.length === 0 && <p className="exp-empty">No roles match this filter.</p>}
      </div>
    </section>
  )
}
