import { FC, useEffect, useMemo, useRef, useState } from 'react'
import cl from "./ProfileRedactor.module.css"
import { useProfile } from '@/hooks/useProfile'
import Field from '@/ui/input/Field'
import { validEmail } from '@/screens/auth/valid-email'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUpdateUser } from '@/types/user.interface'
import { UserService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

interface ProfileRedactor {
    isShow: boolean,
    setIsShow: Function,
}


const ProfileRedactor: FC<ProfileRedactor> = ({isShow, setIsShow}) => {

    const [data, setData] = useState<IUpdateUser>({login: "", name: ""})

    const {refetch, isFetching, status, error} = useQuery(
        ["login", data], async () => UserService.updateProfile(data), {
            enabled: false,
        }
    )

    const { profile, refetch: refetchUser } = useProfile()

    const {register: formRegister, handleSubmit, formState: {errors}, setValue} = useForm<IUpdateUser>({
        mode: "onChange",
    })

    console.log(profile)

    const onSubmit: SubmitHandler<IUpdateUser> = async (data: IUpdateUser) => {
        setData(data)
        refetchUser()
    }

    useEffect(() => {
        if (data.login !== "" && data.name !== "") {
            refetch();
        }
    }, [data, refetch]);

    const handleReset = (): void => {
        if (!profile) return

        setData(prevData => ({...prevData, name: profile.name, login: profile.login}))
        setValue("name", profile.name)
        setValue("login", profile.login)
        setValue("password", "")
    }

    useEffect(() => {
        console.log("Here")
        handleReset()
    }, [profile])

    return (
        <>
            {isShow &&
                <div 
                    onClick={() => setIsShow(false)}
                    className={cl.redactor__wrapper}
                >
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        onClick={(e: any) => {e.stopPropagation()}}
                        className={cl.redactor__body}
                    >
                        <h1 className={cl.redactor__title}>Ваш профиль</h1>

                        <label htmlFor="login">Почта</label>
                        <Field
                            className={cl.redactor__input}
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

                        <label htmlFor="login">Имя</label>
                        <Field
                            className={cl.redactor__input}
                            placeholder={"Имя"}
                            error={errors.name?.message}
                            type="text"
                            {...formRegister("name", {
                                required: "Введите имя",
                            })}
                        />

                        <p className={cl.password__assertion}>Если вы хотите сменить пароль введите его в поле ниже</p>

                        <Field
                            className={cl.redactor__input}
                            placeholder={"Новый пароль"}
                            error={errors.password?.message}
                            type="password"
                            {...formRegister("password", {})}
                        />

                        <button className={cl.save_button} type='submit'>{isFetching ? "Загрузка..." : "Сохранить"}</button>

                        <button className={cl.cancel_button}  type="button" onClick={handleReset}>Отмена</button>

                        {status == "error" ? <p className={cl.redactor__error}>Пользователь с такой почтой уже существует</p> : ""}
                    </form>
                </div>
            }
        </>
    )
}
 
export default ProfileRedactor;