import React, {useEffect, useState} from 'react'

function FormUsuario(props) {
    const {setUsuario, onSave} = props;
    const [user, setUser] = useState({
        _id: null,
        nombre: "",
        cedula: "",
        correo: "",
        contrasena: ""
    });

    const limpiar = () => {
        setUser({
            _id: null,
        nombre: "",
        cedula: "",
        correo: "",
        contrasena: ""
        })
    };

    useEffect(() => {
        if(setUsuario)
        setUser(setUsuario)
    }, [setUsuario])

    if(user === null){
        limpiar();
    }

    const onClickGuardar = (e) => {
        e.preventDefault();
        onSave(user);
        limpiar();
    }

  return (
    <div>
        <form>
            <div className="row">
                <div className="col">
                    <label className="form-label">Usuario:</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onClickGuardar}>Guardar</button>
        </form>
    </div>
  )
}

export default FormUsuario