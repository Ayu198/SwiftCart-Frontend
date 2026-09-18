import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { Product } from "../../types/ProductTypes";

export const fetchProductById = createAsyncThunk("products/fetchProductById" , 
    async(productId:number,{rejectWithValue}) => {
        try {
            const response = await api.get(`/products/${productId}`)
            console.log("response ------",response.data)
            return response.data;
        } catch(error:any) {
            console.log("error ------ ",error)
            return rejectWithValue(error.message)
        }
    }
)

export const searchProduct = createAsyncThunk("products/searchProduct" , 
    async(query,{rejectWithValue}) => {
        try {
            const response = await api.get(`/products/search` , {
                params : {
                    query,
                },
            })
            console.log("response ------",response.data)
            return response.data;
        } catch(error:any) {
            console.log("error ------ ",error)
            return rejectWithValue(error.message)
        }
    }
)

export const fetchAllProduct = createAsyncThunk<any,any>("products/fetchAllProduct" , 
    async(params,{rejectWithValue}) => {
        try {
            const response = await api.get(`/products`,{
                params:{
                    ...params,
                    pageNumber:params.pageNumber || 0,
                }
            })
            console.log("All response ------",response.data)
            return response.data;
        } catch(error:any) {
            console.log("All error ------ ",error)
            return rejectWithValue(error.message)
        }
    }
)

interface ProductState {
    product : Product|null;
    products : Product[];
    totalPages:number;
    loading:boolean;
    error:string | null | undefined | any;
    searchProduct : Product[];
}

const initialState:ProductState = {
    product :null,
    products : [],
    totalPages:0,
    loading:false,
    error:null,
    searchProduct:[]
}

const ProductSlice = createSlice(
    {
        name:"products",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(fetchProductById.pending,(state)=> {
                state.loading = true;
            }).addCase(fetchProductById.fulfilled , (state,action) => {
                state.loading = false;
                state.product = action.payload;
            }).addCase(fetchProductById.rejected , (state,action)=> {
                state.loading = false;
                state.error = action.error.message;
            }),
            builder.addCase(fetchAllProduct.pending,(state)=> {
                state.loading = true;
            }).addCase(fetchAllProduct.fulfilled , (state,action) => {
                state.loading = false;
                state.products = action.payload.content;
            }).addCase(fetchAllProduct.rejected , (state,action)=> {
                state.loading = false;
                state.error = action.error.message;
            }),
            builder.addCase(searchProduct.pending,(state)=> {
                state.loading = true;
            }).addCase(searchProduct.fulfilled , (state,action) => {
                state.loading = false;
                state.searchProduct = action.payload;
            }).addCase(searchProduct.rejected , (state,action)=> {
                state.loading = false;
                state.error = action.error.message;
            })
        }
    }
)

export default ProductSlice.reducer;