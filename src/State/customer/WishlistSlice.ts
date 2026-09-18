import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Wishlist, WishlistState } from "../../types/WishlistTypes";
import { api } from "../../config/Api";

const initialState : WishlistState = {
    wishlist:null,
    loading:false,
    error:null,
}

export const getWishlistByUserId = createAsyncThunk(
    "wishlist/getWishlistByUserId" , 
    async(_, {rejectWithValue}) => {
        try {
            const response = await api.get(`api/wishlist` , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            console.log("Wishlist Fetched By User Id ------" , response.data)
            return response.data;
        } catch (error:any) {
            return rejectWithValue(
                error.reponse?.data.message || "failed to fetch wishlist by user id"
            )
        }
    }
)

export const addProductToWishlist = createAsyncThunk(
    "wishlist/addProductToWishlist" , 
    async({productId} : {productId : number} , {rejectWithValue}) => {
        try {
            const response = await api.put(`/api/wishlist/add-product/${productId}`, null , {
                headers:{
                    Authorization : `Bearer ${localStorage.getItem("jwt")}`,
                },
            });
            console.log("product added to successfully" , response.data);
            return response.data;
        } catch (error : any) {
            return rejectWithValue (
                error.response?.data.message || "failed to add item to your wishlist"
            )
        }
    }
)

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState,
    reducers : {
        resetWishlistState : (state : any) => {
            state.wishlist = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getWishlistByUserId.pending , (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getWishlistByUserId.fulfilled , (state,action : PayloadAction<Wishlist>) => {
            state.wishlist = action.payload;
            state.loading = false;
        }).addCase(getWishlistByUserId.rejected , (state,action : PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(addProductToWishlist.pending , (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(addProductToWishlist.fulfilled,(state,action : PayloadAction<Wishlist>) => {
            state.loading = false;
            state.wishlist = action.payload;
        }).addCase(addProductToWishlist.rejected , (state,action : PayloadAction<any>) => {
            state.loading =false;
            state.error = action.payload;
        })
    }
})

export const {resetWishlistState} = wishlistSlice.actions

export default wishlistSlice.reducer;