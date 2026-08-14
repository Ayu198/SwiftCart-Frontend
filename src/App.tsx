import { useState } from 'react'
import NavBar from './customer/components/Navbar/Navbar';

import './App.css'
import { ThemeProvider } from '@mui/material';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Product Details/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { Route, Routes } from 'react-router-dom';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme = {customeTheme}>
      <div>
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Review/> */} 
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Account/> */}
        <NavBar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/products/:category" element = {<Product/>}/>
          <Route path = "/reviews/:productId" element = {<Review/>}/>
          <Route path = "/product-details/:categoryId/:name/:productId" element = {<ProductDetails/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>
          <Route path = "/account/*" element = {<Account/>}/>
          <Route path = "/become-seller" element = {<BecomeSeller/>}/>
          <Route path = "/seller/*" element = {<SellerDashboard/>}/>
          <Route path = "/admin/*" element = {<AdminDashboard/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
