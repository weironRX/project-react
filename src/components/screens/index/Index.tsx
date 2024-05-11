import { FC, useEffect, useMemo, useRef, useState } from 'react'
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
import { useOutside } from '@/hooks/useOutside';
import ProfileRedactor from './profile-redactor/ProfileRedactor';
import { useProfile } from '@/hooks/useProfile';


const Index: FC = () => {


    const [date, setDate] = useState<string>(formattedDate(new Date()))
    const [sessions, setSessions] = useState<ISession[]>()
    const [untilSeconds, setUntilSeconds] = useState<number>(0)
    const [isRedactProfile, setIsRedactProfile] = useState(false);

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

    const {profile} = useProfile()

    useEffect(() => {
        const updateSeconds = () => {
            setUntilSeconds(0)

            const minutes = (new Date()).getMinutes()

            setUntilSeconds(prevSeconds => 3600 - minutes * 60)
        }

        const secondsInterval = window.setInterval(() => {
            updateSeconds()
        }, 1000)

        return () => clearInterval(secondsInterval)
        
    }, [date, sessions])

    const button = useRef(null)

    const {isOpen, ref, setIsOpen} = useOutside(false, button.current)

    return ( 
        <div className={cl.wrapper}>
            <Aside 
                date={date}
                changeDate={changeDate}
                remain={untilSeconds}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                refAside={ref}
            />
            <main className={cl.main}>
                <table className={cl.table}>
                    <thead className={cl.table__header}>
                        <tr>
                            <th className={cl.header_table__item}>ФИО/Псевдоним</th>
                            <th className={cl.header_table__item}>Контакты</th>
                            <th className={cl.header_table__item}>Виды услуг</th>
                            <th className={cl.header_table__item}>Оплата</th>
                            <th className={cl.header_table__item}>Время</th>
                            <th className={cl.show_button}>
                                <button ref={button} className={(!isOpen ? cl.menu_button : [cl.menu_button, cl.menu_button_active].join(" "))} onClick={() => setIsOpen(isOpen => !isOpen)}>
                                    <div></div>
                                </button>
                            </th>
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
            <div 
                className={cl.name}
                onClick={() => setIsRedactProfile(isRedactProfile => !isRedactProfile)}
            >
                {profile?.name}
            </div>
            <ProfileRedactor 
                isShow={isRedactProfile}
                setIsShow={setIsRedactProfile}
            />
        </div>
    );
}
 
export default Index;