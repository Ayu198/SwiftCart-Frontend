import { Box, Button, Divider } from "@mui/material"
import { useNavigate } from "react-router-dom";
import OrderStepper from "./OrderStepper.tsx";
import { Payments } from "@mui/icons-material";

const OrderDetails = () => {
    const navigate = useNavigate();
    return (
        <Box className="space-y-5">
            <section className="flex flex-col gap-5 justify-center items-center">
                <img className="w-[100px]" src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/m/1/w/m-2-ms-crop-top-manish-enterprises-original-imahgfq7npn7wqfq.jpeg?q=90" />
                <div className="text-sm space-y-1 text-center">
                    <h1 className="font-bold">H&M</h1>
                    <p>Cropped, fitted top in soft ribbed jersey with a round neckline and short sleeves.|
                        The model (height 5'8'') is wearing a size S | 95% Cotton, 5% Elastane</p>
                    <p><strong>Size:</strong>S</p>
                </div>
                <div>
                    <Button onClick={() => navigate(`/reviews/${5}/create`)}
                    >Write Review</Button>
                </div>
            </section>
            <section className="border p-5">
                <OrderStepper orderStatus={'SHIPPED'} />
            </section>
            <div className="border p-5">
                <h1 className="font-bold pb-3">Delivery Address</h1>

                <div className="text-sm space-y-2">
                    <div className="flex gap-5 font-medium">
                        <p>{"Swift"}</p>

                        <Divider flexItem orientation="vertical" />

                        <p>{9354547924}</p>
                    </div>

                    <p>
                        Gali No. 09, Madan Puri, Gurugram
                    </p>
                </div>
            </div>
            <div className="border space-y-4">
                <div className="flex justify-between text-sm pt-5 px-5">
                    <div className="space-y-1">
                        <p className="font-bold">Total Item Price</p>

                        <p>
                            You saved {" "}
                            <span className="text-primary font-medium text-xs">
                                ₹
                                {"600"}
                                .00
                            </span> {" "}
                            on this item
                        </p>
                    </div>

                    <p className="font-medium">
                        ₹ 999.00
                    </p>
                </div>

                <div className="px-5">
                    <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
                        <Payments />
                        <p>Pay On Delivery</p>
                    </div>
                </div>
                <Divider />
                <div className="px-5 pb-5">
                    <p className="text-xs">
                        <strong>Sold by : </strong>
                        {"H&M"}
                    </p>
                </div>

                <div className="p-10">
                    <Button
                        disabled={true}
                        // onClick={handleCancelOrder}
                        color="error"
                        sx={{ py: "0.7rem" }}
                        className=""
                        variant="outlined"
                        fullWidth
                    >
                        {true
                            ? "order canceled"
                            : "Cancel Order"}
                    </Button>
                </div>
            </div>
        </Box>
    )
}

export default OrderDetails