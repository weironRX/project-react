import instance from "@/api/api.interceptor"
import { EnumMethods } from "./methods.enum"
import { IFullUser, IUpdateUser } from "@/types/user.interface"

const USERS: string = 'users'

export const UserService = {
    async getProfile() {
        return instance<IFullUser>({
            url: `${USERS}/profile`,
            method: EnumMethods.GET
        })
    },

    async updateProfile(data: IUpdateUser) {
        return instance<IFullUser>({
            url: `${USERS}/profile`,
            method: EnumMethods.PUT,
            data
        }) 
    },

    async recoverPassword() {
        return instance<IFullUser>({
            url: `${USERS}/recover`,
            method: EnumMethods.GET
        })
    },
}