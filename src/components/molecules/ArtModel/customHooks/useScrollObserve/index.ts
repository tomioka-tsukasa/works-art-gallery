import { Dispatch, useEffect } from "react"

type UseScrollObserve = (
  artModel: Cms.ArtModel,
  setView: Dispatch<boolean>,
  active?: boolean,
) => void

type SetObserve = (
  artModel: Cms.ArtModel,
  setView: Dispatch<boolean>
) => void

const bodyMarginLeft = () => {
  return (innerWidth - document.body.clientWidth) / 2
}

const observe: (
  e: HTMLElement
) => boolean = (
  e
) => {
  const rect = e?.getBoundingClientRect()
  if (!rect || !e) return false
  return rect.x - bodyMarginLeft() < document.body.clientWidth / 1.8
}

const setObserve: SetObserve = (
  artModel,
  setView, 
) => {
  const e = document.querySelector(`#${artModel.slug}`) as HTMLElement
  const animation = () => {
    setView(observe(e))
    requestAnimationFrame(animation) 
  }
  requestAnimationFrame(animation)
}

const useScrollObserve: UseScrollObserve = (
  artModel,
  setView,
  active = true,
) => {
  useEffect(() => {
    active && setObserve(
      artModel,
      setView,
    )
  }, [artModel, setView, active])
}

export { useScrollObserve }
