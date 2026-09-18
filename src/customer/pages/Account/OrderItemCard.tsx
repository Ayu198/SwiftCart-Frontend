import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import type { Order, OrderItem } from '../../../types/OrderTypes'
import { useNavigate } from 'react-router-dom';

const OrderItemCard = ({ item, order }: { item: OrderItem; order: Order }) => {
    const navigate = useNavigate();

    const formatDeliveryDate = (date: string) => {
        return new Date(date).toLocaleDateString("en-IN", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });
    };
    return (
        <div onClick={() => navigate(`/account/order/${order.id}/${item.id}`)} className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
            <div className="flex items-center gap-5">
                <div>
                    <Avatar sizes="small" sx={{ bgcolor: "primary.main" }}>
                        <ElectricBolt />
                    </Avatar>
                </div>
                <div>
                    <h1 className="font-bold text-primary">PENDING</h1>
                    Arriving by{" "}
                    <span className="font-medium text-gray-900">
                        {formatDeliveryDate(order.deliverDate)}
                    </span>
                </div>
            </div>
            <div className="p-5 bg-teal-50 flex gap-3">
                <div>
                    <img className="w-[70px]"
                        src={item.product.images[0]}>
                    </img>
                </div>
                <div className="w-full space-y-2">
                    <h1 className="font-bold">{item.product.seller?.businessDetails.businessName}</h1>
                    <p>
                        {item.product.description}
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

export default OrderItemCard