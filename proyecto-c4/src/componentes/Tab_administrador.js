import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { useState } from 'react';
import Welcome from "./nombre";



function Tab_administrador() {

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
               Modificar productos
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
             <div className='container'>
               <br />
                <Welcome name="ALFREDO"/>;
             </div>
  
           </TabPane>
  
           <TabPane tabId="2">
             <div className='container'>
               <br />
               <img src='https://lh3.googleusercontent.com/a-/AOh14GjjMfH-BpCvLrIU7AoboHTinGSIgLowZtLIGrJTFg=s360-p-rw-no'
                width={300} height={300}
                />
             </div>
  
           </TabPane>
  
           <TabPane tabId="3">
             <div className='container'>
               <br />
               contenido 3
             </div>
  
           </TabPane>
  
         </TabContent>
      </div>
    );
  }
  export default Tab_administrador;