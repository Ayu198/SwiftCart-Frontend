import type { HomeCategory } from "../../../../types/HomeCategoryTypes";
import "./ShopByCategory.css";
const ShopByCategoryCard = ({item}:{item:HomeCategory}) => {
  return (
    <div className = "flex gap-3 flex-col justify-center items-center group cursor-pointer">
        <div className = "custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[259px] rounded-full bg-primary">
            <img className = "rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full" 
            src = {item.image}>
            </img>
        </div>
        <h1>{item.name}</h1>
    </div>
  )
}

export default ShopByCategoryCard