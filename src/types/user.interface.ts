type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface IFullUser {
    login: string,
    password: string,
    name: string,
}

export type IUpdateUser = Optional<IFullUser, 'password'>

export interface IRecover {
    login: string
}