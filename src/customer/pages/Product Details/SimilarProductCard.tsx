const SimilarProductCard = () => {
  return (
    <div>
        <div className = "group px-4 relative">
            <div className = "card">
                <img className  = "card-media object-top" src = "https://rukminim2.flixcart.com/image/1536/1536/xif0q/watch/w/z/o/1-sb-1-10430-8-santa-barbara-polo-racquet-club-men-original-imahk4zz8crewrfy.jpeg?q=90">
                </img>
            </div>
            <div className = "details pt-3 space-y-1 group-hover-effect rounded-md">
                <div className = "name">
                    <h1>Santa Barbara</h1>
                    <p>Quartz Watch</p> 
                </div>
                <div className = "price flex items-center gap-3">
                    <span className = "font-sans text-gray-800">
                        ₹18,000
                    </span>
                    <span className = "thin-line-through text-gray-400">
                        ₹20,000
                    </span>
                    <span className = "text-primary font-semibold">
                        10%
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimilarProductCard