"use client";
import { configureStore } from "@reduxjs/toolkit";
import sipCalculatorSlice from "./slices/sipCalSlice";
import emiSlice from "./slices/emiSlice";
import shareSellCalculatorSlice from "./slices/shareSellCalculatorSlice";
import shareBuyCalculatorSlice from "./slices/shareBuyCalculatorSlice";
import fdCalculatorSlice from "./slices/fdSlice";
import dividendSlice from "./slices/dividendSlice";

const store = configureStore({
  reducer: {
    sip: sipCalculatorSlice,
    emi: emiSlice,
    sell: shareSellCalculatorSlice,
    buy: shareBuyCalculatorSlice,
    fd: fdCalculatorSlice,
    dividend: dividendSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
