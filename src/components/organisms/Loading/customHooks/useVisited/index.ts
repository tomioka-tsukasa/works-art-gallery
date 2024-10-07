import { useAppDispatch, useAppSelector } from "@/lib/store/hook"
import { update, visied } from "@/lib/store/slice/loadingCtrl"
import { useEffect } from "react"

export function useVisited() {
  const dispatch = useAppDispatch()
  const isVisited = useAppSelector(selector => selector.loadingCtrl.visied)
  useEffect(() => {
    dispatch(visied())
  }, [isVisited, dispatch])
}
