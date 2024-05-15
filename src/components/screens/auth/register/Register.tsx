import useActions from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { IRegister } from "@/store/user/user.interface";
import Loader from "@/ui/Loader/Loader";
import Field from "@/ui/input/Field";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import cl from "./Register.module.css"
import { validEmail } from "../valid-email";
import { useQuery } from "@tanstack/react-query";

const Register: FC = () => {

    const {register} = useActions()

    const {isLoading, isError} = useAuth()

    const [data, setData] = useState<IRegister>({login: "", password: "", name: ""})

    const {refetch, status} = useQuery(
        ["login", data], async () => register({data}), {
            enabled: false,
        }
    )

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IRegister>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IRegister> = (data: IRegister): void => {
        setData(data)
    }

    useEffect(() => {
        if (data.login !== "" && data.password !== "" && data.name != "") {
            refetch();
        }
    }, [data, refetch]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
            <h1 className={cl.title}>Регистрация</h1>
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

                    <Field 
                        placeholder={"Имя"}
                        error={errors.name?.message}
                        type="text"
                        {...formRegister("name", {
                            required: "Введите имя",
                        })}
                    />

                    {isError &&
                        <div className={cl.error}>Пользователь с такой почтой уже существует</div>
                    }

                    <div className={cl.button}>
                        <button type="submit">Зарегистрироваться</button>
                    </div>
                </>}
        </form>
    )
}

export default Register