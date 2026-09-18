import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchUserOrderHistory } from '../../../State/customer/OrderSlice';
import OrderItemCard from './OrderItemCard';

const Orders = () => {
  const dispatch = useAppDispatch();
  const {orders} = useAppSelector(store => store)
  useEffect(()=>{
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""))
  },[])
  return (
    <div className = "text-sm min-h-screen">
        <div className = "pb-5">
            <h1 className = "font-semibold">All orders</h1>
            <p>from anytime</p>
        </div>
        <div className = "space-y-2">
            {orders.orders.map((item)=>item.orderItem.map((order,index) => <OrderItemCard item = {order} order = {item}  key = {index}/>))}
        </div>
    </div>
  )
}

export default Orders