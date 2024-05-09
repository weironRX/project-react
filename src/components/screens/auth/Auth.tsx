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

const Auth: FC = () => {

    useAuthRedirect()

    const [type, setType] = useState<"login" | "register">("register")

    useEffect(() => {
        localStorage.removeItem("change")
    }, [])

    return (
        <div className={cl.wrapper}>
            <div className={cl.wrapper__form}>
                {type === "login" ? <Login /> : <Register />}

                <div className={cl.change__button}>
                    <button 
                        type="button"
                        onClick={() => setType(type === "login" ? "register" : "login")}>
                            {type === "login" ? "К регистрации" : "К входу"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth