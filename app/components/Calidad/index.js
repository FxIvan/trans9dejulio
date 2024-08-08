import Image from "next/image";
import ImagenCalidad from "public/ImagenCalidad.jpg";

export default function Calidad() {
  return (
    <div id="calidad">
      <div className="w-full text-4xl text-center my-12 font-bold">
        <h2>Calidad</h2>
      </div>
      <div className="flex flex-row justify-around">
        <div className="w-1/2 items-center flex">
          <p>
            La Empresa tiene como objetivo alcanzar, mantener y asegurar la
            eficacia calidad en la prestación de sus Servicios y en la atención
            a sus clientes. Para ello, se compromete a capacitar a todo su
            personal a fin de cumplir con los requisitos del Sistema de Gestión
            de la Calidad y superar los logros obtenidos sobre la base de la
            mejora continua. Esta Política es revisada periódicamente y
            difundida a todos sus Empleados.
          </p>
        </div>
        <div>
          <Image src={ImagenCalidad} alt="Imagen de calidad" />
        </div>
      </div>
    </div>
  );
}
