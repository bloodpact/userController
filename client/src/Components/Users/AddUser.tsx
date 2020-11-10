import React from 'react';
import {dataSend} from '../../utils/dbRequest';
type userData = {
    parkingNum : number | null | string,
    place: number | null | string,
    account: number | null | string,
    FIO: string | null,
    phone: string | null | number,
    email: string | null,
    carName: string | null,
    carNum: string | null,
    comment: string | null,
    isMember: boolean | null
 }
const AddUser = () => {
const [dataInput, setDataInput] =  React.useState<userData>({parkingNum:0,
    place:0,
    account:0,
    FIO:'',
    phone:0,
    email:'',
    carName:'',
    carNum:'',
    comment:'',
    isMember:false
});
const changeHandler =(e: React.ChangeEvent<HTMLInputElement>) => {
    
    setDataInput({...dataInput, [e.target.name]: e.target.value})  
 }
 const submitHandler = async()=>{
     const format = (value:any)=>{
     return value.replace(/\D/g,'')     
    }
    dataInput.phone = (format(dataInput.phone))
    dataSend(dataInput)
 }
    return (
        <div className="container">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text" onChange={changeHandler} name="parkingNum"  id="parkingNum"  className="validate"/>
                        <label htmlFor="parkingNum">Номер паркинга</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" onChange={changeHandler}  name="place" id="place"  className="validate"/>
                        <label htmlFor="place">Место</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" onChange={changeHandler}  name="account" id="account"  className="validate"/>
                        <label htmlFor="account">Лицевой счет</label>
                    </div>
                    <div className="input-field col s6">
                        <input onChange={changeHandler}  name="FIO" id="FIO" type="text" className="validate"/>
                        <label htmlFor="FIO">ФИО</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" onChange={changeHandler}  name="phone" id="phone" className="validate"/>
                        <label htmlFor="phone">Телефон</label>
                    </div>
                    <div className="input-field col s6">
                        <input onChange={changeHandler}  name="email" id="email" type="text" className="validate"/>
                        <label htmlFor="email">email</label>
                    </div>
                    <div className="input-field col s6">
                        <input name="carName" onChange={changeHandler}  id="carName" type="text" className="validate"/>
                        <label htmlFor="carName">Марка машины</label>
                    </div>
                    <div className="input-field col s6">
                        <input name="carNum" onChange={changeHandler}  id="carNum" type="text" className="validate"/>
                        <label htmlFor="carNum">Номер машины</label>
                    </div>
                    <div className="input-field col s6">
                        <input  name="comment" onChange={changeHandler}  id="comment" type="text" className="validate"/>
                        <label htmlFor="comment">Комментарий</label>
                    </div>
                    <p>
                        <label>
                            <input onChange={changeHandler}  name="isMember" type="checkbox"  />
                            <span>ЧЛЕН</span>
                        </label>
                    </p>             
                </div>
                <div className="row">
                    <button onClick={submitHandler}  className="waves-effect waves-light btn">Добавить запись</button>   
                </div>
            </form>
       </div>
    );
};

export default AddUser;