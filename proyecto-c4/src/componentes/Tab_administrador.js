import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { useState } from 'react';
import ListaDeProductos from "./ListaDeProductos";
import FormularioProducto from "./FormularioProducto";
import ListaVentas from "./ListaVentas";




function Tab_administrador() {
    // const [productos, setProductos] = useState([]);
    const[activeTab,setActiveTab] = useState("1");
  
    const cambiarTab = (numeroTab) =>{
      if(activeTab !== numeroTab){
        setActiveTab(numeroTab);
      }
    }
    
    
    //   const agregarProducto = producto => {
    // if (producto.nombre.trim()) {
    //   producto.nombre = producto.nombre.trim();
    //   const productosActualizados = [producto, ...productos];
    //   setProductos(productosActualizados);
    // }
    //}

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
             <div className='container'>
              <ListaDeProductos/>
             </div>
  
           </TabPane>
  
           <TabPane tabId="2">
             <div className='container'>
               <FormularioProducto/>
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