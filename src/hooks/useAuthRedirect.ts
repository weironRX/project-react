import { useEffect } from 'react'
import { useAuth } from './useAuth'
import { useRouter } from 'next/router'

export const useAuthRedirect = () => {

    const {replace} = useRouter()

    const {user} = useAuth()

    useEffect(() => {
        if (user) replace("/")
    }, [user])
}