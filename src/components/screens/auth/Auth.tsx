import useActions from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { IEmailPassword } from "@/store/user/user.interface";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import Field from "@/ui/input/Field";
import Loader from "@/ui/Loader/Loader";
import cl from "./Auth.module.css"

const Auth: FC = () => {

    useAuthRedirect()

    const {isLoading} = useAuth()

    const {auth} = useActions()

    const [type, setType] = useState<"login" | "register">("login")

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IEmailPassword> = (data: IEmailPassword): void => {
        console.log(data)
        auth({data, type});
        reset();
    }

    return (
        <div title="Auth" className={cl.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={cl.section}>

                <h1 className={cl.title}>Авторизация</h1>
                {isLoading ? <Loader /> : <>

                    <Field 
                        placeholder={"Логин"}
                        type="text"
                        {...formRegister("login", {
                            required: "Email is required",
                        })}
                    />

                    <Field 
                        placeholder={"Пароль"}
                        type="password"
                        {...formRegister("password", {
                            required: "Password is required",
                            minLength: {
                                value: 3,
                                message: "Password min length is 3 symbols"
                            }
                        })}
                    />

                    <button type="submit" className={cl.button}>
                        Войти
                    </button>
                </>}
            </form>
        </div>
    )
}

export default Auth