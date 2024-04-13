import { ISession } from "@/types/session.interface"
import { FC } from "react"
import cl from "./HistoryItem.module.css"

interface IHistoryItem {
    session: ISession
}

const HistoryItem: FC<IHistoryItem> = ({session}) => {
    return (
        <tr className={cl.item}>
            <th className={cl.row}>{session.alias}</th>
            <th className={cl.row}>{session.contact}</th>
            <th className={cl.row}>{session.service}</th>
            <th className={cl.row}>{session.price}</th>
            <th className={cl.row}>{session.hour}</th>
        </tr>
    )
}

export default HistoryItem