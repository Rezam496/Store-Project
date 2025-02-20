import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

 const initialState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
};

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            if(!state.selectedItems.find((i)=>i.id==action.payload.id)){
                state.selectedItems.push({...action.payload,quantity:1});
                state.total=sumPrice(state.selectedItems);
                state.itemsCounter=sumQuantity(state.selectedItems);
                state.checkout=false;
            }
        },
        removeItem:(state,action)=>{
            const newSelectedItem=state.selectedItems.filter(i=>i.id!==action.payload.id);
            state.selectedItems=newSelectedItem;
            state.total=sumPrice(state.selectedItems);
            state.itemsCounter=sumQuantity(state.selectedItems);
        },
        increase:(state,action)=>{
            const increaseindex=state.selectedItems.findIndex((item)=>item.id==action.payload.id);
            state.selectedItems[increaseindex].quantity++;
            state.total=sumPrice(state.selectedItems);
            state.itemsCounter=sumQuantity(state.selectedItems);
        },
        decrease:(state,action)=>{
            const decreaseindex=state.selectedItems.findIndex((item)=>item.id==action.payload.id);
            state.selectedItems[decreaseindex].quantity--;
            state.total=sumPrice(state.selectedItems);
            state.itemsCounter=sumQuantity(state.selectedItems);
        },
        checkout:state=>{
            state.selectedItems=[];
            state.checkout=true;
            state.total=0;
            state.itemsCounter=0
        },
    },
});
export default cartSlice.reducer;
export const {addItem,removeItem,increase,decrease,checkout}=cartSlice.actions;

