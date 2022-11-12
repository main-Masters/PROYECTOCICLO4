import {TabContent, TabPane, Nav, NavItem, NavLink, Table} from "reactstrap";
import { useState } from 'react';
import CrudTable from "./CrudTable";
import CrudCarrito from "./CrudCarrito";
import ShoppingCart from "./ShoppingCart";

function Tab_cliente({db, setDb}) {

    const[activeTab,setActiveTab] = useState("1");

    //const [estadoCarrito, setEstadoCarrito] = useState(0)
    
  
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
         </Nav>
         
         <TabContent activeTab={activeTab}>
           <TabPane tabId="1">
            <ShoppingCart products = {db}/>
           </TabPane>

         </TabContent>
      </div>
    );
  }
  export default Tab_cliente;