import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { useState } from 'react';



export default function Tab_1() {
    
const[activeTab,setActiveTab] = useState("1");

const cambiarTab = (numeroTab) =>{
  if(activeTab !== numeroTab){
    setActiveTab(numeroTab);
  }
}
   return <NavLink 
    className={(activeTab=="1" ? "activeTab baseTab" : "baseTab" )}
    onClick={()=>cambiarTab("1")}>
      Lista productos
   </NavLink>
  }