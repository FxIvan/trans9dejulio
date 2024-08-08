import Image from "next/image";
import LogoHorario1 from "public/HorarioLogo1.jpg";
import LogoHorario2 from "public/HorarioLogo2.jpg";

export default function Horarios() {
  return (
    <div id="horarios" className="container mx-auto py-6 my-8">
      <div className="w-full text-4xl text-center my-12 font-bold">
        <h2>Horarios</h2>
      </div>
      <div className="flex flex-col">
        <div className="w-full flex justify-start">
          <div className="w-1/2">
            <div className="w-full flex  justify-center h-16">
              <Image src={LogoHorario1} alt="Horario Logo 1" />
            </div>
            <div className="text-center my-4">
              <p>
                La recolección nocturna se realiza a partir de las 21 hs. por lo
                que resulta fundamental sacar las bolsas media hora antes.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-1/2">
            <div className="w-full flex  justify-center h-16">
              <Image src={LogoHorario2} alt="Horario Logo 2" />
            </div>
            <div className="text-center my-4">
              <p>
                La recolección diurna se realiza desde las 6 hs. por lo que se
                aconseja sacar las bolsas la noche anterior, lo mas tarde
                posible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center my-16">
        <h3 className="font-bold text-black">
          Respetar los horarios es bueno para todos
        </h3>
      </div>
    </div>
  );
}
