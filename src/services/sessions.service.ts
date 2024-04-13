import instance from "@/api/api.interceptor"
import { EnumMethods } from "./methods.enum"
import { ISession } from "@/types/session.interface"

const SESSION: string = 'session'

export const SessionService = {
    async getByDay(date: string) {
        return await instance<ISession[]>({
            url: `${SESSION}/${date}`,
            method: EnumMethods.GET
        })
    },

    async getCompleted(date: string) {
        return instance<ISession[]>({
            url: `${SESSION}/completed/${date}`,
            method: EnumMethods.GET
        })
    },

    async create(date: string, data: ISession) {
        return instance<ISession>({
            url: `${SESSION}/${date}`,
            method: EnumMethods.POST,
            data
        })
    },
}