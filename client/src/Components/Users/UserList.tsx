import React from 'react';
import IData from '../../interfaces'
type UserListDataType = {
    dataArr:IData[]
}
const UserList:React.FunctionComponent<UserListDataType> = ({dataArr})=> {
    return (
        <div className="row">
                    <table>
                    <thead>
                        <tr>
                            <th>Место</th>
                            <th>Лицевой счет</th>
                            <th>Имя</th>
                            <th>Номер паркинга</th>                            
                            <th>Телефон</th>
                            <th>E-mail</th>                         
                        </tr>
                        </thead>
                            <tbody>
                                {dataArr.map((elem:IData) =>{
                                    return(                                       
                                        <tr key={elem._id}>
                                            <td>{elem.place}</td>
                                            <td>{elem.account}</td>
                                            <td>{elem.FIO}</td>
                                            <td>{elem.parkingNum}</td>
                                            <td>{elem.phone}</td>
                                            <td>{elem.email}</td>
                                            {/* <td>{elem.comment}</td>
                                            <td>
                                                {elem.isMember !== "false" &&
                                                <i className="small material-icons">check</i>}
                                            </td> */}
                                        </tr>                                        
                                    )
                                })}
                            </tbody>
                    </table>
                </div>
    );
}

export default UserList;