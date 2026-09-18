import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { HomeCategory, HomeData } from "../../types/HomeCategoryTypes";

export const createHomeCategories = createAsyncThunk<HomeData,HomeCategory[]>(
    "home/createHomeCategories" , async(homeCategories , {rejectWithValue}) => {
        try {
            const response = await api.post(`/home/categories`,homeCategories)
            console.log("Home Category Created" , response.data);
            return response.data;
        } catch(error:any) {
            console.log("error ------")
            return rejectWithValue(
                error.response?.data?.message || "failed to create home category"
            )
        }
    }
)

interface HomeState {
    homePageData:HomeData | null;
    homeCategories:HomeCategory[];
    loading : boolean;
    error : string | null;
}

const initialState : HomeState = {
    homePageData:null,
    homeCategories : [],
    loading : false,
    error: null,
}

const homeSlice = createSlice({
    name : 'home',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(createHomeCategories.pending , (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(createHomeCategories.fulfilled , (state,action) => {
            state.loading = false;
            state.homePageData = action.payload;
        }).addCase(createHomeCategories.rejected , (state,action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to create Home Categories";
        })
    }
})

export default homeSlice.reducer;