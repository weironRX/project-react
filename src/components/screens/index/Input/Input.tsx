import { formatHours } from "@/utils/format-hours";
import { ChangeEventHandler, FC } from "react";


interface IInput {
    isChanging: boolean,
    setValue: ChangeEventHandler<HTMLInputElement>,
    value: string | number,
    field: string
}

const Input: FC<IInput> = ({isChanging, setValue, value, field}) => {

    return (
        <input 
            id={field}
            value={value} 
            readOnly={!isChanging} 
            onChange={setValue}
        />
    )
}

export default Input