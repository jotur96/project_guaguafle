import { Button } from "@material-tailwind/react";
import { Layout } from "../../components/Layout"
import { Link } from "react-router-dom";
import { CarouselWithContent } from "../../components/Carousel";
import { EcommerceCard } from "../../components/Card";

import img0 from "../../assets/images/inicio-images/guaguafle.png"
import img00 from "../../assets/images/inicio-images/guaguafle2.png"
import img000 from "../../assets/images/inicio-images/guaguafle3.png"
import img1 from "../../assets/images/inicio-images/1.jpg"
import img2 from "../../assets/images/inicio-images/2.jpg"
import img3 from "../../assets/images/inicio-images/3.jpg"
import img4 from "../../assets/images/inicio-images/4.jpg"
import img5 from "../../assets/images/inicio-images/5.jpg"
import img6 from "../../assets/images/inicio-images/6.jpg"
import promo0 from '../../assets/images/inicio-images/promo.jpg'


export const Inicio = () => {

    const imagesMenu = [
        {
            id: 1,
            img: img0,
            alt: "Pasá & probá!"
        },
        {
            id: 2,
            img: img000,
            alt: "Elegí tu masa"
        },
        {
            id: 1,
            img: img00,
            alt: "Pasá & probá!"
        }
    ]

    return (
        <Layout>
            <div className="w-full h-full flex flex-col items-center z-0 xl:pt-10">
                <div className="h-screen-50 xl:h-screen-76 w-full lg:px-20 xl:px-36 
                md:h-screen-60 lg:h-screen-60 sm:h-60 flex items-center m-0">
                    <CarouselWithContent images={imagesMenu} />
                </div>
                <div className="flex justify-between gap-10 px-10 lg-px-20 xl:px-36 py-10 my-10">
                    <img className="hidden lg:block w-1/4 object-cover rounded-xl shadow-xl" src={img2} alt="guafle" />
                    <div className="flex flex-col items-center text-center justify-center xl:text-3xl regals gap-4">
                        <p className="sm:text-sm md:text-lg lg:text-xl">VIENEN DE</p>
                        <p className="sm:text-3xl md:text-4xl">FRANCIA</p>
                        <p className="sm:text-sm md:text-lg lg:text-xl">PARECEN DE</p> 
                        <p className="sm:text-3xl md:text-4xl">ESTADOS UNIDOS</p>
                        <p className="sm:text-sm md:text-lg lg:text-xl">CON RECETA DE</p>
                        <p className="sm:text-3xl md:text-4xl">NEUQUÉN</p>
                        <p className="sm:text-sm md:text-lg lg:text-xl">HECHAS EN</p>
                        <p className="sm:text-3xl md:text-4xl">ASUNCIÓN</p>
                    </div>
                    <img className="hidden lg:block w-1/4 object-cover rounded-xl shadow-xl" src={img3} alt="guafle" />
                </div>
                <div className="bg-deep-orange-100 lg:gap-5 flex flex-col w-full h-fit pb-2 pt-2">
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:px-14 xl:h-screen-50 sm:gap-20 xl:gap-32">
                        <div className="flex-col items-center justify-center sm:w-11/12 lg:w-1/3 lg:h-56"><EcommerceCard className="h-full w-full object-cover" image={img4}></EcommerceCard></div>
                        <div className="flex-col items-center justify-center sm:w-11/12 lg:w-1/3 lg:h-56"><EcommerceCard className="h-full w-full object-cover" image={img5}></EcommerceCard></div>
                        <div className="flex-col items-center justify-center sm:w-11/12 lg:w-1/3 lg:h-56"><EcommerceCard className="h-full w-full object-cover" image={img6}></EcommerceCard></div>
                    </div>
                    <div className="flex flex-row justify-center w-full xl:h-10 pb-10 xl:py-16 sm:py-7">
                        <Link to="/menu">
                        <Button className="bg-guaflePink bg-opacity-95 text-white hover:scale-[1.02] focus:scale-[1.02] hover:shadow-sm">Nuestro menú</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50 gap-6 my-10 pb-20 lg:py-0 ">
                    <p className="text-2xl text-center font-extrabold">Una forma diferente y divertida de comer waffles</p>
                    <p className="text-xl text-center font-semibold">Encontranos en Teniente Vera esquina Denis Roa</p>
                    <p className="text-xl text-center font-semibold">Lunes a Domingos - 12:00 a 20:00</p>
                    <Link to="/nosotros" className="mt-5">
                        <Button className="bg-guaflePink bg-opacity-80 text-white hover:scale-[1.02] focus:scale-[1.02] hover:shadow-sm">Conoce más sobre nosotros</Button>
                    </Link>
                </div>
            </div>
        </Layout >
    )
}