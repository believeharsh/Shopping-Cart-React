import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./Feature/CounterSlice"

const store = configureStore ({
    reducer : {
        counter : counterReducer, 
    }
})

export default store ; 