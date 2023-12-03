import { Button } from "@material-tailwind/react";
import { Layout } from "../../components/Layout"
import { Link } from "react-router-dom";
import { CarouselWithContent } from "../../components/Carousel";
import { EcommerceCard } from "../../components/Card";

import img0 from "../../assets/images/inicio-images/guaguafle.png"
import img1 from "../../assets/images/inicio-images/1.jpg"
import img2 from "../../assets/images/inicio-images/2.jpg"
import img3 from "../../assets/images/inicio-images/3.jpg"
import img4 from "../../assets/images/inicio-images/4.jpg"
import img5 from "../../assets/images/inicio-images/5.jpg"
import img6 from "../../assets/images/inicio-images/6.jpg"


export const Inicio = () => {

    const imagesMenu = [
        {
            id: 1,
            img: img0,
            alt: "Elegí tu masa"
        }
    ]

    return (
        <Layout>
            <div className="w-full h-full flex flex-col items-center z-0 pt-10">
                <div className="h-screen-50 xl:h-screen-76 w-full px-10 lg-px-20 xl:px-36">
                    <CarouselWithContent images={imagesMenu} />
                </div>
                <div className="flex justify-between gap-36   px-10 lg-px-20 xl:px-36 py-10 my-10">
                    <img className="hidden lg:block w-1/4 object-cover rounded-xl shadow-xl" src={img2} alt="" />
                    <div className="flex flex-col items-center text-center justify-center xl:text-3xl regals gap-4">
                        <p className="text-xl">VIENEN DE</p>
                        <p className="text-3xl">FRANCIA</p>
                        <p className="text-xl">PARECEN DE</p>
                        <p className="text-3xl">ESTADOS UNIDOS</p>
                        <p className="text-xl">CON RECETA DE</p>
                        <p className="text-3xl">NEUQUÉN</p>
                        <p className="text-xl">HECHAS EN</p>
                        <p className="text-3xl">ASUNCIÓN</p>
                    </div>
                    <img className="hidden lg:block w-1/4 object-cover rounded-xl shadow-xl" src={img3} alt="" />
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center w-full xl:h-screen-50 sm:gap-20 lg:bg-deep-orange-200 xl:gap-44 ">
                    <div className="flex-col items-center justify-center w-96 lg:w-56 lg:h-56 sm:py-5"><EcommerceCard className="h-full w-full object-cover object-left-top" image={img4}></EcommerceCard></div>
                    <div className="flex-col items-center justify-center w-96 lg:w-56 lg:h-56 sm:py-5"><EcommerceCard className="h-full w-full object-cover" image={img5}></EcommerceCard></div>
                    <div className="flex-col items-center justify-center w-96 lg:w-56 lg:h-56 sm:py-5"><EcommerceCard className="h-full w-full object-cover" image={img6}></EcommerceCard></div>
                </div>
                <div className="flex flex-row justify-center w-full xl:h-20 py-20 xl:p-2  lg:bg-deep-orange-200">
                    <Link to="/menu">
                        <Button>Nuestro menú</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50 gap-6 my-10 pb-20 lg:py-0 ">
                    <p className="tabernaserif text-2xl text-center">¡Una forma diferente y divertida de comer waffles!</p>
                    <p className="text-xl text-center ">Encontranos en Teniente Vera esquina Denis Roa</p>
                    <p className="text-xl text-center">Lunes a Domingos - 12:00 a 20:00</p>
                    <Link to="/nosotros" className="mt-5">
                        <Button>Conoce más sobre nosotros</Button>
                    </Link>
                </div>
            </div>
        </Layout >
    )
}