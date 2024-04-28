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

    const {isLoading, isError, data, refetch} = useQuery(
        ["clients", aliasSearch, contactsSearch], async () => await ClientService.getAllBySearch(aliasSearch, contactsSearch)
    )

    console.log(data)

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

    const createNew = async () => {
        await ClientService.create({alias: "", contact: ""});
        await refetch()
    }

    return (
        <div>
            <div className={cl.container}>
                <aside className={cl.aside}>
                    <BackButton />
                </aside>
                <div className={cl.table}>
                    <h1 className={cl.title}>Список клиентов</h1>
                    <table>
                        <thead className={cl.table__head}>
                            <tr>
                                <th><input className={cl.input} placeholder="По псевдониму" value={aliasSearch} onChange={e => setAliasSearch(e.target.value)}/></th>
                                <th><input className={cl.input} placeholder="По контактам" value={contactsSearch} onChange={e => setContactsSearch(e.target.value)}/></th>
                            </tr>
                        </thead>
                        <div className={cl.mobile_head}>
                            <input className={cl.input} placeholder="По псевдониму" value={aliasSearch} onChange={e => setAliasSearch(e.target.value)}/>
                            <input className={cl.input} placeholder="По контактам" value={contactsSearch} onChange={e => setContactsSearch(e.target.value)}/>
                        </div>
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
            <button className={cl.create_new} onClick={createNew}>Создать новую</button>
        </div>
    )
}

export default Clients