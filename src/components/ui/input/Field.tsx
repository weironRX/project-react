import { FC, forwardRef } from "react";
import classes from 'clsx'
import { IField } from "./field.interface";
import cl from "./Field.module.css"

const Field = forwardRef<HTMLInputElement, IField>(({error, placeholder, type = "text", style, ...rest }, ref) => {
    return (
        <div className={cl.wrapper}>
            <input
                className={cl.input}
                ref={ref} 
                placeholder={placeholder} 
                type={type} {...rest}
            />
            <span className={cl.error}>{error && error}</span>
        </div>
    )
}
)

Field.displayName = "Field"

export default Field