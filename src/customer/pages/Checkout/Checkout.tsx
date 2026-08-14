import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from "@mui/material"
import AddressCard from "./AddressCard"
import { useState } from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const paymentGatewayList = [
    {
        name: "RAZORPAY",
        image: "https://imgs.search.brave.com/ai3yTQng2219E05zshkreKJeVfz_D9-FYo9fa2vKa_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzEw/L1Jhem9ycGF5LUxv/Z28tNTAweDI4MS5q/cGc",
        label: "razorpay"
    },
    {
        name: "STRIPE",
        image: "https://imgs.search.brave.com/6pckGngRioLva27pJ4teQyY8gZnfF0XbZ67-FSI5WdU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDMvU3RyaXBlLVN5/bWJvbC03MDB4Mzk0/LnBuZw",
        label: "stripe"
    }
]

const Checkout = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [paymentGateway , setPaymentGatway] = useState("RAZORPAY");
    const handlePaymentChange = (e:any) => {
        setPaymentGatway(e.target.value);
    }
    return (
        <>
            <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
                <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
                    <div className="col-span-2 space-y-5">
                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold"> Select Addresses</h1>
                            <Button onClick={handleOpen}>
                                Add new Address
                            </Button>
                        </div>
                        <div className="text-sm font-medium space-y-5">
                            <p className="text-gray-600">Saved Address</p>
                            <div className="space-y-3">
                                {[1, 1, 1, 1].map((_, index) => <AddressCard key={index} />)}
                            </div>
                        </div>
                        <div className="py-4 px-5 rounded-md border">
                            <Button onClick={handleOpen}>
                                Add new Address
                            </Button>
                        </div>
                    </div>
                    <div className = "space-y-3">
                        <div>
                            <div className="space-y-3 border border-gray-400 p-5 rounded-md">
                                <h1 className="text-primary font-medium pb-2 text-center">Choose Payment Gateway</h1>
                                <RadioGroup className="flex justify-between pr-0" 
                                row 
                                aria-labelledby={`-label`} 
                                name="row-radio-buttons-group"
                                onChange = {handlePaymentChange}
                                value = {paymentGateway}>
                                    {
                                        paymentGatewayList.map((item) => <FormControlLabel
                                            value={item.name}
                                            control={<Radio />}
                                            className="border w-[45%] pr-2 rounded-md flex justify-between h-[50px]"
                                            label={
                                                <img src={item.image} alt="" className={`${item.name == "STRIPE" ? "pt-2 pb-2" : ""} object-cover`} />
                                            }
                                        />)
                                    }
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="border border-gray-400 rounded-md">
                            <PricingCard />
                            <div className="p-5">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ py: "11px" }}
                                >Check Out</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddressForm />
                </Box>
            </Modal>
        </>
    )
}

export default Checkout