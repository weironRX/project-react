import Cookies from "js-cookie"
import axios from 'axios'
import { getContentType } from "@/api/api.helper"
import { ILogin, IAuthResponse, IRegister } from "@/store/user/user.interface"
import { saveToStorage } from "./auth.helper"
import instance from "@/api/api.interceptor"

export const AuthService = {

    async getNewTokens() {
        const refreshToken = Cookies.get('refreshToken')

        const response = await axios.post<string, {
            data: IAuthResponse
        }>(
            process.env.SERVER_URL + 'auth/login/access-token',
            { refreshToken },
            {
                headers: getContentType()
            }
        )

        if (response.data.accessToken) saveToStorage(response.data)

        return response
    },

    async login(data: ILogin) {
        const response = await instance<IAuthResponse>({
            url: `/auth/login`,
            method: "POST",
            data
        })

        if (response.data.accessToken) saveToStorage(response.data)

        return response.data
    },


    async register(data: IRegister) {

        const response = await instance<IAuthResponse>({
            url: `/auth/register`,
            method: "POST",
            data
        })

        if (response.data.accessToken) saveToStorage(response.data)

        return response.data
    }
}

