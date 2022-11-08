import React, {useState, useEffect} from 'react';

const inicialForm = {
  nombre: "",
  valor: "",
  stock: "",
  imagen: "",
  id: null,
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
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

    if (!form.nombre || !form.valor|| !form.stock|| !form.imagen){
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
        <input type= "text" name='nombre' placeholder='Nombre' onChange={handleChange} value={form.nombre}/>
        <input type= "number" name='valor' placeholder='Valor' onChange={handleChange} value={form.valor}/>
        <input type= "number" name='stock' placeholder='Stock' onChange={handleChange} value={form.stock}/>
        <input type= "text" name='imagen' placeholder= 'Imagen.png'onChange={handleChange} value={form.imagen}/>
        <input type= "submit" value="Enviar" />
        <input type= "reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </div>
  )
}

export default CrudForm;