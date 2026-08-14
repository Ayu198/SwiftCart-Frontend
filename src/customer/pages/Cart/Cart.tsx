import { Close, LocalOffer } from "@mui/icons-material"
import CartItem from "./CartItem"
import { Button, IconButton, TextField } from "@mui/material"
import { useState } from "react";
import PricingCard from "./PricingCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [couponCode, setCouponCode] = useState("");
    const navigate = useNavigate();
    const handleChange = (e: any) => {
        setCouponCode(e.target.value);
    }
    return (
        <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="cartItemSection lg:col-span-2 space-y-3">
                    {[1, 1, 1, 1, 11, 1, 11, 1,].map((_, index) => <CartItem key={index} />)}
                </div>
                <div className="col-span-1 text-sm space-y-3">
                    <div className="border border-gray-400 rounded-md px-5 py-3 space-y-5">
                        <div className="flex gap-3 text-lg items-center">
                            <div className="flex gap-3 items-center text-sm">
                                <LocalOffer sx={{ color: "primary.main", fontSize: "20px" }} />
                            </div>
                            <span>Apply Coupons</span>
                        </div>
                        {true ? <div className="flex items-center gap-3">
                            <TextField size="small" onChange={handleChange} id="outlined-basics"
                                placeholder='coupon code' variant="outlined" sx={{ width: "250px" }} />
                            <Button size="small" sx={{ fontWeight: 600, color: "primary.main" }}>
                                Apply
                            </Button>
                        </div> : <div className = "flex">
                            <div className = "p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                                <span className = "font-bold text-md">Coupon Applied</span>
                                <IconButton size = 'small'>
                                    <Close className = "text-red-600"/>
                                </IconButton>
                            </div>
                        </div>

                        }
                    </div>
                    <div className = "border border-gray-400 rounded-md">
                        <PricingCard/>
                        <div className = "p-5">
                            <Button onClick = {()=>navigate("/checkout")}
                            fullWidth
                            variant = "contained"
                            sx = {{py:"11px"}}
                            >Buy now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart