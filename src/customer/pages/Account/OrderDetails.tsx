import { Box, Button, Divider } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
import OrderStepper from "./OrderStepper.tsx";
import { Payments } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../State/Store.ts";
import { fetchOrderById, fetchOrderItemById } from "../../../State/customer/OrderSlice.ts";
import { useEffect } from "react";

const OrderDetails = () => {
    const navigate = useNavigate();
    const { orderId, orderItemId } = useParams();
    const dispatch = useAppDispatch();
    const { orders } = useAppSelector(store => store);

    useEffect(() => {
        dispatch(fetchOrderById({ orderId: Number(orderId), jwt: localStorage.getItem("jwt") || "" })),
            dispatch(fetchOrderItemById({ orderItemId: Number(orderItemId), jwt: localStorage.getItem("jwt") || "" }))
    }, [])
    return (
        <Box className="space-y-5">
            <section className="flex flex-col gap-5 justify-center items-center">
                <img className="w-[100px]" src={orders.orderItem?.product.images[0]} />
                <div className="text-sm space-y-1 text-center">
                    <h1 className="font-bold">{orders.orderItem?.product.seller?.businessDetails.businessName}</h1>
                    <p>{orders.orderItem?.product.description}</p>
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
                        <p>{orders.currentOrder?.shippingAddress.name}</p>

                        <Divider flexItem orientation="vertical" />

                        <p>{orders.currentOrder?.shippingAddress.mobile}</p>
                    </div>

                    <p>
                        {`${orders.currentOrder?.shippingAddress.address}, 
                        ${orders.currentOrder?.shippingAddress.state}, 
                        ${orders.currentOrder?.shippingAddress.city}, 
                        ${orders.currentOrder?.shippingAddress.pinCode}`}
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
                                {(orders.orderItem?.product?.mrpPrice ?? 0) -
                                    (orders.orderItem?.product?.sellingPrice ?? 0)}
                                .00
                            </span> {" "}
                            on this item
                        </p>
                    </div>

                    <p className="font-medium">
                        ₹ {orders.orderItem?.sellingPrice}.00
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
                        {orders.orderItem?.product.seller?.businessDetails.businessName}
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