import Image from "next/image";
import ComercialImagen from "public/ComercialImagen.jpg";
export default function Comercial() {
  return (
    <div id="comercial">
      <div className="w-full text-4xl text-center my-12 font-bold">
        <h2>Comercial</h2>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-3/4">
          <p>
            Transportes 9 de Julio S.A. posee en Mar del Plata, un área de
            atención de Servicios a Particulares, allí se atienden las
            necesidades en cuanto a la recolección de residuos de una importante
            gama de empresas industriales y/o comerciales tomando a modo de
            ejemplo a:
          </p>
          <ul className="my-12">
            <li>• Hoteles</li>
            <li>• Minicontenedores con tapas y ruedas de 1 y 1y 1/2 m3.</li>
            <li>• Contenedores de 2, 3 y 5 m3.</li>
            <li>• Autocompactadoras de 10 m3.</li>
            <li>• Caja volcadora de 20 m3.</li>
            <li>• Cajas compactadoras de 30 m3.</li>
          </ul>
          <p>
            Al comunicarse con nuestros teléfonos recibirá l atención y
            asesoramiento necesario para determinar cual de todas es las mas
            conveniente. No deje de llamarnos, mas de 250 empresas de nuestra
            ciudad nos avalan.
          </p>
        </div>
        <div>
          <Image src={ComercialImagen} alt="Imagen de comercial" />
        </div>
      </div>
    </div>
  );
}
