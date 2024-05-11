import { FC, useEffect, useMemo, useRef, useState } from 'react'
import cl from "./ProfileRedactor.module.css"
import { useProfile } from '@/hooks/useProfile'
import Field from '@/ui/input/Field'
import { validEmail } from '@/screens/auth/valid-email'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUpdateUser } from '@/types/user.interface'
import { UserService } from '@/services/user.service'
import { isError } from '@tanstack/react-query'

interface ProfileRedactor {
    isShow: boolean,
    setIsShow: Function,
}


const ProfileRedactor: FC<ProfileRedactor> = ({isShow, setIsShow}) => {

    const [error, setError] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleClose = (e: any): void => {
        setIsShow(false)
    }

    const { profile } = useProfile()

    console.log(profile)

    const {register: formRegister, handleSubmit, formState: {errors}, setValue, reset} = useForm<IUpdateUser>({
        mode: "onChange",
    })

    useEffect(() => {
        if (!profile) return

        setValue("name", profile.name)
        setValue("login", profile.login)
    }, [profile]);

    const onSubmit: SubmitHandler<IUpdateUser> = async (data: IUpdateUser) => {
        console.log("Here")
        try {
            setError("")
            setIsLoading(true)
            await UserService.updateProfile(data)
        } catch(e: any) {
            setError(e.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleReset = (): void => {
        if (!profile) return

        setValue("name", profile.name)
        setValue("login", profile.login)
    }

    return (
        <>
            {isShow &&
                <div 
                    onClick={handleClose}
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

                        <button className={cl.save_button} type='submit'>{isLoading ? "Загрузка..." : "Сохранить"}</button>

                        <button className={cl.cancel_button}  type="button" onClick={handleReset}>Отмена</button>

                        {error ? <p className={cl.redactor__error}>{error}</p> : ""}
                    </form>
                </div>
            }
        </>
    )
}
 
export default ProfileRedactor;