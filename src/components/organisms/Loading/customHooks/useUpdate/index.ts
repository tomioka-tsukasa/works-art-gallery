import { LOADING_TIME } from "@/lib/store/consts";
import { useAppDispatch } from "@/lib/store/hook";
import { update } from "@/lib/store/slice/loadingCtrl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useUpdate() {
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  useEffect(() => {
    dispatch(update({
      complete: false
    }))
    setTimeout(() => {
      dispatch(update({
        complete: true
      }))
    }, LOADING_TIME)
  }, [pathname, dispatch])
}
