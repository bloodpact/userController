import React from 'react';
import {Document} from 'docx'
import IData from '../../interfaces'
type DetailType = {
    detail:IData
}
const User:React.FunctionComponent<DetailType> = ({detail}) => {
    React.useEffect(()=>{        
        M.AutoInit();
    })
    return (
        <div>         
            <div id="userModal" className="modal">
                <div className="modal-content">
                    <h5>{detail.FIO}</h5>
                    <p>Паспортные данные: {detail.pass}</p>
                    <p>Адрес: {detail.address}</p>
                    <p>Лицевой счет: {detail.account}</p>
                    <p>Телефон: {detail.phone}</p>
                    <p>Email: {detail.email}</p>
                    <p>Марка машины: {detail.carName}</p>
                    <p>Номер машины: {detail.carNum}</p>
                    <p>Примечание: {detail.comment}</p>   
                    <div>Член: {detail.isMember !== "false" &&
                        <i className="small material-icons">check</i>}
                        {detail.isMember === "false" &&
                        <i className="small material-icons">block</i>}
                    </div>                 
                </div>
                <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Закрыть</a>
                </div>
            </div>
        </div>
    );
}

export default User;