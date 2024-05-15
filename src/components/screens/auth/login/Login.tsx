import useActions from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { ILogin } from "@/store/user/user.interface";
import Field from "@/ui/input/Field";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import cl from "./Login.module.css"
import Loader from "@/ui/Loader/Loader";
import { validEmail } from "../valid-email";
import { useQuery } from "@tanstack/react-query";

const Login: FC = () => {

    const {login} = useActions()

    const {isLoading} = useAuth()

    const [data, setData] = useState<ILogin>({login: "", password: ""})

    const {refetch, status} = useQuery(
        ["login", data], async () => login({data}), {
            enabled: false,
        }
    )

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<ILogin>({
        mode: "onChange"
    })

    const onSubmit = (data: ILogin): void => {
        setData(data)
    }

    useEffect(() => {
        if (data.login !== "" && data.password !== "") {
            refetch();
        }
    }, [data, refetch]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
            <h1 className={cl.title}>Вход</h1>
                {isLoading ? <Loader /> : <>

                    <Field 
                        placeholder={"Почта"}
                        error={errors.login?.message}
                        type="email"
                        {...formRegister("login", {
                            required: "Введите почту",
                            pattern: {
                                value: validEmail,
                                message: "Пожалуйста введите корректную почту"
                            }
                        })}
                    />

                    <Field 
                        placeholder={"Пароль"}
                        error={errors.password?.message}
                        type="password"
                        {...formRegister("password", {
                            required: "Введите пароль",
                        })}
                    />

                    {status == "error" &&
                        <div className={cl.error}>Неправильная почта или пароль</div>
                    }

                    <div className={cl.button}>
                        <button type="submit">Войти</button>
                    </div>
                </>}
        </form>
    )
}

export default Login