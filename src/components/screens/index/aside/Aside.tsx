import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
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
    const [intervalId, setIntervalId] = useState<any>()
    const [montly, setMonthly] = useState<number>(0)

    const startChange = (seconds: number) => {
        setIsChange(true);

        localStorage.setItem("change", String(seconds))

        setSeconds(seconds)

        const id = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);

            const pr = localStorage.getItem("change") || String(seconds)

            console.log("In cycle", pr)

            if (!pr) {
                localStorage.setItem("change", "1")
            } else {
                localStorage.removeItem("change")
                localStorage.setItem("change", JSON.stringify(JSON.parse(pr) + 1))
            }
        }, 1000);

        setIntervalId(id)
    }

    const create = async (seconds: number) => {
        await ChangesService.create({date, length: String(seconds)});
    }

    const endChange = async () => {
        setMonthly(montly => montly + seconds)

        setIsChange(false);

        setSeconds(0)
        create(seconds)

        localStorage.removeItem("change")

        clearInterval(intervalId)
    }


    const { isLoading, error, data } = useQuery(
        ['change-all', date, isChange, seconds], async () => ChangesService.getAll()
    );

    useEffect(() => {
        const monthSeconds = data?.data.reduce((summ: number, el: IChange) => summ + Number(el.length), 0) || 0

        setMonthly(monthSeconds)
    }, [data, isChange])

    useEffect(() => {
        const pr = localStorage.getItem("change")
        console.log("In beggining", pr)
        if (pr) {
            startChange(JSON.parse(pr))
            localStorage.removeItem("change")
        }
    }, [])

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
                    onClick={() => startChange(0)}
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
                    {(new Date((montly || 0) * 1000).toISOString().slice(11, 19))}
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