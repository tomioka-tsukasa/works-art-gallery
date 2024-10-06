import { easeInOutQuart, easeOutQuart } from "./easing";
import { resetAutoScroll, smoothScroll, smoothScrollAuto, startAutoScroll, touchCtrl } from "./statics"
import { ScrollDirection, Status, UseSmoothScroll } from "./types";

const status: Status = {
  inited: false,
  auto: {
    active: true, 
  },
  onTouch: {
    active: false, 
  },
  onEaseOut: {
    active: false, 
  },
}

const useSmoothScroll: UseSmoothScroll = (props = {
  inited: () => {},
  autoScroll: true
}) => {
  if (typeof document === 'undefined') return
  const container = document.getElementById('scroll-container') as HTMLElement | null;
  const buttonRight = document.getElementById('scroll-right') as HTMLElement | null;
  const buttonLeft = document.getElementById('scroll-left') as HTMLElement | null;
  if (
    !container
    || !buttonRight
    || !buttonLeft
  ) return 
  const onTouchStart = (
    direction: ScrollDirection
  ) => {
    if (!status.onTouch.active) {
      status.onTouch.active = true
      status.auto.active = false
      status.onEaseOut.active = false
      resetAutoScroll(
        container,
        status.auto
      )
      smoothScrollAuto(
        container,
        direction === 'next' ? 7.5 : -7.5,
        status.onTouch
      )
    }
  }
  const onTouchEnd = (
    direction: ScrollDirection
  ) => {
    if (status.onTouch.active) {
      status.onTouch.active = false
      status.onEaseOut.active = true
      smoothScroll(
        container,
        direction === 'next' ? 75 : -75,
        1000,
        easeOutQuart,
        status.onEaseOut,
        () => {
          startAutoScroll(
            container,
            status
          )
        }
      )
    }
  }
  return {
    status: status,
    bootup() {
      touchCtrl(
        buttonRight,
        'next',
        onTouchStart,
        onTouchEnd,
      )
      touchCtrl(
        buttonLeft,
        'prev',
        onTouchStart,
        onTouchEnd
      )
      status.inited && props.autoScroll && (
        startAutoScroll(
          container,
          status
        )
      )
    },
    init() {
      container.scrollLeft = container.scrollWidth - container.clientWidth
      smoothScroll(
        container,
        -(container.scrollWidth - container.clientWidth),
        3000,
        easeInOutQuart,
        {
          active: true
        },
        () => {
          props?.inited && props.inited()
          status.inited = true
        }
      )
    }
  }
}

export { useSmoothScroll }
