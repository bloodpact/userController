import React from 'react';
import IData from '../../interfaces'
import User from './User' 

type UserListDataType = {
    dataArr:IData[]
}
const UserList:React.FunctionComponent<UserListDataType> = ({dataArr}) => {
    const [currentUser, setCurrentUser] = React.useState<IData>() 
    return (
        <div className="row">
                    <table>
                    <thead>
                        <tr>     
                            <th></th>                   
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
                                            <td>
                                                <a onClick={()=>{setCurrentUser(elem)}}
                                                 className="waves-effect waves-light btn modal-trigger"
                                                 href="#userModal">Детали</a>
                                            </td>
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
                                            {currentUser && <td><User detail={currentUser}/></td>}
                                            
                                        </tr>                                        
                                    )
                                })}
                            </tbody>
                    </table>
                    
                </div>
    );
}

export default UserList;