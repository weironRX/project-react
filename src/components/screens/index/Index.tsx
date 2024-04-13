import useActions from '@/hooks/useActions';
import { FC, useEffect, useMemo, useState } from 'react'
import cl from "./Index.module.css"
import { formattedDate } from '@/utils/formatted-date';
import { SessionService } from '@/services/sessions.service';
import { useQuery } from '@tanstack/react-query';
import { ISession } from '@/types/session.interface';
import Item from './item/Item';
import { sessionDefault } from './session-default';
import { getHoursArray } from '@/utils/get-hours-array';
import { getUserFromStorage } from '@/services/token.service';
import Aside from './aside/Aside';
import { current } from '@reduxjs/toolkit';


const Index: FC = () => {

    const [date, setDate] = useState<string>(formattedDate(new Date()))
    const [sessions, setSessions] = useState<ISession[]>()
    const [untilSeconds, setUntilSeconds] = useState<number>(0)

    const changeDate = async (e: any) => {
        setDate(e.target.value)
    }

    const { isLoading, error, data } = useQuery(
        ['one-day', date], async () => {
            const response = await SessionService.getByDay(date)
            setSessions(response.data)
            return response
        }
    );

    const hours: string[] = getHoursArray();

    const user = getUserFromStorage()

    console.log(sessions)

    useEffect(() => {
        setUntilSeconds(0)

        const hours = (new Date()).getHours()
        const minutes = (new Date()).getMinutes()

        for (let i = 0; i < (sessions?.length || 0); i++) {
            const currentHour = Number(sessions![i].hour[0] + sessions![i].hour[1])

            if (currentHour > hours) {
                setUntilSeconds((60 - minutes) * 60 + (3600 * (currentHour - hours - 1)))
            }
        }
    }, [sessions, date])

    console.log(untilSeconds)
    
    return ( 
        <div className={cl.wrapper}>
            <Aside 
                date={date}
                changeDate={changeDate}
                remain={untilSeconds}
            />
            <main>
                <table className={cl.table}>
                    <thead className={cl.table__header}>
                        <tr>
                            <th className={cl.header_table__item}>ФИО/Псевдоним</th>
                            <th className={cl.header_table__item}>Контакты</th>
                            <th className={cl.header_table__item}>Виды услуг</th>
                            <th className={cl.header_table__item}>Оплата</th>
                            <th className={cl.header_table__item}>Время</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        (hours.map((hour: string) => 
                            (sessions && sessions.find((el: ISession) => el.hour == hour) 
                            ?   <Item 
                                    key={hour}
                                    session={sessions.find((el: ISession) => el.hour == hour)!}
                                    checked_hour={hour}
                                    date={date}
                                />
                            :   (<Item 
                                    key={hour}
                                    session={sessionDefault}
                                    checked_hour={hour}
                                    date={date}
                                />)
                            )
                        ))}
                    </tbody>
                </table>
            </main>
            <div className={cl.name}>{user.name}</div>
        </div>
    );
}
 
export default Index;