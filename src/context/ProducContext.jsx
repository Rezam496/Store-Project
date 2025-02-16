import { createContext, useContext, useEffect,useState } from "react"
import api from "../services/config"
const ProductContext=createContext();

function ProductsProvider({children}) {
    const[product,setProducts]=useState([]);

    useEffect(()=>{
        const fatchProducts=async()=>{
            try {
                setProducts(await api.get("/products"));                
            } catch (error) {
                console.log(error.message );
                }
            };
        fatchProducts();
    },[]);
    
  return (
    <ProductContext.Provider value={product}>
        {children}
    </ProductContext.Provider>
    );  
}
const useProducts=()=>{
    const products=useContext(ProductContext);
    return products
}

export default ProductsProvider;
export {useProducts};