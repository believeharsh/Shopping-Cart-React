import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Feature/CounterSlice"; // Correct default import

const store = configureStore({
  reducer: {
    counter: counterReducer, // Match the default export
  },
});

export default store;
