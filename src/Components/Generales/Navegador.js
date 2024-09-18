import React from 'react'

function Navegador() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" data-bs-theme="dark">
    <a className="navbar-brand" href="/">ADOPTAPET</a>
      
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mascotas">Mascotas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/usuarios">Usuarios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/adopcion">Adopción</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/vacuna">Vacunas</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>
  </header>
  )
}

export default Navegador