export default function Contacto() {
  return (
    <div className="mb-32" id="contacto">
      <div className="w-full text-4xl text-center my-12 font-bold">
        <h2>Contacto</h2>
      </div>
      <div className="flex flex-col justify-center w-full text-center">
        <h3>Comuníquese con nosotros</h3>
        <ul className="mt-9">
          <li>
            <span className="font-bold w-28">Dirección:</span>Antártida
            Argentina 4400
          </li>
          <li>
            <span className="font-bold w-28">Teléfono:</span>0223 469-5149 y
            líneas rotativas
          </li>
          <li>
            <span className="font-bold w-28">Localidad:</span>Mar del Plata,
            prov. de Buenos Aires
          </li>
        </ul>
      </div>
    </div>
  );
}
