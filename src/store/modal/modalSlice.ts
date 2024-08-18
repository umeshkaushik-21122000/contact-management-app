import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

// Type for the slice state
interface Modal {
    isOpen:boolean
}

// Initial State using type
const initialState: Modal = {
  isOpen:false
};

const modalSlice = createSlice({
  name: "Modal",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<boolean>) => {
        state.isOpen=action.payload;
    },
  },
});

export const {  toggleState } =
  modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const modalState = (state: RootState) => state.modal.isOpen;

export default modalSlice.reducer;
