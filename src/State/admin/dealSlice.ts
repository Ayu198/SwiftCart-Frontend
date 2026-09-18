import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import type { DealsState } from "../../types/dealTypes";

// Define the initial state
const initialState: DealsState = {
    deals: [],
    loading: false,
    error: null,
    dealCreated: false,
    dealUpdated: false,
};

export const createDeal = createAsyncThunk(
    "deals/createDeal",
    async (deal: any, { rejectWithValue }) => {
        try {
            const response = await api.post("/admin/deals", deal, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });

            console.log("created deal", response.data);
            return response.data
        } catch (error : any) {
            console.log("error --- " , error.response);
            return rejectWithValue(
                error.response.data.message || "Failed to Create Deal"
            )
        }
    }
)
export const getAllDeals = createAsyncThunk(
    "deals/getAllDeals",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/admin/deals", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            });

            console.log("get all deal", response.data);
            return response.data;
        } catch (error: any) {
            console.log("error ", error.response);
            return rejectWithValue(
                error.response?.data?.message || "Failed to create deal"
            );
        }
    }
);

const dealSlice = createSlice({
    name: "deals",
    initialState,

    reducers: {
        resetDealState: (state) => {
            state.loading = false;
            state.error = null;
            state.dealCreated = false;
            state.dealUpdated = false;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(createDeal.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.dealCreated = false;
            })

            .addCase(createDeal.fulfilled, (state, action) => {
                state.loading = false;
                state.dealCreated = true;

                state.deals.push(action.payload);
            })

            .addCase(createDeal.rejected, (state, action) => {
                state.loading = false;
                state.dealCreated = false;
                state.error = action.payload as string;
            })
            .addCase(getAllDeals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getAllDeals.fulfilled, (state, action) => {
                state.loading = false;

                state.deals = action.payload;
            })

            .addCase(getAllDeals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetDealState } = dealSlice.actions;

export default dealSlice.reducer;