import { FC, forwardRef } from "react";
import classes from 'clsx'
import { IField } from "./field.interface";
import cl from "./Field.module.css"

const Field = forwardRef<HTMLInputElement, IField>(({placeholder, type = "text", style, ...rest }, ref) => {
    return (
        <div>
            <input
                className={cl.input}
                ref={ref} 
                placeholder={placeholder} 
                type={type} {...rest}
            />
        </div>
    )
}
)

Field.displayName = "Field"

export default Field