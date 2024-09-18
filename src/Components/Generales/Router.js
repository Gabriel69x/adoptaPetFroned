import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Mascotas from '../Mascotas/Mascotas';
import Adopcion from '../Adopcion/Adopcion';
import Vacuna from '../Vacuna/Vacuna';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/adopcion" element={<Adopcion />} />
          <Route path="/vacuna" element={<Vacuna />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
