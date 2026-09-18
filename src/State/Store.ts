import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector, type TypedUseSelectorHook} from 'react-redux'
import sellerSlice from './seller/sellerSlice'
import sellerProductSlice from './seller/sellerProductSlice'
import ProductSlice from './customer/ProductSlice'
import authSlice from './authSlice'
import CartSlice from './customer/CartSlice'
import orderSlice from './customer/OrderSlice'
import WishlistSlice from './customer/WishlistSlice'
import sellerOrderSlice from './seller/SellerOrderSlice'
import transactionSlice from './seller/transactionSlice'
import adminSlice from './admin/adminSlice'
import customerSlice from './customer/customerSlice'
import dealSlice from './admin/dealSlice'

const rootReducer = combineReducers({
    sellers:sellerSlice,
    sellerProduct:sellerProductSlice,
    product:ProductSlice,
    auth:authSlice,
    cart:CartSlice,
    orders:orderSlice,
    wishlist:WishlistSlice,
    customer:customerSlice,
    

    //seller slice
    sellerOrder:sellerOrderSlice,
    transaction:transactionSlice,

    //admin slice
    admin:adminSlice,
    deal:dealSlice
})

const store = configureStore({
    reducer:rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;

export default store;