/** Contact helpers — no plain address or mailto: in static HTML/source. */

function decode(chunks: number[]): string {
  return String.fromCharCode(...chunks)
}

// Split + numeric so scrapers don't see a contiguous address
const USER = [100, 105, 111, 103, 111, 112, 109, 97, 114, 116, 105, 110, 115]
const HOST = [103, 109, 97, 105, 108, 46, 99, 111, 109]
const AT = 64

export function getEmailAddress(): string {
  return `${decode(USER)}${String.fromCharCode(AT)}${decode(HOST)}`
}

function buildMailtoUrl(subject?: string): string {
  const address = getEmailAddress()
  const scheme = ['m', 'a', 'i', 'l', 't', 'o'].join('')
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `${scheme}:${address}${query}`
}

export function openEmail(subject?: string): void {
  const url = buildMailtoUrl(subject)

  // Anchor click is more reliable than assigning window.location.href.
  const link = document.createElement('a')
  link.href = url
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export async function copyEmailAddress(): Promise<boolean> {
  const address = getEmailAddress()

  try {
    await navigator.clipboard.writeText(address)
    return true
  } catch {
    const input = document.createElement('textarea')
    input.value = address
    input.setAttribute('readonly', '')
    input.style.position = 'fixed'
    input.style.left = '-9999px'
    document.body.appendChild(input)
    input.select()
    const copied = document.execCommand('copy')
    document.body.removeChild(input)
    return copied
  }
}
