import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';



const CrudApp = ({db, setDb}) => {

  // const [db, setDb] = useState(data);
  
  const [dataToEdit, setDataToEdit] = useState(null);

  

  const createData = (data) => {
    data.id = db.length + 1;
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {let isDelete = window.confirm(
    `¿Estás seguro de eliminar el registro con el id '${id}'?`
  );

  if (isDelete) {
    let newData = db.filter((el) => el.id !== id);
    setDb(newData);
  } else {
    return;
  }};

  // const estadoCarrito = (data) =>{ 

  // }

  return (
    <div>
      <div> <CrudForm createData={createData} 
                      updateData={updateData} 
                      dataToEdit={dataToEdit} 
                      setDataToEdit={setDataToEdit} /> </div>

      <div> <CrudTable data={db} 
                        setDataToEdit={setDataToEdit} 
                        deleteData={deleteData}
                        admin={1}
                        /> </div>
    </div>

  )
}

export default CrudApp
