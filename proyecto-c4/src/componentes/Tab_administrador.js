import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { useState } from 'react';

import ListaVentas from "./ListaVentas";

import CrudApp from "./CrudApp";
import CrudTable from "./CrudTable";

// const productos = require('../api/sample.json');
const ventasDb= require('../api/ventas.json');

function Tab_administrador({db, setDb}) {
  // const [db, setDb] = useState(productos);
    // const [productos, setProductos] = useState([]);
    //const [ventasDb, setVentasDb] = useState(ventasDb);
    const[activeTab,setActiveTab] = useState("1");
  
    const cambiarTab = (numeroTab) =>{
      if(activeTab !== numeroTab){
        setActiveTab(numeroTab);
      }
    }

    return (
      <div className="Tab_administrador">
         <Nav tabs>
           <NavItem>
             <NavLink 
             className={(activeTab=="1" ? "activeTab baseTab" : "baseTab" )}
             onClick={()=>cambiarTab("1")}
             >
               Lista productos
             </NavLink>
           </NavItem>
  
           <NavItem>
             <NavLink 
                className={(activeTab=="2" ? "activeTab baseTab" : "baseTab" )}
             onClick={()=>cambiarTab("2")}>
               Agregar producto
             </NavLink>
           </NavItem>
  
           <NavItem>
             <NavLink 
                className={(activeTab=="3" ? "activeTab baseTab" : "baseTab" )}
             onClick={()=>cambiarTab("3")}>
              Lista ventas
             </NavLink>
           </NavItem>
  
         </Nav>
         
         <TabContent activeTab={activeTab}>

           <TabPane tabId="1">
           <div> <CrudTable data={db} /> </div>
           </TabPane>

           <TabPane tabId="2">
             <div className='container'>
              <CrudApp db={db} setDb={setDb} /> 
             </div>
           </TabPane>
  
           <TabPane tabId="3">
             <div className='container'>
              <ListaVentas/>
             </div>
  
           </TabPane>
  
         </TabContent>
      </div>
    );
  }
  export default Tab_administrador;