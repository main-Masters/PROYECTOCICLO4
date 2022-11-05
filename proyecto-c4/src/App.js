import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TabContent, TabPane, Nav, NavItem, NavLink, Container, Button, } from "reactstrap";
import { useState } from 'react';
import Tab_cliente from './componentes/Tab_cliente';
import Tab_administrador from './componentes/Tab_administrador';

function App() {

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
      <Button onClick={()=>tipoUsuario("administrador")}>Administrador</Button>
      <Button onClick={()=>tipoUsuario("cliente")}>Cliente</Button>
      <div>
        <Tab_administrador/>
      </div>
    </div>

    )}
  else{
    return(
      <div>
      <Button onClick={()=>tipoUsuario("administrador")}>Administrador</Button>
      <Button onClick={()=>tipoUsuario("cliente")}>Cliente</Button>
      <div>
        <Tab_cliente/>
      </div>
    </div>
    )
    }
    
}

export default App;