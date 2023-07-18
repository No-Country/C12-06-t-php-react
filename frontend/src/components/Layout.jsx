import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "./NavBar/NavBar";
import Footer from "./shared/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>Wheel offers - {page}</title>
        <link rel="icon" href="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="author"
          content="Exequiel Maydana, Valentina Molina, Fernanda Aguilar, Guillermo Zevallos"
        />
        <meta
          name="description"
          content="Descubre nuestro concesionario de autos exclusivo. En Wheel Offers, ofrecemos una amplia gama de vehículos de alta calidad para satisfacer tus necesidades y preferencias. Nuestra selección incluye autos nuevos y usados de marcas reconocidas, con opciones que se adaptan a todos los estilos de vida y presupuestos. Confía en nosotros para encontrar el auto de tus sueños y disfrutar de una experiencia de compra excepcional. Visítanos hoy mismo y déjanos ayudarte a encontrar el vehículo perfecto para ti"
        />
        <meta
          name="keywords"
          content="Concesionario de autos, Venta de autos, Autos nuevos, Autos usados, Marcas reconocidas, Experiencia de compra, Presupuesto, Estilos de vida"
        />
      </Head>
      <NavBar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
