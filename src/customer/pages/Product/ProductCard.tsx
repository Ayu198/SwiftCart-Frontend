import { useEffect, useState } from "react";
import "./ProductCard.css"
import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const ProductCard = () => {
    const images = [
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/1/m/6/s-2-ms-crop-top-manish-enterprises-original-imahgfq7cc4pjf33.jpeg?q=90",
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/m/1/w/m-2-ms-crop-top-manish-enterprises-original-imahgfq7npn7wqfq.jpeg?q=90",
    ]
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: any;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isHovered])
    return (

        <>
            <div className="group px-4 relative">
                <div className="card"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {
                        images.map((image, index) => <img className="card-media object-top"
                            src={image} alt="Product Image" key={index}
                            style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
                        />)
                    } { isHovered && <div className="indicator flex flex-col items-center space-y-2">
                            <div className="flex gap-3">
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
                        <h1>H&M</h1>
                        <p>Black Crop Top</p>
                    </div>
                    <div className = "price flex items-center gap-3">
                        <span className = "font-sans text-gray-800">
                            ₹ 999
                        </span>
                        <span className = "thin-line-through text-gray-400">
                            ₹ 1675
                        </span>
                        <span className = "text-primary font-semibold">
                            60% off
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard