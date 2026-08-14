import { Route, Routes } from 'react-router-dom'
import Profile from '../seller/pages/Account/Profile'
import AddProduct from '../seller/pages/Product/AddProduct'
import Products from '../seller/pages/Product/Products'
import Transaction from '../seller/pages/Payment/Transaction'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'
import Payment from '../seller/pages/Payment/Payment'
import Orders from '../seller/pages/Orders/Orders'

const SellerRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/account" element={<Profile />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/transaction" element={<Transaction />} />
            </Routes>
        </div>
    )
}

export default SellerRoutes