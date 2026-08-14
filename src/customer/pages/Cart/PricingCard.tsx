import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
    <div className = "space-y-3 p-5">
      <div className = "flex items-center justify-between">
        <span>
          Subtotal
        </span>
        <span>
          ₹899
        </span>
      </div>
      <div className = "flex items-center justify-between">
        <span>
          Discount
        </span>
        <span>
          ₹699
        </span>
      </div>
      <div className = "flex items-center justify-between">
        <span>
          Shipping
        </span>
        <span>
          ₹69
        </span>
      </div>
      <div className = "flex items-center justify-between">
        <span>
          Platform Fee
        </span>
        <span>
          Free
        </span>
      </div>
    </div>
    <Divider/>
    <div className = "flex justify-between items-center p-5 text-primary">
      <span>Total</span>
      <span>₹ 1005</span>
    </div>
    </>
  )
}

export default PricingCard