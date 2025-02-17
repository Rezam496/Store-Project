import { createContext, useContext, useReducer } from "react"
import { sumProducts } from "../helper/helper";

const initalState={
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
};
const reducer=(state , action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find((item)=>item.id==action.payload.id)){
                state.selectedItems.push({...action.payload,quantity:1});
            }return{
                ...state,
                checkout:false, 
                ...sumProducts(state.selectedItems),
            } 
        case "REMOVE_ITEM" :
            const newSelectedItem=state.selectedItems.filter(item=>item.id!==action.payload.id); 
            return {
                ...state,
                selectedItems:[...newSelectedItem],
                ...sumProducts(newSelectedItem)
            } 
        case "INCREASE":
             const increaseindex=state.selectedItems.findIndex((item)=>item.id==action.payload.id);  
             state.selectedItems[increaseindex].quantity++;
             return {
                ...state,
                ...sumProducts(state.selectedItems)
             } 
        case "DECREASE":
            const decreaseindex=state.selectedItems.findIndex((item)=>item.id==action.payload.id);  
             state.selectedItems[decreaseindex].quantity--;
             return {
                ...state,
                ...sumProducts(state.selectedItems)
             } 
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter:0,
                total:0,
                checkout:true
            }                        
        default:
            throw new Error("Invalid Action!")
    }
}
const CartContext=createContext();

function CartProvider({children}) {
   const[state,dispatch]=useReducer(reducer,initalState)
  return (
    <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
  )
};
const useCart=()=>{
    
    const{state,dispatch}=useContext(CartContext);
    return [state,dispatch]
};


export default CartProvider
export {useCart}