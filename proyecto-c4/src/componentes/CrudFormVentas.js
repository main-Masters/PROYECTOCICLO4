import React, {useState, useEffect} from 'react';

const inicialForm = {
  referencia: "",
  fecha: "",
  monto: "",
  id: null,
}


const CrudFormVentas = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const [form, setForm] = useState(inicialForm);
    
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(inicialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit  = (e) =>{
    e.preventDefault();

    if (!form.referencia || !form.fecha|| !form.monto){
      alert("Datos Incompletos")
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset   = (e) =>{
    setForm(inicialForm);
    setDataToEdit(null);
  };


  return (
    <div>
      <h3>{dataToEdit? "Editar": "Agregar"}</h3>
      <form onSubmit={handlesubmit}>
        <input type= "text" name='referencia' placeholder='Referencia' onChange={handleChange} value={form.referencia}/>
        <input type= "number" name='monto' placeholder='Monto' onChange={handleChange} value={form.monto}/>
        <input type= "date" name='fecha' placeholder='Fecha' onChange={handleChange} value={form.fecha}/>
        <input type= "submit" value="Enviar" />
        <input type= "reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </div>
  )
}

export default CrudFormVentas