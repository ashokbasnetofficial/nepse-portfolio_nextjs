import { configureStore } from "@reduxjs/toolkit";
import sipCalculatorSlice from "./slices/sipCalSlice";

const store = configureStore({
    reducer:
    {
        sip: sipCalculatorSlice
    }
});
export default store;