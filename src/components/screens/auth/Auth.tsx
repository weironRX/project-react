import useActions from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import Field from "@/ui/input/Field";
import Loader from "@/ui/Loader/Loader";
import cl from "./Auth.module.css"
import Login from "./login/Login";
import Register from "./register/Register";
import Recover from "./recover/Recover";

const Auth: FC = () => {

    useAuthRedirect()

    const [type, setType] = useState<"login" | "register" | "recover">("register")

    useEffect(() => {
        localStorage.removeItem("change")
    }, [])

    const authObject = {
        register: <Register />,
        login: <Login />,
        recover: <Recover />
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.wrapper__form}>
                {authObject[type]}

                {type != "recover" &&
                    <div className={cl.change__button}>
                        <button 
                            type="button"
                            onClick={() => setType(type === "login" ? "register" : "login")}>
                                {type === "login" ? "К регистрации" : "К входу"}
                        </button>
                    </div>
                }

                <div 
                    className={cl.recover__link}
                    onClick={() => setType(type === "recover" ? "login" : "recover")}
                >
                    {type !== "recover" ? "Забыли пароль?" : "Вернуться"}
                </div>
            </div>
        </div>
    )
}

export default Auth