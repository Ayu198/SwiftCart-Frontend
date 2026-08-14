import { ElectricBolt } from '@mui/icons-material'
import { Avatar} from '@mui/material'

const OrderItem = () => {
  return (
    <div className = "text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
        <div className = "flex items-center gap-5">
            <div>
                <Avatar sizes = "small" sx = {{bgcolor:"primary.main"}}>
                    <ElectricBolt/>
                </Avatar>
            </div>
            <div>
                <h1 className = "font-bold text-primary">PENDING</h1>
                <p>Arriving By Mon, 10 Aug</p>
            </div>
        </div>
        <div className = "p-5 bg-teal-50 flex gap-3">
            <div>
                <img className = "w-[70px]" 
                src = "https://rukminim2.flixcart.com/image/1536/1536/xif0q/top/m/1/w/m-2-ms-crop-top-manish-enterprises-original-imahgfq7npn7wqfq.jpeg?q=90">
                </img>
            </div>
            <div className = "w-full space-y-2">
            <h1 className = "font-bold">H&M</h1>
            <p>
                Cropped, fitted top in soft ribbed jersey with a round neckline and short sleeves.| 
                The model (height 5'8'') is wearing a size S | 95% Cotton, 5% Elastane
            </p>
            <p>
                <strong>size: </strong>
                FREE
            </p>
        </div>
        </div>
    </div>
  )
}

export default OrderItem