import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import { grey } from '@mui/material/colors'
const CartItem = () => {
    const handleUpdateQuantity = () => {

    }
    return (
        <div className="border border-gray-400 rounded-md relative">
            <div className="p-5 flex gap-3">
                <div>
                    <img src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/1/m/6/s-2-ms-crop-top-manish-enterprises-original-imahgfq7cc4pjf33.jpeg?q=90"
                        className="w-[90px] rounded-md" />
                </div>
                <div className="space-y-2">
                    <h1 className="font-semibold text-lg">H&M</h1>
                    <p className="text-gray-600 font-medium text-sm">Sleek black fitted crop top</p>
                    <p className="text-gray-400 text-xs"><strong>Sold BY:- </strong>H&M</p>
                    <p className="text-sm">7 days Replacement Policy</p>
                    <p className="text-sm text-gray-500"><strong>quantity:- </strong>5</p>
                </div>
            </div>
            <Divider sx={{ color: grey[700] }} />
            <div className = "flex justify-between items-center">
                <div className="px-5 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-2 w-[140px] justify-between">
                        <Button onClick={handleUpdateQuantity} disabled={true}>
                            <Remove />
                        </Button>
                        <span>
                            {5}
                        </span>
                        <Button onClick={handleUpdateQuantity}>
                            <Add />
                        </Button>
                    </div>
                </div>
                <div className="pr-5">
                    <p className="text-gray-700 font-medium">₹999</p>
                </div>
            </div>
            <div className = "absolute top-1 right-1">
                <IconButton color = "primary">
                    <Close/>
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem