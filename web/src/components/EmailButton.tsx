import { openEmail } from '../lib/email'

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
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClickExtra?.()
        openEmail(subject)
      }}
      aria-label="Email Diogo Martins"
    >
      {children}
    </button>
  )
}
