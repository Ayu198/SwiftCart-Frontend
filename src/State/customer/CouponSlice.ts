import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Cart } from "../../types/CartTypes";
import { api } from "../../config/Api";
import type { CouponState } from "../../types/CouponType";

const API_URL = "/api/coupon";
export const applyCoupon = createAsyncThunk<
Cart, {
    apply:string;
    code:string;
    orderValue:string;
    jwt:string;
}, {
    rejectValue:string
}
>( 
    "coupon/applyCoupon", 
    async({apply,code,orderValue,jwt} , {rejectWithValue}) => {
        try {
            const response = await api.post(`${API_URL}/apply`,null, {
                params : {apply,code,orderValue},
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("Coupon Applied" , response.data);
            return response.data;
        } catch(error:any) {
            console.log("error--------",error.response?.data.error);
            return rejectWithValue("Failed to apply coupon")
        }
    }
);

const initialState:CouponState = {
    coupons:[],
    cart:null,
    loading:false,
    error:null,
    couponCreated:false,
    couponApplied : false
}

const couponSlice = createSlice(
    {
        name:"coupon",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(applyCoupon.pending , (state) => {
                state.loading = true;
                state.error = null;
                state.couponApplied = false;
            }).addCase(applyCoupon.fulfilled,(state,action)=> {
                state.loading = false;
                state.cart = action.payload;
                if(action.meta.arg.apply==="true") {
                    state.couponApplied = true;
                }
            })
        }
    }
)