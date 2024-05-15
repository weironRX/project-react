import { UserService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import cl from "./Recover.module.css"
import Field from "@/ui/input/Field";


const Recover: FC = () => {

    const [login, setLogin] = useState<string>("")

    const {isError, refetch, status, isFetching, data} = useQuery(
        ["recover"], async () => await UserService.recoverPassword({login}), {
            enabled: false,
            refetchOnWindowFocus: false,
        }
    )
    
    const handleSubmit = () => {
        refetch()
    }

    console.log(data)

    return (
        <div className={cl.wrapper}>
            <h1 className={cl.title}>Восстановление</h1>
            <Field 
                readOnly={isFetching} 
                placeholder="Введите почту" 
                type="email" value={login} 
                onChange={e => setLogin(e.target.value)}
            />

           <button 
                className={cl.send_button}
                type="submit"
                onClick={handleSubmit}
            >
                {isFetching ? "Загрузка..." : "Восстановить"}
            </button>
            {isError && <p className={cl.error}>Пользователь не найден</p>}
            {(status == "success") && <p className={cl.success}>Пароль отправлен на почту</p>}
        </div>
    )
}

export default Recover