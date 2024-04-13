import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./user.interface";
import { auth, checkAuth, logout } from "./user.actions";
import { getStorageLocal } from "@/utils/local-storage";

const initialState: IInitialState = {
    user: getStorageLocal("user"),
    isLoading: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(auth.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(auth.fulfilled, (state, { payload: data}) => {
            state.isLoading = false
            state.user = data.user
        })
        builder.addCase(auth.rejected, (state) => {
            state.isLoading = false
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