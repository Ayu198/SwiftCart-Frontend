import { Button, Divider } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import { useState } from 'react';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';

const ProductDetails = () => {
    const [quantity , setQuantity] = useState(0);
    return (
        <div className="px-5 lg:px-20 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
                        {
                            [1, 1, 1, 1].map((item) => <img className="lg:w-full w-[50px] cursor-pointer rounded-md"
                                src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/watch/v/v/a/-watermarked-original-imahz8xugkedg96f.jpeg?q=90" alt="">
                            </img>)
                        }
                    </div>
                    <div className="w-full lg:w-[85%]">
                        <img className="w-full rounded-md" src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/watch/v/v/a/-watermarked-original-imahz8xugkedg96f.jpeg?q=90" alt="" />
                    </div>
                </section>
                <section>
                    <h1 className="font-bold text-lg text-primary">FOSSIL Analog Watch</h1>
                    <p className="text-gray-500 font-semibold">Men Golden Fossile Watch</p>
                    <div className="flex justify-between items-center py-2 border-1 border-gray-200 w-[180px] px-3 mt-5">
                        <div className="flex gap-1 items-center">
                            <span>
                                4
                            </span>
                            <StarIcon sx={{ color: "primary.main", fontSize: "17px" }} />
                        </div>
                        <Divider orientation='vertical' flexItem />
                        <span>
                            234 Ratings
                        </span>
                    </div>
                    <div>
                        <div className="price flex items-center gap-3 mt-5 text-2xl">
                            <span className="font-sans text-gray-800">
                                ₹ 20,000
                            </span>
                            <span className="line-through text-gray-400">
                                ₹ 33,333
                            </span>
                            <span className="text-primary font-semibold">
                                60%
                            </span>
                        </div>
                        <p className = "text-sm">
                            Inclusive of All taxes. Free shipping above ₹1500
                        </p>
                    </div>
                    <div className = "mt-7 space-y-3">
                        <div className = "flex items-centerr gap-4">
                            <Shield sx = {{color:"primary.main"}}/>
                            <p>Authentic & Quality Assured</p>
                        </div>
                        <div className = "flex items-centerr gap-4">
                            <WorkspacePremium sx = {{color:"primary.main"}}/>
                            <p>100% Money Back Gurantee</p>
                        </div>
                        <div className = "flex items-centerr gap-4">
                            <LocalShipping sx = {{color:"primary.main"}}/>
                            <p>Free Shipping and Returns</p>
                        </div>
                        <div className = "flex items-centerr gap-4">
                            <Wallet sx = {{color:"primary.main"}}/>
                            <p>Pay on Delivery might be available</p>
                        </div>
                    </div>
                    <div className = "mt-7 space-y-2">
                        <h1>QUANTITY</h1>
                        <div className = "flex items-center gap-2 w-[140px] justify-between">
                            <Button disabled = {quantity ==1} onClick = {()=>setQuantity(quantity -1)}>
                                <Remove/>
                            </Button>
                            <span>
                                {quantity}
                            </span>
                            <Button onClick = {() => setQuantity(quantity + 1)}>
                                <Add/>
                            </Button>
                        </div>
                    </div>
                    <div className = "mt-12 flex items-center gap-5">
                        <Button
                        fullWidth
                        sx = {{py:"1rem"}}
                        variant = "contained"
                        startIcon = {<AddShoppingCart/>}
                        >
                            Add to Bag
                        </Button>
                        <Button
                        fullWidth
                        sx = {{py:"1rem"}}
                        variant = "outlined"
                        startIcon = {<FavoriteBorder/>}
                        >
                            Add to WishList
                        </Button>
                    </div>
                    <div className = "mt-5">
                        <p>
                            The Townsman watch is a modern 
                            icon, crafted to showcase the intricate gold-tone automatic movement. 
                            The self-winding mechanism is exposed through a rich gold-tone sunray 
                            skeleton dial delivering an uncompromising view of the inner workings. 
                            Created for precise timekeeping, it features a gold-tone stainless steel 
                            bracelet that offers a sleek and refined look. It's a true standout for 
                            effortless, everyday style.
                        </p>
                    </div>
                    <div className = "mt-12 space-y-5">
                        <ReviewCard/>
                        <Divider/>
                    </div>

                </section>
            </div>
            <div className ="mt-20">
                <h1 className = "text-lg font-bold">
                    Similar Products
                </h1> 
                <div className ="pt-5">
                    <SimilarProduct/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails