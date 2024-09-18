import React, { useEffect, useState } from 'react'

function FormAdopcion(props) {
    const { setAdopcion, onSave} =props;
    const [adop, setAdop] = useState({
        _id: null,
        razonAdopcion: ""
    });

    const limpiar = () => {
        setAdop({
            _id: null,
            razonAdopcion: ""
        });
    };

    useEffect(() => {
        if(setAdopcion)
            setAdop(setAdopcion)
    }, [setAdopcion]);

    if(adop === null){
        limpiar();
    }

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(adop);
        limpiar();
    }

    const handleChange = (e) => {
        setAdop({
          ...adop,
          [e.target.name]: e.target.value
        });
      };

  return (
    <div className="container mt-5">
    <form>
        <div className="form-group">
            <label className="form-label">Razon Adopcion</label>
            <input 
            type="text" 
            className="form-control"
            name="razonAdopcion"
            value={adop.razonAdopcion} 
            onChange={(e) => handleChange(e)} 
            />
        </div>
        <div className="form-group">
            <button className="btn btn-primary" onClick={onClickGuardar}>
            Guardar
            </button>
            <span></span>
            <button  className="btn btn-secondary" onClick={limpiar}>
            Limpiar
            </button>
        </div>
    </form>
</div>
  )
}

export default FormAdopcion