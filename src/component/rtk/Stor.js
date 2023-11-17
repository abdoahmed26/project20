import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Cart";
import Fovarite from "./Fovarite";

export const store = configureStore({
    reducer : {
        myCart : Cart,
        myFov : Fovarite,
    }
})