import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState('');
  //
  //Validación Formulario
  //
  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje('No es un presupuesto válido');

      return;
    }

    setMensaje('');
    setIsValidPresupuesto(true);
  };

  return (
    <div className="contenedor-presupuestos sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>

          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
