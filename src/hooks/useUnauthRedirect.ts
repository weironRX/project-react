import { useEffect } from 'react'
import { useAuth } from './useAuth'
import { useRouter } from 'next/router'

export const useUnauthRedirect = () => {

    const {replace} = useRouter()

    const {user} = useAuth()

    useEffect(() => {
        if (!user) replace("/auth")
    }, [user])
}