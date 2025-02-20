import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import Loader from "../components/Loader";
import { IoMdPricetag } from "react-icons/io";
import { SiOpenproject } from "react-icons/si";
import styles from './DetailsPage.module.css'
import { FaArrowLeft } from "react-icons/fa";
function DetailsPage() {
  const{id}=useParams();
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const produvtDetails=useSelector(store=>
    store.product.products.find(i=>i.id==+id));

  if(!produvtDetails)return <Loader/>
  const{title,image,description,category,price}=produvtDetails
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}><SiOpenproject/>{category}</p>
        <div>
          <span>
            <IoMdPricetag/>
            {price}$
          </span>
          <Link to="/products">
            <FaArrowLeft/>
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage