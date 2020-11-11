export default interface IData{
    _id:string | null
    parkingNum : number | null | string,
    place: number | null | string,
    account: number | null | string,
    FIO: string | null,
    pass: string | null,
    address: string | null,
    phone: number | null | string,
    email: string | null,
    carName: string | null,
    carNum: string | null,
    comment: string | null,
    isMember: boolean | null |string
}
export default interface IInputDAta{
    carName: string | null,
    carNum: string | null,
    comment: string | null,
    isMember: boolean | null |string
}