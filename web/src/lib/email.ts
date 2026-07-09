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

export function openEmail(subject?: string): void {
  const address = getEmailAddress()
  const scheme = ['m', 'a', 'i', 'l', 't', 'o'].join('')
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  window.location.href = `${scheme}:${address}${query}`
}
