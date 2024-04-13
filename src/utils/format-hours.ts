export const formatHours = (hour: number): string => {
    if (hour >= 10) return `${hour}:00`
    return `0${hour}:00`
}