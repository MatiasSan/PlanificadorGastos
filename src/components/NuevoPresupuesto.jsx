import React from 'react';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
  return (
    <div className="contenedor-presupuestos sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>

          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default NuevoPresupuesto;