import {TabContent, TabPane, Nav, NavItem, NavLink, Table} from "reactstrap";
import { useState } from 'react';
import ListaCarrito from "./ListaCarrito";
import CrudTable from "./CrudTable";

function Tab_cliente({db, setDb}) {

    const[activeTab,setActiveTab] = useState("1");
  
    const cambiarTab = (numeroTab) =>{
      if(activeTab !== numeroTab){
        setActiveTab(numeroTab);
      }
    }
    
    return (
      <div className="Tab_cliente">
         <Nav tabs>
           <NavItem>
             <NavLink 
             className={(activeTab=="1" ? "activeTab baseTab" : "baseTab" )}
             onClick={()=>cambiarTab("1")}>
              Lista De Productos
              </NavLink>
           </NavItem>
  
           <NavItem>
             <NavLink 
                className={(activeTab=="2" ? "activeTab baseTab" : "baseTab" )}
             onClick={()=>cambiarTab("2")}>
               Carrito
             </NavLink>
           </NavItem>
         </Nav>
         
         <TabContent activeTab={activeTab}>
           <TabPane tabId="1">
           <div> <CrudTable data={db} /> </div>
           </TabPane>
  
           <TabPane tabId="2">

            <ListaCarrito/>

           </TabPane>

         </TabContent>
      </div>
    );
  }
  export default Tab_cliente;