import Image from "next/image";
import Banner from "./components/Banner";
import Empresa from "./components/Empresa";
import Servicios from "./components/Servicios";
import Calidad from "./components/Calidad";
import Horarios from "./components/Horarios";
import Reclamos from "./components/Reclamos";
import Comercial from "./components/Comercial";
import Consejo from "./components/Consejo";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Banner />
        <Empresa />
        <Servicios />
        <Calidad />
      </div>
      <div className="bg-red-200">
        <Horarios />
      </div>
      <div className="container mx-auto">
        <Reclamos />
        <Comercial />
        <Consejo />
        <Contacto />
      </div>
    </main>
  );
}
