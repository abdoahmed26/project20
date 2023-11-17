import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name : "cartSlice",
    reducers : {
        addToCart : (state,action)=>{
            const pro = state.find((ele)=>ele.id===action.payload.id);
            if(pro){
                pro.count+=1;
                window.localStorage.product = JSON.stringify(state);
            }
            else{
                let myPro = {...action.payload, count:1};
                state.push(myPro);
                window.localStorage.product= JSON.stringify(state);
            }
        },
        deleteFroCart : (state,action)=>{
            state = state.filter((ele)=>ele.id!==action.payload.id);
            window.localStorage.product= JSON.stringify(state);
            return state;
        },
        deleteAll : ()=>{
            window.localStorage.product= [];
            return [];
        },
        plusCount : (state,action)=>{
            const pro = state.find((ele)=>ele.id===action.payload.id);
            if(pro){
                pro.count+=1;
                window.localStorage.product = JSON.stringify(state);
            }
        },
        minusCount : (state,action)=>{
            const pro = state.find((ele)=>ele.id===action.payload.id);
            if(pro){
                pro.count-=1;
                window.localStorage.product = JSON.stringify(state);
            }
        },
        getProducts :(state,action)=>{
            let products = [...action.payload];
            if(state.length < products.length){
                state.push(...products);
            }
        }
    }
})

export const {addToCart,deleteFroCart,deleteAll,plusCount,minusCount,getProducts} = cartSlice.actions;
export default cartSlice.reducer;