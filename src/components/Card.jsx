import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helper/helper";
import styles from './Card.module.css'
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

function Card({data}) {

  const{id,title,image,price}=data;

  const[state,dispatch]=useCart();
  
  const quantity=productQuantity(state,id);
  console.log(quantity)

  // console.log(state)
  return (
    <div className={styles.card}>
        <img src={image} alt={title} style={{width:"150px"}}/>
        <h3>{shortenText(title)}</h3>
        <p>{price}$</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}><TbListDetails/></Link>
           <div>

            {quantity==1&&(<button 
              onClick={()=>dispatch({type:"REMOVE_ITEM",payload:data})}>
              <MdDeleteOutline/>
            </button>)}

            {quantity>1&&(<button onClick={()=>dispatch({type:"DECREASE",payload:data})}>-</button>)}

            {!!quantity&&<span>{quantity}</span>}

            {quantity==0?(<button 
              onClick={()=>dispatch({type:"ADD_ITEM",payload:data})}>
              <TbShoppingBagCheck/>
            </button>):(<button onClick={()=>dispatch({type:"INCREASE",payload:data})}>+</button>)}
 
          </div>          
        </div>
    </div>
  )
}

export default Card