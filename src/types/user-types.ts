export interface IAddress {
    street: string,
    city: string,
}
export interface IUser {
    id: string,
    name: string,
    username: string,
    email: string,
    address: IAddress,
}