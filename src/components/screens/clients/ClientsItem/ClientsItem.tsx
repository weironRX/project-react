import { ClientService } from "@/services/client.service";
import { IClient } from "@/types/client.interface";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import cl from "./ClientsItem.module.css"

interface IClientsItem {
    client: IClient
}

const ClientsItem: FC<IClientsItem> = ({client}) => {

    const [alias, setAlias] = useState<string>(client.alias)
    const [contact, setContact] = useState<string>(client.contact)
    const [isChanging, setIsChanging] = useState(false)

    const { isLoading, isError, data } = useQuery(
        ["change-client", isChanging], async () => ClientService.update({alias, contact})
    )

    return (
        <tr className={(isChanging ? cl.item_active : cl.item)}>
            <th className={cl.row}>
                <input className={cl.input} type="text" value={alias} readOnly={!isChanging} onChange={(e) => setAlias(e.target.value)}/>
            </th>
            <th>
                <input className={cl.input} type="text" value={contact} readOnly={!isChanging} onChange={(e) => setContact(e.target.value)}/>
            </th>
            <button className={cl.button} onClick={() => setIsChanging(isChanging => !isChanging)}>{isChanging ? "Сохранить" : "Изменить"}</button>
        </tr>
    )
}

export default ClientsItem