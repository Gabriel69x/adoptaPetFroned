import React, { useState, useEffect } from "react";

function FormVacuna(props) {
  const { setVacuna, onSave } = props;
  const [formulario, setFormulario] = useState({
    _id: null,
    nombreVacuna: "",
    tipo: "",
  });

  const limpiar = () => {
    setFormulario({
      _id: null,
      nombreVacuna: "",
      tipo: "",
    });
  };

  useEffect(() => {
    if (setVacuna ) 
    setFormulario(setVacuna);  
  }, [setVacuna]);

  if (formulario === null) {
    limpiar();
  }

  const onClickGuardar = (e) => {
    e.preventDefault();
    onSave(formulario);
    limpiar();
  };
  
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className="container mt-5">
    <form>
      <div className="form-group">
        <label className="form-label">Nombre de la Vacuna</label>
        <input
          className="form-control"
          type="text"
          name="nombreVacuna"
          value={formulario.nombreVacuna}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Tipo de Vacuna</label>
        <input
          className="form-control"
          type="text"
          name="tipo"
          value={formulario.tipo}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div  className="form-group">
        <button className="btn btn-primary" onClick={onClickGuardar}>
          Guardar
        </button>
        <button className="btn btn-secondary" onClick={limpiar}>
          Limpiar
        </button>
      </div>
    </form>
  </div>
   
  );
}

export default FormVacuna;
