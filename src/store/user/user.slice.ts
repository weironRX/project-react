import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./user.interface";
import { login, checkAuth, logout, register } from "./user.actions";
import { getStorageLocal } from "@/utils/local-storage";

const initialState: IInitialState = {
    user: getStorageLocal("user"),
    isLoading: false,
    isError: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, { payload: data}) => {
            state.isLoading = false
            state.user = data.user
        })
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.user = null
        })

        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(register.fulfilled, (state, { payload: data}) => {
            state.isLoading = false
            state.user = data.user
        })
        builder.addCase(register.rejected, (state) => {
            state.isLoading = false
            state.isError = true
            state.user = null
        })


        builder.addCase(logout.fulfilled, state => {
            state.isLoading = false
            state.user = null
        })

        builder.addCase(checkAuth.fulfilled, (state, { payload } ) => {
            state.user = payload.user
        })
    }
})