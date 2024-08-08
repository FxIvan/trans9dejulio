import Image from "next/image";
import ServiciosImagen from "public/ServiciosImagen.jpg";
export default function Servicios() {
  return (
    <div className="text-black" id="servicios">
      <div className="w-full text-4xl text-center my-12 font-bold">
        <h2>Nuestra gama de servicios</h2>
      </div>
      <div className="">
        <p>
          Transportes 9 de Julio S.A. pone a su disposición una amplia gama de
          servicios, dispuestos a satisfacer todas sus necesidades. A
          continuación nuestra lista de servicios:
        </p>
      </div>
      <div>
        <div className="my-8 flex flex-row justify-between">
          <div className="w-3/4">
            <div className="my-8">
              <div className="font-bold text-2xl">
                <h2>Recolección domiciliaria</h2>
              </div>
              <div>
                <p>
                  Este servicio se presta mediante la modalidad de recolección
                  manual en acera, estemétodo requiere la utilización de mano de
                  obra, Los vehículos de recolección transitan por su recorrido
                  recogiendo los residuos por medio de los operarios de
                  recolección y posteriormente se los lleva al sitio de
                  disposición final.
                </p>
              </div>
            </div>
            <div className="font-bold text-2xl">
              <h2>Barrido de Calles</h2>
            </div>
            <div>
              <p>Actualmente estamos implementando 3 tipos de barridos:</p>
            </div>
            <div>
              <div className="my-4">
                <ul>
                  <li className="font-bold ">Barrido Manual</li>
                  <li>
                    Como su nombre lo dice este sistema de barrido es efectuado
                    mediante la utilización de personal, el cual esta equipado
                    de herramientas y materiales para su trabajo algunas de
                    ellas son:
                  </li>
                  <li>• Carritos de Barrido</li>
                  <li>• Cepillos</li>
                  <li>• Palas</li>
                  <li>• Bolsas</li>
                  <li>• Guantes</li>
                  <li>
                    El producido del barrido manual se coloca embolsados en
                    lugares estratégicos de la ciudad y es recogido por camiones
                    compactadores.
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <ul>
                  <li className="font-bold ">Barrido Mecánico</li>
                  <li>
                    Este sistema es prestado mediante el uso de equipos barre
                    aspiradores. El equipo barreaspirador se encuentra montado
                    sobre un chasis de camión, el cual tiene instalado un
                    sistema de doble comando de manejo (para barrer ambas
                    manos). Este equipo se utiliza para la limpieza de las
                    calzadas desde el cordón hasta 2 metros hacia el centro de
                    la calzada. El producto del barrido es aspirado y enviado a
                    una tolva que luego se descarga en lugares autorizados por
                    medio de vuelco. Se la utiliza generalmente en sectores o
                    horariosde la ciudad con pocos autos estacionados.
                  </li>
                </ul>
              </div>
              <div className="my-4">
                <ul>
                  <li className="font-bold ">Barrido Mixto:</li>
                  <li>es la combinación de los dos anteriores.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={ServiciosImagen}
              width={900}
              height={900}
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <Image
              src={ServiciosImagen}
              width={900}
              height={900}
              className="w-full object-cover"
            />
          </div>
          <div className="w-3/4">
            <div className="my-8">
              <div className="font-bold text-2xl">
                <h2>Recoleccion de Residuos Voluminosos y montículos</h2>
              </div>
              <div>
                <p>
                  Este tipo de residuos se caracteriza por encontrarse en
                  elloselementos voluminosos, como productos de podas internas,
                  chatarras, montículos de y residuos de línea blanca Estos son
                  recolectadosmediante un servicio especial con chasis equipados
                  con cajas volcadoras y grúas hidráulicas en cuyo extremo se
                  encuentra un balde de levante denominado almeja. La prestación
                  fundamental de este Sercvicio es la rapidez de operación en el
                  proceso de carga, que le confiere un mayor rendimiento al
                  camión volcador común. Otra prestación de importancia es la
                  posibilidad de cargar elementos pesados e incómodos de asir
                  manualmente
                </p>
              </div>
            </div>
            <div className="my-8">
              <div className="font-bold text-2xl">
                <h2>Limpieza de playas</h2>
              </div>
              <div>
                <p>
                  La limpieza de playas se realiza en forma mecanizada mediante
                  la utilización de un equipo especial. Este equipo se utiliza
                  para la extracción de vidrios, colillas de cigarrillos,
                  piedras, latas, papeles, plásticos, etc. que se encuentran en
                  las playas. Este mecanismo además de la limpieza de los
                  sólidos superficiales facilita la oxigenación de la arena
                  reduciendo la posibilidad de proliferación de microorganismos
                  anaeróbicos.
                </p>
              </div>
            </div>
            <div className="my-8">
              <div className="font-bold text-2xl">
                <h2>Servicios a Particulares</h2>
              </div>
              <div>
                <p>
                  Atienden las necesidades en cuanto a la recolección de
                  residuos de una importante gama de empresas industriales y/o
                  comerciales tomando a modo de ejemplo a:
                </p>
                <ul>
                  <li>• Hoteles</li>
                  <li>
                    • Minicontenedores con tapas y ruedas de 1 y 1y 1/2 m3.
                  </li>
                  <li>• Contenedores de 2, 3 y 5 m3.</li>
                  <li>• Autocompactadoras de 10 m3.</li>
                  <li>• Caja volcadora de 20 m3.</li>
                  <li>• Cajas compactadoras de 30 m3.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
