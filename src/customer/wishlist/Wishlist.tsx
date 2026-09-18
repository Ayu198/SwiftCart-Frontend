import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../State/Store";
import WishlistCard from "./WishlistCard"
import { getWishlistByUserId } from "../../State/customer/WishlistSlice";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const {wishlist} = useAppSelector(store => store)

  useEffect(() => {
    dispatch(getWishlistByUserId())
  },[])
  return (
    <div className = "h-[85vh] p-5 lg:p-20">
      <section>
        <h1> <strong>My Wishlist:-</strong> {wishlist.wishlist?.products.length} items</h1>
        <div className = "pt-10 flex flex-wrap gap-5">
          {wishlist.wishlist?.products.map(((item , index)=><WishlistCard item = {item} key = {index}/>))}
        </div>
      </section>
    </div>
  )
}

export default Wishlist