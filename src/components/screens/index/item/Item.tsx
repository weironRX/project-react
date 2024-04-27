import { useOutside } from "@/hooks/useOutside";
import { ISession } from "@/types/session.interface";
import { ChangeEventHandler, FC, Fragment, useEffect, useState } from "react";
import cl from "./Item.module.css"
import { formatHours } from "@/utils/format-hours";
import Input from "./../Input/Input"
import { useQuery } from "@tanstack/react-query";
import { SessionService } from "@/services/sessions.service";
import SettingsBlock from "../SettingsBlock/SettingsBlock";

interface IItem {
    session: ISession,
    date: string,
    checked_hour: string
}


const Item: FC<IItem> = ({session, date, checked_hour}) => {

    const [sessionData, setSessionData] = useState<ISession>(session);
    const [isChanging, setIsChanging] = useState<boolean>(false);

    useEffect(() => {
        setSessionData(session);

        if (sessionData.hour == "") {
            setSessionData(sessionData => ({
                ...sessionData,
                hour: checked_hour
            }))
        }
    }, [session])

    const handleChange: any = ({ alias, contact, service, price}: any) => {

        setSessionData({
          ...sessionData,
          alias: alias,
          contact: contact,
          service: service,
          price: price
        })
    }

    const { isLoading, error, data } = useQuery(
        ['session', isChanging], async () => {
            if (sessionData.alias != "") {
                return await SessionService.create(date, sessionData)
            } else {
                return {}
            }
        }
    );

    return (
        <Fragment>
            <tr className={cl[isChanging ? "item__changing" : "item"]}>
                <th className={cl.column}>
                    {sessionData.alias}
                </th>
                <th>
                    {sessionData.contact}
                </th>
                <th>
                    {sessionData.service}
                </th>
                <th>
                    {sessionData.price}
                </th>
                <th className={cl.hour}>
                    {checked_hour}
                </th>
                <th>
                    <button className={cl.change_button} onClick={() => setIsChanging(!isChanging)}>{!isChanging ? "Изменить" : "Сохранить"}</button>
                </th>
            </tr>
            <tr>
                {isChanging && 
                <SettingsBlock
                    handleChange={handleChange}
                />
                }
            </tr>
        </Fragment>
        
    )
}

export default Item;