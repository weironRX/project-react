import { Dispatch, SetStateAction, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";

export interface useOutsideReturn {
    isOpen: boolean,
    ref: any,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

export const useOutside = (initialOutsideValue: boolean, button: Element | null): useOutsideReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(initialOutsideValue);

    const ref = useClickAway((e) => {
        if (e?.target === button) return
        setIsOpen(false)
    });
    const handleOpenModal = () => {
        setIsOpen(prevState => !prevState);
    };

    return {isOpen, ref, setIsOpen}
}