import { FC, useEffect } from "react";
import cl from "./Services.module.css";
import { ServiceService } from "@/services/service.service";
import { useQuery } from "@tanstack/react-query";
import { IService } from "@/types/service.interface";
import ServicesItem from "./ServicesItem/ServicesItem";
import BackButton from "@/ui/BackButton/BackButton";


const Services: FC = () => {

    const { isLoading, error, data } = useQuery(
        ['services'], async () => {
            const response = await ServiceService.getAll()
            return response
        }
    );

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
            <aside>
                <BackButton />
            </aside>
            <div className={cl.table}>
                <h1 className={cl.title}>Услуги</h1>
                <table>
                    <thead>
                        <tr>
                            <th className={cl.subtitle}>Вид Услуги</th>
                            <th className={cl.subtitle}>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && 
                        data.data.map((el: IService) =>
                            <ServicesItem 
                                service = {el}
                            />
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Services