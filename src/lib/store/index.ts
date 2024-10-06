import { configureStore } from '@reduxjs/toolkit'
import loadingCtrl from './slice/loadingCtrl'

export const makeStore = () => {
  
  return configureStore({
    reducer: {
      loadingCtrl
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
