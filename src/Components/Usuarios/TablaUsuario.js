import React from 'react'

function TablaUsuario(props) {
  const {usuarios, onDelete, onView} =props
  return (
    <table className="table table-striped table-bordered" >
    <thead className="table-primary">
      <tr>
        <th>Nombre</th>
        <th>Cedula</th>
        <th>Telefono</th>
        <th>Celular</th>
        <th>Correo</th>
        <th>Contraseña</th>
      </tr>
    </thead>
    <tbody>
      {usuarios.map((usuario) => {
       return( <tr key={usuario._id}>
          <td>{usuario.nombre}</td>
          <td>{usuario.cedula}</td>
          <td>{usuario.numeroTelefono}</td>
          <td>{usuario.numeroCelular}</td>
          <td>{usuario.correo}</td>
          <td>{usuario.contrasena}</td>
          <td>
            <button className="btn btn-danger btn-sm" onClick={() => {onDelete(usuarios._id)}}>Eliminar</button>
            <button className="btn btn-secondary btn-sm" onClick={() => {onView(usuario)}}>Ver</button>
          </td>
        </tr>)
      })}
    </tbody>
  </table>
  )
}

export default TablaUsuario