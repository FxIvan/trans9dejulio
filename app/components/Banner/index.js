import Image from "next/image";
import Link from "next/link";
import LogoTranspote from "public/Transporte9DeJulioLogo.gif";

export default function Banner() {
  return (
    <section className="flex flex-col items-center justify-center h-96">
      <h1 className="text-4xl text-[#939393] font-sans">
        TRANSPORTES <span className="text-black font-bold">9 DE JULIO</span> S.A
      </h1>
    </section>
  );
}
