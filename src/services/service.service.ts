import instance from "@/api/api.interceptor"
import { EnumMethods } from "./methods.enum"
import { ICreateService, IService } from "@/types/service.interface"

const SERVICE: string = 'service'

export const ServiceService = {
    async getAll() {
        return await instance<IService[]>({
            url: `${SERVICE}`,
            method: EnumMethods.GET
        })
    },

    async getByName(name: string) {
        return instance<IService>({
            url: `${SERVICE}/${name}`,
            method: EnumMethods.GET
        })
    },

    async create(data: ICreateService) {
        return instance<IService>({
            url: `${SERVICE}`,
            method: EnumMethods.POST,
            data
        })
    },

    async update(data: IService) {
        return instance<IService>({
            url: `${SERVICE}`,
            method: EnumMethods.PUT,
            data
        })
    },
}