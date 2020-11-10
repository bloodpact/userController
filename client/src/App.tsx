import React, { FunctionComponent } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import IData from './interfaces'
import {dataRequest} from './utils/dbRequest'
import './App.css';
import Parkings from './Components/ParkingSelect/Parkings'
import AddUser from './Components/Users/AddUser'

const App:FunctionComponent = ()=> { 
  const [serverData, setServerData] = React.useState<IData[]>([])
  const [showAdd, setShowAdd] = React.useState<boolean>(false)
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShowAdd(!showAdd)
  }
  React.useEffect(()=>{
    dataRequest().then(r=>{
      setServerData(r)})
    M.AutoInit();
  },[])
  return (
    <div className="App">
      <h1 className="card-panel teal lighten-2">База данных паркингов</h1>
      <button onClick={handleClick} className="waves-effect waves-light btn mr">Форма внесения записи</button>
      {showAdd && <AddUser/>}      
      <Parkings serverData={serverData} /> 
    </div>
  );
}

export default App;
