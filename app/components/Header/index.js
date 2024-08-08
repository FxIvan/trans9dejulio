import Image from "next/image";
import Link from "next/link";
import LogoTranspote from "public/Transporte9DeJulioLogo.gif";

export default function Header() {
  const navbar = [
    {
      href: "empresa",
      label: "Empresa",
    },
    {
      href: "servicios",
      label: "Servicios",
    },
    {
      href: "calidad",
      label: "Calidad",
    },
    {
      href: "horarios",
      label: "Horarios",
    },
    {
      href: "reclamos",
      label: "Reclamos",
    },
    {
      href: "comercial",
      label: "Comercial",
    },
    {
      href: "legislacion",
      label: "Legislación",
    },
    {
      href: "consejos",
      label: "Consejos",
    },
    {
      href: "contacto",
      label: "Contacto",
    },
  ];

  return (
    <header className=" bg-white">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="flex items-center">
            <Image src={LogoTranspote} alt="Transporte 9 de Julio" />
          </div>
          <div className="flex items-center">
            {navbar.map(({ href, label }) => (
              <a
                key={href}
                href={`/#${href}`}
                className="text-black font-bold ms-4"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
