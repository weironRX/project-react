import useActions from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { ILogin } from "@/store/user/user.interface";
import Field from "@/ui/input/Field";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import cl from "./Login.module.css"
import Loader from "@/ui/Loader/Loader";

const Login: FC = () => {

    const {login} = useActions()

    const {isLoading} = useAuth()

    const [unauthorizedError, setUnauthorizedError] = useState<boolean>(false)

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<ILogin>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<ILogin> = (data: ILogin): void => {
        setUnauthorizedError(false)

        login({data});
        reset();

        setUnauthorizedError(true)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
            <h1 className={cl.title}>Auth</h1>
                {isLoading ? <Loader /> : <>

                    <Field 
                        placeholder={"Логин"}
                        error={errors.login?.message}
                        type="text"
                        {...formRegister("login", {
                            required: "Login is required",
                        })}
                    />

                    <Field 
                        placeholder={"Пароль"}
                        error={errors.password?.message}
                        type="password"
                        {...formRegister("password", {
                            required: "Password is required",
                        })}
                    />

                    {unauthorizedError &&
                        <div className={cl.error}>Что то пошло не так...</div>
                    }

                    <div className={cl.button}>
                        <button type="submit">Войти</button>
                    </div>
                </>}
        </form>
    )
}

export default Login