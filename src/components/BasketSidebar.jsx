import { BsPatchCheck } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"
import { TbChecklist } from "react-icons/tb"
import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

import styles from './BasketSidebar.module.css';

function BasketSidebar({state:{total,itemsCounter,sheckout}}) {
  const dispatch=useDispatch();
  return (
    <div className={styles.sidebar}>
        <div>
            <TbChecklist/>
            <p>Total:</p>
            <span>{total}$</span>
        </div>
        <div>
            <FaHashtag/>
            <p>Quantity:</p>
            <span>{itemsCounter}</span>
        </div>
        <div>
            <BsPatchCheck/>
            <p>Total:</p>
            <span>{!sheckout&&"Pending..."}</span>
        </div>
        <button onClick={()=>dispatch(checkout())}>Checkout</button>
    </div>
  )
}

export default BasketSidebar