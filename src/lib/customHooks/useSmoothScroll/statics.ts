import { easeIn } from "./easing"
import { CtrlTarget, ResetAutoScrollEvent, Scroll, ScrollAuto, StartAutoScroll, TouchCtrl } from "./types"

const ctrlTarget: CtrlTarget = (
  element,
  target
) => {
  const max = element.scrollWidth - element.clientWidth
  const min = 0
  return Math.max(min, Math.min(max, target))
}

const smoothScroll: Scroll = (
  element,
  target,
  duration,
  easingFunction,
  status = {
    active: true
  },
  callback = () => {}
) => {
  const start = element.scrollLeft
  target = ctrlTarget(element, element.scrollLeft + target)
  const distance = target - start
  let startTime: number | null = null
  let requestID: number = 0
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easingFunction(timeElapsed, duration, distance, start)
    element.scrollLeft = run
    if (timeElapsed < duration && status.active) {
      requestID = requestAnimationFrame(animation)
    } else {
      cancelAnimationFrame(requestID)
      callback()
    }
  }
  requestID = requestAnimationFrame(animation)
}

const smoothScrollAuto: ScrollAuto = (
  element,
  speed = 1,
  status,
  callback = () => {},
  easeInTime = 300,
) => {
  let startTime: number | null = null
  let requestID: number = 0
  let frameCount: number = 0
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    if (frameCount % 2 === 0) element.scrollLeft += Math.min(1, easeIn(timeElapsed, easeInTime)) * speed
    if (status.active) {
      requestID= requestAnimationFrame(animation)
    } else {
      cancelAnimationFrame(requestID)
      callback()
    }
    frameCount++
  }
  requestID = requestAnimationFrame(animation)
}

const touchCtrl: TouchCtrl = (
  trigger,
  direction,
  onTouchStart,
  onTouchEnd
) => {
  trigger.addEventListener('touchstart', () => {
    console.log('touchstart')
    onTouchStart(direction)
  })
  trigger.addEventListener('touchend', () => {
    console.log('touchend')
    onTouchEnd(direction)
  })
  trigger.addEventListener('mousedown', () => {
    console.log('mousedown')
    onTouchStart(direction)
  })
  trigger.addEventListener('mouseup', () => {
    console.log('mouseup')
    onTouchEnd(direction)
  })
}

const startAutoScroll: StartAutoScroll = (
  container,
  status
) => {
  status.onEaseOut.active = false
  status.onTouch.active = false
  status.auto.active = true
  return smoothScrollAuto(
    container,
    1.5,
    status.auto
  )
}

const resetAutoScrollEvent: ResetAutoScrollEvent = (
  container,
  status
) => {
  container.addEventListener('touchstart', () => {
    status.active = false
  }) 
  container.addEventListener('mousedown', () => {
    status.active = false
  }) 
}

export { ctrlTarget, smoothScroll, smoothScrollAuto, touchCtrl, startAutoScroll, resetAutoScrollEvent }
