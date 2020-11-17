import React from 'react';
import IData from '../../interfaces';
import User from './User' ;
import {deleteData} from '../../utils/dbRequest';

type UserListDataType = {
    dataArr:IData[]
}
const UserList:React.FunctionComponent<UserListDataType> = ({dataArr}) => {
    const [currentUser, setCurrentUser] = React.useState<IData>() 
    React.useEffect(() => {        
        M.AutoInit();
    })
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
                                <th></th>                       
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
                                            {currentUser && <td><User detail={currentUser}/></td>}  
                                            <td><button onClick={deleteData} className="waves-effect waves-light btn modal-trigger"></button>Удалить</td>                                          
                                        </tr>                                        
                                    )
                                })}
                            </tbody>
                    </table>                    
                </div>
    );
}

export default UserList;