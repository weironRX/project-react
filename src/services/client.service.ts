import instance from "@/api/api.interceptor"
import { EnumMethods } from "./methods.enum"
import { IService } from "@/types/service.interface"
import { IClient } from "@/types/client.interface"

const CLIENT: string = 'client'

export const ClientService = {


    async getAll() {
        return await instance<IClient[]>({
            url: `${CLIENT}`,
            method: EnumMethods.GET
        })
    },

    async getAllBySearch(alias: string, contact: string) {
        return await instance<IClient[]>({
            url: `${CLIENT}/search`,
            method: EnumMethods.GET,
            params: {
                alias: String(alias),
                contact: contact
            }
        })
    },

    async getByName(alias: string) {
        return instance<IClient>({
            url: `${CLIENT}/${alias}`,
            method: EnumMethods.GET
        })
    },

    async create(data: IClient) {
        return instance<IClient>({
            url: `${CLIENT}`,
            method: EnumMethods.POST,
            data
        })
    },

    async update(data: IClient) {
        return instance<IClient>({
            url: `${CLIENT}`,
            method: EnumMethods.PUT,
            data
        })
    },
}