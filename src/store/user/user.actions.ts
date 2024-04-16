import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IRegister } from "./user.interface";
import { AuthService } from "@/services/auth/auth.service";
import { removeFromStorage } from "@/services/auth/auth.helper";
import { errorCatch } from "@/api/api.helper";
import { ILogin } from "./user.interface";

export const login = createAsyncThunk<IAuthResponse, {data: ILogin}>(
    "auth/login",
    async (data, thunkApi) => {
        try {
            const response = await AuthService.login(data.data)
            return response
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const register = createAsyncThunk<IAuthResponse, {data: IRegister}>(
    "auth/register",
    async ({data}, thunkApi) => {
        try {
            const response = await AuthService.register(data)
            return response
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk("auth/logout", async () => {
    removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
    "auth/check-auth",
    async (_, thunkApi) => {
        try {
            const response = await AuthService.getNewTokens()
            return response.data
        } catch (error) {
            if (errorCatch(error) === "jwt expired") {
                thunkApi.dispatch(logout())
            }

            return thunkApi.rejectWithValue(error)
        }
    }
)