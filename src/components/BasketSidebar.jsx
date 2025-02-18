import { BsPatchCheck } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"
import { TbChecklist } from "react-icons/tb"
import styles from './BasketSidebar.module.css';
function BasketSidebar({state:{total,itemsCounter,sheckout},clickHandler}) {
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
        <button onClick={()=>clickHandler("CHECKOUT")}>Checkout</button>
    </div>
  )
}

export default BasketSidebar