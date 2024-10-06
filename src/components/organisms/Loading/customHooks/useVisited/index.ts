import { useAppDispatch } from "@/lib/store/hook"
import { visied } from "@/lib/store/slice/loadingCtrl"
import { useEffect } from "react"

export function useVisited() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(visied())
  })
}
