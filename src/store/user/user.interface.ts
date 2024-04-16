import { IFullUser } from "@/types/user.interface"

export interface IUserState {
    login: string
}

export interface ITokens {
    accessToken: string,
    refreshToken: string
}

export interface IInitialState {
    user: IUserState | null,
    isLoading: boolean
    isError: boolean
}

export interface ILogin {
    login: string,
    password: string,
}

export interface IRegister extends ILogin {
    name: string
}

export interface IAuthResponse extends ITokens {
    user: IFullUser
}