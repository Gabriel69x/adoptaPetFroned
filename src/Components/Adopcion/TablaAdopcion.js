import React from 'react'

function TablaAdopcion(props) {
  const {adopcion, onDelete, onView} = props;
  return (
    <table className="table table-bordered table-hover mt-3 rounded">
      <thead className="table-primary">
        <tr>
          <th className="text-center">Razon Adopcion</th>
          
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {adopcion.map((adopcion) =>(
            <tr key={adopcion._id}>
            <td className="text-center"> {adopcion.razonAdopcion} </td>
            <td className="text-center">
            <button className="btn btn-danger btn-sm me-2" onClick={() => {onDelete(adopcion._id)}}>Eliminar</button>
            <button className="btn btn-primary btn-sm" onClick={() => {onView(adopcion)}}>Editar</button>
            </td>
          </tr>
          ))}
      </tbody>
    </table>
  )
}

export default TablaAdopcion