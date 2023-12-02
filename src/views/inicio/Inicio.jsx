import { Button } from "@material-tailwind/react";
import { Layout } from "../../components/Layout"
import { Link } from "react-router-dom";
import { CarouselWithContent } from "../../components/Carousel";
import { EcommerceCard } from "../../components/Card";


export const Inicio = () => {
    return (
        <Layout>
            <div className="w-full h-full flex flex-col items-center z-0">
                {/* <div className="flex flex-col items-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50"> */}
                    <CarouselWithContent />
                {/* </div> */}
                <div className="flex flex-col items-center text-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50 xl:text-3xl regals
                sm:py-10">
                    <h1 className="sm:text-sm md:text-lg lg:text-xl">VIENEN DE</h1>
                    <h1 className="sm:text-3xl md:text-4xl">FRANCIA</h1>
                    <h1 className="sm:text-sm md:text-lg lg:text-xl">PARECEN DE</h1>
                    <h1 className="sm:text-3xl md:text-4xl">ESTADOS UNIDOS</h1>
                    <h1 className="sm:text-sm md:text-lg lg:text-xl">CON RECETA DE</h1>
                    <h1 className="sm:text-3xl md:text-4xl">NEUQUÉN</h1>
                    <h1 className="sm:text-sm md:text-lg lg:text-xl">HECHAS EN</h1>
                    <h1 className="sm:text-3xl md:text-4xl">ASUNCIÓN</h1>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center w-full xl:h-screen-50 sm:gap-20 bg-deep-orange-200 xl:gap-44">
                    <div className="flex-col items-center justify-center w-48 h-56 sm:py-5"><EcommerceCard></EcommerceCard></div>
                    <div className="flex-col items-center justify-center w-48 h-56 sm:py-5"><EcommerceCard></EcommerceCard></div>
                    <div className="flex-col items-center justify-center w-48 h-56 sm:py-5"><EcommerceCard></EcommerceCard></div>
                </div>
                <div className="flex flex-row justify-center w-full xl:h-20 sm:py-5 bg-deep-orange-200">
                  <Link to="/menu">
                    <Button>Nuestro menú</Button>
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50">
                    <h1 className="tabernaserif">¡Una forma diferente y divertida de comer waffles!</h1>
                        <br />
                    <h1>Encontranos en Teniente Vera esquina Denis Roa</h1>
                        <br />  
                    <h1>Lunes a Domingos - 12:00 a 20:00</h1>
                </div>
            </div>
        </Layout>
    )
}