import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from './Layout.module.css';
function Layout({children}) {
  const state=useSelector((store)=>store.cart)  
  return (
    <>
        <header className={styles.header}>
            <Link to="/products">Shopping Project</Link>
            <Link to="/checkout">
            <div>
                <PiShoppingCartBold/>
                {!!state.itemsCounter &&<span>{state.itemsCounter}</span>}
            </div>
            </Link>
        </header>
        {children}
        <footer className={styles.footer}>Developed by Reza</footer>
    </>
  )
}

export default Layout