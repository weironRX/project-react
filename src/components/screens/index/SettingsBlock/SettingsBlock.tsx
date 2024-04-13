import { ServiceService } from "@/services/service.service";
import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler, FC, useState } from "react";
import { IService } from "@/types/service.interface";
import { ClientService } from "@/services/client.service";
import { IClient } from "@/types/client.interface";
import cl from "./SettingsBlock.module.css"

interface ISettingsBlock {
    handleChange: any,
}

const SettingsBlock: FC<ISettingsBlock> = ({handleChange}) => {

    const { isLoading: isServiceLoading, isError: isServiceError, data: serviceData } = useQuery(
        ["services"], async () => ServiceService.getAll()
    )

    const { isLoading: isClientLoading, isError: isClientError, data: clientData } = useQuery(
        ["clients"], async () => ClientService.getAll()
    )

    const [alias, setAlias] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [service, setSerivce] = useState<string>("")
    const [price, setPrice] = useState<string>("")

    const handleServiceChange = (e: any) => {
        console.log(e)

        const element = serviceData?.data.find(item => item.name == e.target.value)!

        setSerivce(element?.name)
        setPrice(element?.price)
    }

    const handleClientChange = (e: any) => {
        const element = clientData?.data.find(item => item.alias == e.target.value)!

        setAlias(element?.alias)
        setContact(element?.contact)
    }

    const save = async () => {
        handleChange({
            alias: alias,
            contact: contact,
            service: service,
            price: price
        })

        if (service != "") {
            await ServiceService.create({name: service, price: price});
        }
        if (alias != "") {
            await ClientService.create({alias: alias, contact: contact});
        }
    }

    return (
        <div className={cl.container}>
            <div className={cl.container__item}>
                <p>Выбрать услугу</p>
                <select onChange={handleServiceChange}>
                    <option disabled selected>Выбрать услугу</option>
                    {serviceData && serviceData.data.map((el: IService) => 
                        <option key={el.name} value={el.name}>{el.name}</option>
                    )}
                </select>
                <div className={cl.container__inputs}>
                    <input className={cl.input} type="text" value={service} onChange={e => setSerivce(e.target.value)}/>
                    <input className={cl.input} type="text" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
            </div>
            <div className={cl.container__item}>
                <p>Выбрать клиента</p>
                <select onChange={handleClientChange}>
                    <option disabled selected>Выбрать клиента</option>
                    {clientData && clientData.data.map((el: IClient) => 
                        <option key={el.alias} value={el.alias}>{el.alias}</option>
                    )}
                </select>
                <div className={cl.container__inputs}>
                    <input className={cl.input} type="text" value={alias} onChange={e => setAlias(e.target.value)}/>
                    <input className={cl.input} type="text" value={contact} onChange={e => setContact(e.target.value)}/>
                </div>
            </div>
            <button className={cl.save_button} onClick={() => save()}>Выбрать</button>
        </div>
    )
}

export default SettingsBlock