import instance from "@/api/api.interceptor"
import { EnumMethods } from "./methods.enum"
import { IChange } from "@/types/change.interface"

const CHANGE: string = 'change'

export const ChangesService = {

    async getAll() {
        return await instance<IChange[]>({
            url: `${CHANGE}`,
            method: EnumMethods.GET,
        })
    },

    async create(data: IChange) {
        return await instance<IChange>({
            url: `${CHANGE}`,
            method: EnumMethods.POST,
            data
        })
    },
}