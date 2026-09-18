import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Order, OrderItem, OrderState } from "../../types/OrderTypes";
import { api } from "../../config/Api";
import type { Address } from "../../types/UserTypes";

const initialState:OrderState = {
    orders:[],
    orderItem:null,
    currentOrder:null,
    paymentOrder:null,
    loading:false,
    error:null,
    orderCanceled:false
}

const API_URL = "/api/orders";

export const fetchUserOrderHistory = createAsyncThunk<Order[] , string>(
    "orders/fetchUserOrderHistory",
    async(jwt,{rejectWithValue})=> {
        try {
            const response = await api.get<Order[]>(`${API_URL}/user` , {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            console.log("Order History---------" , response.data);
            return response.data;
        } catch (error : any ) {
            return rejectWithValue(
                error.response.data.error || "Failed to fetch the User Order History"
            );
        }
    }
)

export const fetchOrderById = createAsyncThunk<Order,{orderId:number ; jwt:string}>(
    "ordes/fetechOrderById" , 
    async({orderId,jwt} , {rejectWithValue})=> {
        try {
            const response = await api.get<Order>(`${API_URL}/${orderId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Order By id------",response.data);
            return response.data;
        } catch(error:any) {
            return rejectWithValue (
                error.response.data.error || "failed to fetch the Order By id"
            );
        }
    }
)

export const createOrder = createAsyncThunk<any,{
    address:Address;jwt:string;paymentGateway:string
}>(
    "orders/createOrder",
    async({address,jwt,paymentGateway},{rejectWithValue})=>{
        try {
            const response = await api.post(`${API_URL}`,address,{
                params:{
                    paymentMethod:paymentGateway
                },
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            });
            console.log("Order Create SuccessFullly" , response.data);
            if(response.data.payment_link_url) {
                window.location.href = response.data.payment_link_url;
            }
            return response.data;
        } catch(error:any) {
            return rejectWithValue(
                error.response.data.error || "Failed to create the Order"
            )
        }
    }
)

export const fetchOrderItemById = createAsyncThunk<OrderItem, {
    orderItemId:number;jwt:string
}>(
    "orders/fetchOrderItemById" , 
    async({orderItemId , jwt} , {rejectWithValue}) => {
        try {
            const response = await api.get<OrderItem>(`${API_URL}/item/${orderItemId}` , {
                headers: {
                    Authorization : `Bearer ${jwt}`,
                },
            });
            console.log("Order Item fetched Successfully ----" , response.data);
            return response.data;
        } catch (error:any) {
            return rejectWithValue(
                error.response.data.error || "failed to fetch order Item By Id"
            );
        }
    }
)

export const paymentSuccess = createAsyncThunk<any, {
    paymentId:string;jwt:string;paymenLinkId:string
} , {
    rejectValue:string
}>(
    "orders/paymentSuccess",
    async({paymentId , jwt,paymenLinkId} , {rejectWithValue}) => {
        try {
            const response = await api.get(`/api/payment/${paymentId}`, {
                params:{
                    paymentLinkId : paymenLinkId
                },
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            console.log("Payment successfully---------" ,response.data);
            return response.data;
        } catch (error:any) {
            return rejectWithValue (
                error.response.data.error || "Payment failed"
            )
        }
    }
)

export const cancelOrder = createAsyncThunk<Order,any> (
    "orders/cancelOrder" , 
    async(orderId , {rejectWithValue}) => {
        try {
            const response = await api.put(`${API_URL}/${orderId}/cancel` , {} , {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("jwt")}`,
                }
            });
            console.log("Order Cancelled Succesfully" , response.data);
            return response.data;
        } catch(error:any) {
            return rejectWithValue (
                error.response.data.error || "Error in Cancelling Order"
            )
        }
    }
)

const orderSlice = createSlice({
    name : "orders",
    initialState,
    reducers : {},
    extraReducers:(builder)=>{
        //fetch User Order history 
        builder.addCase(fetchUserOrderHistory.pending , (state)=> {
            state.loading= true;
            state.error = null;
            state.orderCanceled = false;
        }).addCase(fetchUserOrderHistory.fulfilled , (state,action:PayloadAction<Order[]>)=> {
            state.orders = action.payload;
            state.loading = false;
        }).addCase(fetchUserOrderHistory.rejected , (state,action)=> {
            state.loading = false;
            state.error = action.payload as string
        })

        //fetch order By Id
        builder.addCase(fetchOrderById.pending,(state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchOrderById.fulfilled , (state,action:PayloadAction<Order>)=>{
            state.currentOrder = action.payload;
            state.loading = false;
        }).addCase(fetchOrderById.rejected , (state,action)=> {
            state.loading = false;
            state.error = action.payload as string
        })

        //create order
        builder.addCase(createOrder.pending ,(state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createOrder.fulfilled , (state,action:PayloadAction<any>) => {
            state.paymentOrder = action.payload;
            state.loading = false;
        }).addCase(createOrder.rejected , (state,action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        //fetch Order Item By Id
        builder.addCase(fetchOrderItemById.pending , (state)=> {
            state.loading = true;
            state.error = null;
        }).addCase(fetchOrderItemById.fulfilled,(state,action:PayloadAction<OrderItem>)=>{
            state.orderItem = action.payload;
            state.loading = false;
        }).addCase(fetchOrderItemById.rejected , (state,action)=> {
            state.loading = false;
            state.error= action.payload as string;
        })

        //payment Success Handler 
        builder.addCase(paymentSuccess.pending , (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(paymentSuccess.fulfilled , (state,action) => {
            state.loading = false;
            console.log("Payment Success",action.payload);
        }).addCase(paymentSuccess.rejected , (state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })

        //Cancel Order Handler 
        builder.addCase(cancelOrder.pending , (state) => {
            state.loading = true;
            state.error = null;
            state.orderCanceled = false;
        }).addCase(cancelOrder.fulfilled , (state,action) => {
            state.loading = false;
            state.orders = state.orders.map((order) => 
                order.id===action.payload.id ? action.payload : order
            );
            state.orderCanceled = true;
            state.currentOrder = action.payload;
        }).addCase(cancelOrder.rejected , (state,action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })
    },
});

export default orderSlice.reducer;