import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TabContent, TabPane, Nav, NavItem, NavLink, Container, Button, } from "reactstrap";
import { useState } from 'react';
import Tab_cliente from './componentes/Tab_cliente';
import Tab_administrador from './componentes/Tab_administrador';

const productos = require('./api/productos.json');

function App() {

  const [db, setDb] = useState(productos);
  const[vistaTab,setVista] = useState("cliente");

  const tipoUsuario = (usuario) =>{
    if(vistaTab !== usuario){
      setVista(usuario);
    }
  }
  // console.log(vistaTab)
  if (vistaTab == "administrador"){
    return(
      <div>
      <Button onClick={()=>tipoUsuario("administrador")}>administrador</Button>
      <Button onClick={()=>tipoUsuario("cliente")}>Cliente</Button>
      <div>
        <Tab_administrador db={db} setDb={setDb} />
      </div>
    </div>

    )}
  else{
    return(
      <div>
      <Button onClick={()=>tipoUsuario("administrador")}>administrador</Button>
      <Button onClick={()=>tipoUsuario("cliente")}>Cliente</Button>
      <div>
        <Tab_cliente db={db} setDb={setDb}/>
      </div>
    </div>
    )
    }
}
export default App;