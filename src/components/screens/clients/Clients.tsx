import { ClientService } from "@/services/client.service";
import { IClient } from "@/types/client.interface";
import { useQuery } from "@tanstack/react-query";
import { FC, Fragment, useEffect, useState } from "react";
import ClientsItem from "./ClientsItem/ClientsItem";
import cl from "./Clients.module.css"
import BackButton from "@/ui/BackButton/BackButton";

const Clients: FC = () => {

    const [aliasSearch, setAliasSearch] = useState<string>("")
    const [contactsSearch, setContactsSearch] = useState<string>("")

    const {isLoading, isError, data} = useQuery(
        ["clients", aliasSearch, contactsSearch], async () => await ClientService.getAllBySearch(aliasSearch, contactsSearch)
    )

    useEffect(() => {
        const pr = localStorage.getItem("change")

        if (!pr) return;

        const id = setInterval(() => {
            const seconds = localStorage.getItem("change")

            if (!seconds) return

            localStorage.removeItem("change")
            localStorage.setItem("change", (JSON.parse(seconds) + 1))
        }, 1000)

        return () => clearInterval(id)
    })

    return (
        <div className={cl.container}>
            <aside className={cl.aside}>
                <BackButton />
            </aside>
            <div className={cl.table}>
                <h1 className={cl.title}>Список клиентов</h1>
                <table>
                    <thead className={cl.table__head}>
                        <tr>
                            <th><input className={cl.input} placeholder="Поиск" value={aliasSearch} onChange={e => setAliasSearch(e.target.value)}/></th>
                            <th><input className={cl.input} placeholder="Поиск" value={contactsSearch} onChange={e => setContactsSearch(e.target.value)}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                        data.data.map((el: IClient) => 
                            <ClientsItem 
                                client={el}
                            />
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Clients