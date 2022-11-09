import React, { useState } from 'react';
import CrudFormVentas from './CrudFormVentas'
import CrudTableVentas from './CrudTableVentas'

const CrudVentas = ({db, setDb}) => {
  
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

  return (
    <div>
        <div> <CrudFormVentas createData={createData} 
                              updateData={updateData} 
                              dataToEdit={dataToEdit} 
                              setDataToEdit={setDataToEdit}/> </div>

        <div> <CrudTableVentas data={db} 
                              setDataToEdit={setDataToEdit} 
                              deleteData={deleteData}
                              admin={1}/> </div>
    </div>
  )   
}

export default CrudVentas