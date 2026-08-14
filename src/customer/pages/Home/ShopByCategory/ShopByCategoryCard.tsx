import "./ShopByCategory.css";
const ShopByCategoryCard = () => {
  return (
    <div className = "flex gap-3 flex-col justify-center items-center group cursor-pointer">
        <div className = "custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[259px] rounded-full bg-primary">
            <img className = "rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full" 
            src = "https://i.pinimg.com/736x/d9/50/1b/d9501b39df555102a9b163a085d71183.jpg">
            </img>
        </div>
        <h1>Crop Tops</h1>
    </div>
  )
}

export default ShopByCategoryCard