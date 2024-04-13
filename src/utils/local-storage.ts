export const getStorageLocal = (name: string) => {
    if (typeof localStorage === "undefined") return null

    const gettingItem = localStorage.getItem(name)
    return gettingItem ? JSON.parse(gettingItem) : null
}