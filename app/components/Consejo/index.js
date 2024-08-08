import Image from "next/image";
import ConsejoImagen from "public/ConsejoImagen.jpg";

export default function Consejo() {
  return (
    <div id="consejos">
      <div className="w-full text-4xl text-center my-12 font-bold">
        <h2>Consejos</h2>
      </div>
      <div className="flex flex-row-reverse justify-around">
        <div className="flex items-center">
          <div>
            <p>
              A continuación le ofrecemos algunos consejos de seguridad e
              higiene:
            </p>
            <ul className="my-12">
              <li>
                • Recuerde siempre embolsar los residuos asegurándose que la
                bolsa quede bien cerrada.
              </li>
              <li>
                • Colocar dentro de recipientes los residuos punzantes (botellas
                rotas, làmparas, agujas...).
              </li>
              <li>
                • Depositar siempre la bolsa en lugares elevados y alejados de
                pilares de electricidad.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image src={ConsejoImagen} alt="Imagen de conejo" />
        </div>
      </div>
    </div>
  );
}
