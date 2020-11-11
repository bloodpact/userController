import React, { FunctionComponent } from 'react';
import UserList from '../Users/UserList'
import IData from '../../interfaces'
type serverDataProps = {
    serverData:IData[]
}
const Parkings:FunctionComponent<serverDataProps> = ({serverData}) =>{
  const [dataArr, setDataArr] = React.useState(serverData)
  const [uniqueParking, setUniqueParking] = React.useState<[]>([])
  const [showAdd, setShowAdd] = React.useState<boolean>(false)
  React.useEffect(()=>{
      //get unique values from response from server
    const uniqueSetValues:any = new Set(serverData.map(item => item.parkingNum));
    const arrayUniqueValues:any = Array.from(uniqueSetValues)
    setUniqueParking(arrayUniqueValues)
  },[serverData])
  function handleClick(e:React.MouseEvent<HTMLButtonElement>){
      //filter by parking number
    const dataHTMLtext:number = e.currentTarget.innerText as unknown as number
    const filtered = serverData.filter((el)=>{
       return el.parkingNum === dataHTMLtext*1
    })
    setShowAdd(true)
    setDataArr(filtered)
}
    return (
        <div>
            <h3>Выбор паркинга</h3>
            <div className="container">
                <div className="row">
                {uniqueParking.map((elem:IData, index:number) =>{
                    return(
                        <button key={index} onClick={handleClick} className="waves-effect waves-light btn mr">{elem}</button>
                    )
                })}
                </div>
                {showAdd && <UserList dataArr={dataArr}/> }
                
             </div>
        </div>
    );
}

export default Parkings;