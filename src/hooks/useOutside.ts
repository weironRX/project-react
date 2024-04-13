import { Dispatch, SetStateAction, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";

export interface useOutsideReturn {
    isOpen: boolean,
    ref: any,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialOutsideValue: boolean): useOutsideReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(initialOutsideValue);

    const ref = useClickAway(() => {
        setIsOpen(false);
    });

    const handleOpenModal = () => {
        if (isOpen === false) { setIsOpen(true) }
    };

    return {isOpen, ref, setIsOpen}
}