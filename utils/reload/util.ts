import { clearTimeout } from 'timers'

export const debounce = <T extends unknown[]>(
  cb: (...args: T) => void,
  delay: number
) => {
  let timer: NodeJS.Timeout

  return function (...args: T) {
    clearTimeout(timer)

    timer = setTimeout(() => cb(...args), delay)
  }
}
