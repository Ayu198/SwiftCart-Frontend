import { useEffect, useState } from "react";
import "./ProductCard.css"
import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";
import type { Product } from "../../../types/ProductTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../State/Store";
import { addProductToWishlist } from "../../../State/customer/WishlistSlice";

const ProductCard = ({item}:{item:Product}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        let interval: any;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isHovered])

    const handleWishlist = (event:React.MouseEvent) => {
        event.stopPropagation();
        item.id && dispatch(addProductToWishlist({productId : item.id}))
    }
    return (

        <>
            <div className="group px-4 relative">
                <div className="card"
                onClick = {()=>navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item.id}`)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {
                        item.images.map((image, index) => <img className="card-media object-top"
                            src={image} alt="Product Image" key={index}
                            style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
                        />)
                    } { isHovered && <div className="indicator flex flex-col items-center space-y-2">
                            <div className="flex gap-3">
                                <Button 
                                    onClick = {handleWishlist}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#4F46E5",
                                        border: "1px solid #E2E8F0",
                                        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.12)",
                                        "&:hover": {
                                            backgroundColor: "#4F46E5",
                                            color: "#FFFFFF",
                                            boxShadow: "0 6px 16px rgba(15, 23, 42, 0.16)",
                                        },
                                    }}
                                >
                                    <FavoriteBorderIcon />
                                </Button>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#FFFFFF",
                                        color: "#4F46E5",
                                        border: "1px solid #E2E8F0",
                                        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.12)",
                                        "&:hover": {
                                            backgroundColor: "#4F46E5",
                                            color: "#FFFFFF",
                                            boxShadow: "0 6px 16px rgba(15, 23, 42, 0.16)",
                                        },
                                    }}
                                >
                                    <ModeComment />
                                </Button>
                            </div>
                        </div>
                    }
                </div>
                <div className = "details pt-3 space-y-1 group-hover-effect rounded-md">
                    <div className ="name">
                        <h1>{item.seller?.businessDetails.businessName}</h1>
                        <p>{item.title}</p>   
                    </div>
                    <div className = "price flex items-center gap-3">
                        <span className = "font-sans text-gray-800">
                            ₹{item.sellingPrice}
                        </span>
                        <span className = "thin-line-through text-gray-400">
                            ₹{item.mrpPrice}
                        </span>
                        <span className = "text-primary font-semibold">
                            {item.discountPercent}%
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard