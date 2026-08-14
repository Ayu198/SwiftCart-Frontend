import React from 'react'
import OrderTable from './OrderTable'

const Orders = () => {
  return (
    <div>
      <h1 className = "text-xl mb-5 font-bold">All Orders</h1>
      <OrderTable/>
    </div>
  )
}

export default Orders