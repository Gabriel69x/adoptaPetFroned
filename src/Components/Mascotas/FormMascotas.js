import React, {useState, useEffect} from 'react'
import TablaVacuna from "../Vacuna/TablaVacuna";

function FormMascotas(props) {
  const { getMascotas, setMascotas, onSave } = props;
  const [ vacuna, setVacuna ] = useState(null)
  const [thisMascota, setThisMascota] = useState({
    _id: null,
    nombreMascota: "",
    raza: "",
    tipoMascota: "",
    descripcion: "",
    foto: "",
    estadoSalud: "",
    fechaNacimientoMascota: "",
    fechaIngresooMascota: "",
    disponibilidadMascota: "",
    vacunas :{
        _id: null,
        nombreVacuna: "",
        tipo: ""
      }
  });


  const limpiar = () => {
    setThisMascota({
      _id: null,
      nombreMascota: "",
      raza: "",
      tipoMascota: "",
      descripcion: "",
      foto: "",
      estadoSalud: "",
      fechaNacimientoMascota: "",
      fechaIngresooMascota: "",
      disponibilidadMascota: "",
      vacunas :{
          _id: null,
          nombreVacuna: "",
          tipo: ""
        }
    })
    setVacuna({
      _id: null,
      nombreVacuna: "",
      tipo: ""
    })
  };

  useEffect(() => {
    if (setMascotas)
      setThisMascota(setMascotas);
    setVacuna(setMascotas.vacuna)
  }, [setMascotas]);

  if (thisMascota === null) {
    limpiar();
  }

  const handleChange = (e) => {
    setThisMascota({
      ...thisMascota,
      [e.target.name]: e.target.value,
    });
    getMascotas(thisMascota);
  };

  const onClickGuardar = (e) => {
    e.preventDefault();
    onSave(thisMascota);
    limpiar();
  };

  const asignarVacuna = (vacuna) => {
    setThisMascota({
      ...thisMascota, vacunas:vacuna
    });
    console.log(thisMascota);
    getMascotas(thisMascota);
  }

 
  return (
    <div className="container mt-5">
    <form>
      <div>
        <div className="mb-3">
          <label className="form-label">Nombre Mascota</label>
          <input className="form-control" type="text" name="nombreMascota" value={thisMascota.nombreMascota} onChange={(e) => {handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Raza</label>
          <input className="form-control" type="text" name="raza" value={thisMascota.raza} onChange={(e) => {handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de Mascota</label>
          <input className="form-control" type="text" name="tipoMascota" value={thisMascota.tipoMascota} onChange={(e) => {handleChange(e)}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input className="form-control" type="text" name="descripcion" value={thisMascota.descripcion} onChange={(e) => {handleChange(e)}} />
        </div>
      </div>
    </form>
    <h3>Datos de vacuna</h3>
    <TablaVacuna verBotones={false} setVacuna={vacuna} getMascotas={asignarVacuna}/>
    <div>
      <button className="btn btn-warning" onClick={onClickGuardar} >Guardar</button>
      <span></span>
      <button className="btn btn-warning" onClick={limpiar}>Limpiar</button>
    </div>
  </div>
  )
}

export default FormMascotas