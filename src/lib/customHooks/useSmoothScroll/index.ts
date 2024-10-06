import { easeInOutQuart, easeOutQuart } from "./easing";
import { smoothScroll, smoothScrollAuto, startAutoScroll, touchCtrl } from "./statics"
import { ScrollDirection, Status, UseSmoothScroll } from "./types";

const status: Status = {
  auto: {
    active: true, 
  },
  onTouch: {
    active: false, 
  },
  onEaseOut: {
    active: false, 
  },
  inited: false,
}

const useSmoothScroll: UseSmoothScroll = (props) => {
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
      smoothScrollAuto(
        container,
        direction === 'next' ? 7.5 : -7.5,
        status.onTouch,
        () => smoothScroll(
          container,
          direction === 'next' ? 75 : -75,
          1000,
          easeOutQuart,
          status.onEaseOut,
        )
      )
    }
  }
  const onTouchEnd = () => {
    if (status.onTouch.active) {
      status.onTouch.active = false
      status.onEaseOut.active = true
      status.auto.active = true
      startAutoScroll(
        container,
        status.auto
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
        onTouchEnd
      )
      touchCtrl(
        buttonLeft,
        'prev',
        onTouchStart,
        onTouchEnd
      )
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
          startAutoScroll(
            container,
            status.auto
          )
          props.inited && props.inited()
          status.inited = true
        }
      )
    }
  }
}

export { useSmoothScroll }
