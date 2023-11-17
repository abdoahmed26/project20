import { createSlice } from "@reduxjs/toolkit";

export const fovSlice = createSlice({
    initialState:[],
    name : "fovSlice",
    reducers : {
        addToFav : (state,action)=>{
            const pro = state.find((ele)=>ele.id===action.payload.id);
            if(!pro){
                let myPro = {...action.payload};
                state.push(myPro);
                window.localStorage.fovaurite = JSON.stringify(state);
            }
        },
        deleteFroFav : (state,action)=>{
            state = state.filter((ele)=>ele.id!==action.payload.id);
            window.localStorage.fovaurite = JSON.stringify(state);
            return state;
        },
        deleteAllFav : ()=>{
            window.localStorage.fovaurite = [];
            return [];
        },
        getFavo :(state,action)=>{
            let products = [...action.payload];
            if(state.length < products.length){
                state.push(...products);
            }
        }
    }
})

export const {addToFav,deleteFroFav,deleteAllFav,getFavo} = fovSlice.actions;
export default fovSlice.reducer;