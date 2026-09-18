import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import axios from "axios";

export const sellerLogin = createAsyncThunk<any,any>(
    "/auth/sellerLogin",
    async (loginRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/sellers/login", loginRequest)
            console.log("login", response.data)
            const jwt = response.data.jwt;
            localStorage.setItem("jwt",jwt);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("Status:", error.response?.status);
                console.log("Backend response:", error.response?.data);
                console.log("Headers:", error.response?.headers);
            } else {
                console.log("Unknown error:", error);
            }
        }
    }
)