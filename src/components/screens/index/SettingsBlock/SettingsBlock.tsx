import { ServiceService } from "@/services/service.service";
import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler, FC, useEffect, useState } from "react";
import { IService } from "@/types/service.interface";
import { ClientService } from "@/services/client.service";
import { IClient } from "@/types/client.interface";
import cl from "./SettingsBlock.module.css"

interface ISettingsBlock {
    handleChange: any,
    data_alias: string,
    data_contact: string,
    data_service: string,
    data_price: string
}

const SettingsBlock: FC<ISettingsBlock> = ({handleChange, data_alias, data_contact, data_service, data_price}) => {

    const { isLoading: isServiceLoading, isError: isServiceError, data: serviceData } = useQuery(
        ["services"], async () => ServiceService.getAll()
    )

    const { isLoading: isClientLoading, isError: isClientError, data: clientData } = useQuery(
        ["clients"], async () => ClientService.getAll()
    )

    const [alias, setAlias] = useState<string>(data_alias)
    const [contact, setContact] = useState<string>(data_contact)
    const [service, setSerivce] = useState<string>(data_service)
    const [price, setPrice] = useState<string>(data_price)


    const handleServiceChange = (e: any) => {
        const element = serviceData?.data.find(item => item.name == e.target.value)!

        setSerivce(element?.name)
        setPrice(element?.price)
    }

    const handleClientChange = (e: any) => {
        const element = clientData?.data.find(item => item.alias == e.target.value)!

        setAlias(element?.alias)
        setContact(element?.contact)
    }


    useEffect(() => {
        console.log(alias)

        handleChange({
            alias: alias,
            contact: contact,
            service: service,
            price: price
        })
    }, [alias, contact, service, price])


    return (
        <div className={cl.container}>
            <div className={cl.container__item}>
                <h3 className={cl.title}>Выбрать услугу</h3>
                <select onChange={handleServiceChange}>
                    <option disabled selected>Выбрать услугу</option>
                    {serviceData && serviceData.data.map((el: IService) => 
                        <option key={el.name} value={el.name}>{el.name}</option>
                    )}
                </select>
                <div className={cl.container__inputs}>
                    <input className={cl.input} type="text" placeholder="Услуга" value={service} onChange={e => setSerivce(e.target.value)}/>
                    <input className={cl.input} type="text" placeholder="Цена" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
            </div>
            <div className={cl.container__item}>
                <h3 className={cl.title}>Выбрать клиента</h3>
                <select onChange={handleClientChange}>
                    <option disabled selected>Выбрать клиента</option>
                    {clientData && clientData.data.map((el: IClient) => 
                        <option key={el.alias} value={el.alias}>{el.alias}</option>
                    )}
                </select>
                <div className={cl.container__inputs}>
                    <input className={cl.input} type="text" placeholder="ФИО" value={alias} onChange={e => setAlias(e.target.value)}/>
                    <input className={cl.input} type="text" placeholder="Контакты" value={contact} onChange={e => setContact(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default SettingsBlock