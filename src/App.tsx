import { useEffect, useRef, useState } from 'react'
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
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';
import { fetchSellerProfile } from './State/seller/sellerSlice';
import { useAppDispatch, useAppSelector } from './State/Store';
import Auth from './customer/pages/Auth/Auth';
import { fetchUserProfile } from './State/authSlice';
import PaymentSuccess from './customer/pages/PaymentSuccess';
import Wishlist from './customer/wishlist/Wishlist';
import { homeCategories } from './data/HomeCategories';
import { createHomeCategories } from './State/customer/customerSlice';

function App() {
  const dispatch = useAppDispatch();
  const { sellers, auth } = useAppSelector(store => store);
  const navigate = useNavigate();

  const homeCategoriesInitialized = useRef(false);

  useEffect(() => {

    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));

    if (!homeCategoriesInitialized.current) {
      homeCategoriesInitialized.current = true;
      dispatch(createHomeCategories(homeCategories));
    }

  }, []);
  useEffect(() => {
    if(sellers.profile) {
      navigate("/seller/*")
    }
  } , [sellers.profile])
  useEffect(()=>{
    dispatch(fetchUserProfile({jwt:auth.jwt || localStorage.getItem("jwt")}))
  },[auth.jwt])

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
          <Route path = "/login" element = {<Auth/>}/>
          <Route path = "/products/:category" element = {<Product/>}/>
          <Route path = "/reviews/:productId" element = {<Review/>}/>
          <Route path = "/product-details/:categoryId/:name/:productId" element = {<ProductDetails/>}/>
          <Route path = "/cart" element = {<Cart/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>
          <Route path = "/wishlist" element = {<Wishlist/>}/>
          <Route path = "/payment-success/:orderId" element = {<PaymentSuccess/>}/>
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
