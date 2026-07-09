import { useState } from 'react'
import { copyEmailAddress, openEmail } from '../lib/email'

type Props = {
  className?: string
  children?: string
  subject?: string
  onClickExtra?: () => void
}

export function EmailButton({
  className = 'btn btn--primary',
  children = 'Email me',
  subject,
  onClickExtra,
}: Props) {
  const [label, setLabel] = useState(children)

  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        onClickExtra?.()
        openEmail(subject)

        const copied = await copyEmailAddress()
        if (copied) {
          setLabel('Email copied — paste into your mail app')
          window.setTimeout(() => setLabel(children), 3500)
        }
      }}
      aria-label="Email Diogo Martins"
    >
      {label}
    </button>
  )
}
