import  axios, { AxiosResponse } from 'axios'
type userData = {
    parkingNum : number | null | string,
    place: number | null | string,
    account: number | null | string,
    FIO: string | null,
    phone: number | null | string,
    email: string | null,
    carName: string | null,
    carNum: string | null,
    comment: string | null,
    isMember: boolean | null
}
function error(message: string): never {
    throw new Error(message);
  }
export const dataRequest = async()=>{
     try {
        const response:AxiosResponse<[]> = await axios.get('http://localhost:3333');
        const data = response.data;
        return data;
    }
     catch {
        error('Error getting data');
     }  
}
export const dataSend = async(dataInput:userData) => {
    try {
        await axios.post('http://localhost:3333', dataInput);
    }
    catch {
        error('Error post data');
    }
}
export const deleteData = async () => {
    try {
        await axios.delete('http://localhost:3333');
    }
    catch {
        error('Error post data');
    }
}
export const dataUpdate = async(dataInput:userData) => {
    try {
        await axios.put('http://localhost:3333', dataInput);
    }
    catch {
        error('Error post data');
    }
}
