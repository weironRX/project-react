import { FC, useEffect, useMemo, useRef, useState } from 'react'
import cl from "./ProfileRedactor.module.css"
import { useProfile } from '@/hooks/useProfile'

interface ProfileRedactor {
    isShow: boolean,
    setIsShow: Function,
}


const ProfileRedactor: FC<ProfileRedactor> = ({isShow, setIsShow}) => {

    const handleClose = (e: any): void => {
        setIsShow(false)
    }

    const { profile } = useProfile()

    console.log(profile)

    return (
        <>
            {isShow &&
                <div 
                    onClick={handleClose}
                    className={cl.redactor__wrapper}
                >
                    <div 
                        onClick={(e: any) => {e.stopPropagation()}}
                        className={cl.redactor__body}
                    >
                        HHHHH
                    </div>
                </div>
            }
        </>
    )
}
 
export default ProfileRedactor;