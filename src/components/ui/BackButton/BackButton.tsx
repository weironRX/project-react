import { FC } from "react";
import cl from "./BackButton.module.css"

const BackButton: FC = () => {
    return (
        <>
            <a className={cl.button} href="./">
                Назад
            </a>
        </>
    )
}

export default BackButton