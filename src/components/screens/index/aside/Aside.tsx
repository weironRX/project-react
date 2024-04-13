import { FC, useMemo, useState } from "react";
import cl from "./Aside.module.css"
import { ChangesService } from "@/services/changes.service";
import { useQuery } from "@tanstack/react-query";
import { IChange } from "@/types/change.interface";

interface IAside {
    date: string,
    changeDate: any,
    remain: number
}


const Aside: FC<IAside> = ({date, changeDate, remain}) => {

    const [isChange, setIsChange] = useState<Boolean>(false);
    const [seconds, setSeconds] = useState<number>(0)

    const startChange = () => {
        setIsChange(true);

        setInterval(() => {
            setSeconds(changeSeconds => changeSeconds + 1)
        }, 1000)
    }

    const endChange = async () => {
        setIsChange(false);

        setSeconds(0)
        await ChangesService.create({date, length: String(seconds)});

        for (let i = 1; i < 100; i++) {
            window.clearInterval(i);
        }
    }

    const { isLoading, error, data } = useQuery(
        ['change-all', date], async () => ChangesService.getAll()
    );

    const monthly = useMemo(() => {
        return data?.data.reduce((summ: number, el: IChange) => summ + Number(el.length), 0)
    }, [data, isChange])



    return (
        <aside className={cl.aside}>
            <div className={cl.aside__date}>
                <input className={cl.aside__input} onChange={changeDate} type="date" />
                {date}
            </div>

            <nav className={cl.aside__nav}>
                <a className={cl.aside__link} href="clients">Список клиентов</a>
                <a className={cl.aside__link} href="services">Услуги</a>
                <a className={cl.aside__link} href="history">История</a>
            </nav>

            <div className={cl.aside__change}>
                <button 
                    style={isChange ? {pointerEvents: "none", backgroundColor: "blue"} : {}} 
                    className={cl.aside__change_button}
                    onClick={startChange}
                    >
                        Начать смену
                    </button>
                <button 
                    style={!isChange ? {pointerEvents: "none", backgroundColor: "blue"} : {}} 
                    className={cl.aside__change_button}
                    onClick={endChange}
                >
                    Завершить смену
                </button>
                <div className={cl.aside__change_body}>
                    <div>Время смены:</div>
                    {isChange && (new Date(seconds * 1000).toISOString().slice(11, 19))}
                    <div>За месяц:</div>
                    {(new Date((monthly || 0) * 1000).toISOString().slice(11, 19))}
                </div>
                <div className={cl.aside__remain}>
                    <div>Осталось:</div>
                    {(new Date(remain * 1000).toISOString().slice(11, 19))}
                </div>
            </div>
        </aside>
    )
}

export default Aside