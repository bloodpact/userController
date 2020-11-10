export default interface IData{
    _id:string | null
    parkingNum : number | null | string,
    place: number | null | string,
    account: number | null | string,
    FIO: string | null,
    phone: number | null | string,
    email: string | null,
    carName: string | null,
    carNum: string | null,
    comment: string | null,
    isMember: boolean | null |string
}
export default interface IInputDAta{
    parkingNum : number | null | string,
    place: number | null | string,
    account: number | null | string,
    FIO: string | null,
    phone: string | null | number,
    email: string | null,
    carName: string | null,
    carNum: string | null,
    comment: string | null,
    isMember: boolean | null |string
}