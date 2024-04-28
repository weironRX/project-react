import { IAuthResponse, ITokens } from '@/store/user/user.interface'
import Cookies from 'js-cookie'

export const getAccessToken = () => {
    const accessToken = Cookies.get("accessToken")
    return accessToken || null
}

export const getRefreshToken = () => {
    const refreshToken = Cookies.get("refreshToken")
    return refreshToken || null
}

export const getUserFromStorage = () => {
    return JSON.parse(localStorage.getItem('user') || '{}')
}

export const saveTokensStorage = (data: ITokens): void => {
    Cookies.set('accessToken', data.accessToken)
    Cookies.set('refreshToken', data.refreshToken)
}

export const removeFromStorage = (): void => {
    console.log("worked")
    Cookies.remove('refreshToken')
    Cookies.remove('accessToken')
    localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse): void => {
    saveTokensStorage(data)
    localStorage.setItem('user', JSON.stringify(data.user))
}