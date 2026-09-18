import { useAppSelector } from "../../../../State/Store"
import ShopByCategoryCard from "./ShopByCategoryCard"
const ShopByCategory = () => {
  const {customer} = useAppSelector(store => store)
  return (
    <div className="flex flex-wrap gap-7 justify-between lg:px-20">
        {customer.homePageData?.shopByCategories.
        map((item,index) => <ShopByCategoryCard item = {item} key={index}/>)}
    </div>
  )
}

export default ShopByCategory