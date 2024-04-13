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
}

export interface IEmailPassword {
    login: string,
    password: string
}

export interface IAuthResponse extends ITokens {
    user: IFullUser
}