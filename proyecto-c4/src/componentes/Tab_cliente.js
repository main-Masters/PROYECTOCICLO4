import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { useState } from 'react';



function Tab_cliente() {

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
             onClick={()=>cambiarTab("1")}
             >
               Lista productos
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
             <div className='container'>
               <br />
                esta es la lista de productos
             </div>
  
           </TabPane>
  
           <TabPane tabId="2">
             <div className='container'>
               <br />
               este es el carrito
             </div>
  
           </TabPane>

         </TabContent>
      </div>
    );
  }
  export default Tab_cliente;