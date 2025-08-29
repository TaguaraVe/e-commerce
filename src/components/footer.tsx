import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center gap-8 rounded-lg bg-gray-700 p-8 md:flex-row md:items-start md:justify-between md:gap-0">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Boxi Sleep Logo"
            width={100}
            height={70}
          />
        </Link>
        <p className="text-sm text-gray-200">&copy; 2025 Taguara Digital</p>
        <p className="text-sm text-gray-200">Todos los derechos reservados</p>
      </div>
      <div className="txt-sm flex flex-col items-center gap-4 text-gray-200 md:items-start">
        <p className="">Links</p>
        <Link href="/">Inicio</Link>
        <Link href="/contact">Contacto</Link>
        <Link href="/">Teminos del Servicio</Link>
        <Link href="/">Politica de Privacidad</Link>
      </div>
      <div className="txt-sm flex flex-col items-center gap-4 text-gray-200 md:items-start">
        <p className="">Links</p>
        <Link href="/">Productos</Link>
        <Link href="/contact">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sales</Link>
      </div>
      <div className="txt-sm flex flex-col items-center gap-4 text-gray-200 md:items-start">
        <p className="">Links</p>
        <Link href="/">Nosotros</Link>
        <Link href="/contact">Contacto</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Afilicacion</Link>
      </div>
    </footer>
  );
}
