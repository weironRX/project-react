export interface IClient {
    id: number,
    alias: string,
    contact: string
}

export interface ICreateClient {
    alias: string,
    contact: string
}