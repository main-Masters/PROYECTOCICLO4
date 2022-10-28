
import { render } from '@testing-library/react';
import { useState } from 'react';
import App from './App';

function Home() {

    const[user,setUser] = useState("admin");
  
    const content = <a> loco </a> ;
    const cambiarUser = (userx) =>{
      if(user !== userx){
        setUser(user);
        console.log(user);
        content = <a>user !== user</a>;
        // if (user == "admin") {
        //     content = <a>LoL</a>;
        // } else {
        //     content = <a>OLO</a>;
        // }
      }
    }
    return (
        <div>
        <div>
            <button className='button' onClick={()=>cambiarUser("admin")}> administrador </button>
            <button onClick={()=>cambiarUser("cliente")}> cliente </button>
        </div>
        {content}
        </div>
    )
}
export default Home;