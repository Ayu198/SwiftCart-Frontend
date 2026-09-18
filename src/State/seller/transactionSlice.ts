import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { Order } from "../../types/OrderTypes";
import type { Seller } from "../../types/SellerTypes";
import type { User } from "../../types/UserTypes";

interface TransactionState {
    transactions : Transaction[];
    transaction:Transaction | null;
    loading : boolean;
    error : string | null;
}

export interface Transaction {
    id:number;
    customer:User;
    order:Order;
    seller:Seller;
    date:string;
}

const initialState : TransactionState = {
    transactions:[],
    transaction : null,
    loading : false,
    error:null,
}

export const fetchTransactionBySeller = createAsyncThunk<Transaction[], string, {rejectValue:string}>(
"transactions/fetchTransactionBySeller" , async(jwt , {rejectWithValue})=>{
    try {
        const response = await api.get('/api/transactions/seller' , {
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("Transaction fetched successfully" , response.data);
        return response.data;
    } catch (error:any) {
        return rejectWithValue (
            error.response.data.message || "Failed to Fetch Transaction"
        )
    }
}
)

export const fetchAllTransactions = createAsyncThunk<Transaction[] , void , {rejectValue : string}>(
    'transactions/fetchAllTransactions' , async(_ , {rejectWithValue}) => {
        try {
            const response = await api.get("/api/transactions")
            console.log("all Transactions fetched successfully")
            return response.data;
        } catch (error:any) {
            return rejectWithValue(error.response.data.message || "failed to fetch all the transactions")
        }
    }
)

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionBySeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionBySeller.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactionBySeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchAllTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {

      })
    }
})

export default transactionSlice.reducer;