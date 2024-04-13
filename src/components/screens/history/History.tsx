import { SessionService } from "@/services/sessions.service";
import { ISession } from "@/types/session.interface";
import { formattedDate } from "@/utils/formatted-date";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import HistoryItem from "./HistoryItem/HistoryItem";
import BackButton from "@/ui/BackButton/BackButton";
import cl from "./History.module.css"

const History: FC = () => {

    const {isLoading, isError, data} = useQuery(
        ["history"], async () => SessionService.getCompleted(formattedDate(new Date()))
    )

    return (
        <div className={cl.container}>
            <aside>
                <BackButton />
            </aside>
            <div>
                <h1 className={cl.title}>История</h1>
                <table className={cl.table}>
                    <thead>
                        <tr>
                            <th>ФИО/Псевдоним</th>
                            <th>Контакты/соцсети</th>
                            <th>Виды услуг</th>
                            <th>Оплата</th>
                            <th>Время</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                        data.data.map((el: ISession) => 
                            <HistoryItem 
                                session={el}
                            />
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History