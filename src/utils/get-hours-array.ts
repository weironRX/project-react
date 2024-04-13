import { formatHours } from "./format-hours";

export const getHoursArray = () => {
    let res: string[] = []

    for (let i = 0; i < 24; i++) res.push(formatHours(i));

    return res;
}


