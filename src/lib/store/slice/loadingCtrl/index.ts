import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, UpdateAction } from "./types";

const initialState: InitialState = {
  complete: false,
  visied: false
}

const loadingCtrlSlice = createSlice({
  name: 'loadingCtrl',
  initialState,
  reducers: {
    update(state, action: PayloadAction<UpdateAction>) {
      state.complete = action.payload.complete
    },
    visied(state) {
      state.visied = true
    },
  }
})

export const { update, visied } = loadingCtrlSlice.actions
export default loadingCtrlSlice.reducer
