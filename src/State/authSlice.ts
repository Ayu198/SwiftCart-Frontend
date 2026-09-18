import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import axios from "axios";
import type { User } from "../types/UserTypes";

export const sendLoginSignupOtp = createAsyncThunk(
    "/auth/sendLoginSignupOtp",
    async ({ email }: { email: string }, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/sent/login-signup-otp", { email,})
            console.log("login", response)
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

export const signin = createAsyncThunk<any,any>(
    "/auth/signin",
    async (loginRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signing", loginRequest)
            localStorage.setItem("jwt",response.data.jwt)
            console.log("login", response.data)
            return response.data.jwt;
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

export const fetchUserProfile = createAsyncThunk<any,any>(
    "/auth/fetchUserProfile",
    async ({jwt}, { rejectWithValue }) => {
        try {
            const response = await api.get("/users/profile", {
                headers :{
                    Authorization:`Bearer ${jwt}`,
                },
            })
            console.log("user Profiles", response.data)
            return response.data;
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

export const signup = createAsyncThunk<any,any>(
    "/auth/signup",
    async (SignupRequest, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signup", SignupRequest)
            localStorage.setItem("jwt",response.data.jwt)
            return response.data.jwt;
            console.log("login", response.data)
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

export const logout = createAsyncThunk<any,any>("/auth/logout",
    async(navigate,{rejectWithValue}) => {
        try {
            localStorage.clear();
            console.log("logout Success")
            navigate("/")
        } catch(error){
            console.log("error ------",error)
        }
    }
)

interface AuthState {
    jwt: string | null,
    otpSent: boolean,
    isLoggedIn : boolean , 
    user: User | null,
    loading:boolean
}

const initialState : AuthState = {
    jwt:null,
    otpSent:false,
    isLoggedIn:false,
    user:null,
    loading:false
}

const authSlice = createSlice(
    {
        name:"Auth",
        initialState,
        reducers: {},
        extraReducers:(builder)=>{
            builder.addCase(sendLoginSignupOtp.pending,(state) => {
                state.loading = true;
            })
            .addCase(sendLoginSignupOtp.fulfilled,(state)=>{
                state.loading= false;
                state.otpSent = true;
            }).addCase(sendLoginSignupOtp.rejected,(state)=>{
                state.loading = false;
            }),
            builder.addCase(signin.fulfilled,(state,action) => {
                state.jwt = action.payload;
                state.isLoggedIn = true;
            }),
            builder.addCase(signup.fulfilled,(state,action) => {
                state.jwt = action.payload;
                state.isLoggedIn = true;
            }),
            builder.addCase(fetchUserProfile.fulfilled,(state,action)=>{
                state.user = action.payload;
                state.isLoggedIn = true;
            }),
            builder.addCase(logout.fulfilled,(state)=>{
                state.jwt = null;
                state.isLoggedIn=false;
                state.user=null;
            })
        }
    }
)
export default authSlice.reducer;