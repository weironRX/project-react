import { ServiceService } from "@/services/service.service";
import { IService } from "@/types/service.interface";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import cl from "./ServicesItem.module.css"

interface IServicesItem {
    service: IService,
}

const ServicesItem: FC<IServicesItem> = ({ service }) => {

    const [serviceName, setSerivceName] = useState<string>(service.name)
    const [price, setPrice] = useState<string>(service.price)
    const [isChanging, setIsChanging] = useState(false)

    const { isLoading, isError, data } = useQuery(
        ["change-service", isChanging], async () => ServiceService.update({id: service.id, name: serviceName, price})
    )

    return (
        <tr className={(isChanging ? cl.item_active : cl.item)}>
            <th className={cl.row}>
                <input className={cl.input} type="text" value={serviceName} readOnly={!isChanging} onChange={(e) => setSerivceName(e.target.value)}/>
            </th>
            <th>
                <input className={cl.input} type="text" value={price} readOnly={!isChanging} onChange={(e) => setPrice(e.target.value)}/>
            </th>
            <button className={cl.button} onClick={() => setIsChanging(isChanging => !isChanging)}>{isChanging ? "Сохранить" : "Изменить"}</button>
        </tr>
    )
}

export default ServicesItem