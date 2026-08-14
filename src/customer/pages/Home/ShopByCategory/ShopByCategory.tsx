import ShopByCategoryCard from "./ShopByCategoryCard"
const ShopByCategory = () => {
  return (
    <div className="flex flex-wrap gap-7 justify-between lg:px-20">
        {[1,1,1,1,1,11,1,1,1,1,1,1,1,11,1,1,1,1,1,1].
        map((item,index) => <ShopByCategoryCard key={index}/>)}
    </div>
  )
}

export default ShopByCategory