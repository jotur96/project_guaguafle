import { Carousel } from "@material-tailwind/react";
import { Layout } from "../../components/Layout";

import img1 from "../../assets/images/menu-images/elegi-tu-masa-guafle.jpg"
import img2 from "../../assets/images/menu-images/elegi-tus-sabores.jpg"
import img3 from "../../assets/images/menu-images/elegi-tus-toppings.jpg"
import img4 from "../../assets/images/menu-images/elegi-tu-masa-guafle.jpg"
import menu from "../../assets/images/menu-images/menu-guaguafle.jpg"



export const Menu = () => {


    const CarouselItems = ({ img,  alt }) => {
        return <img src={img} alt={alt}></img>
    }

    const MenuItems = ({ img, alt }) => {
        return <img src={img} alt={alt} className="rounded-3xl"></img>
    }

    const images = [ 
        {
            id: 1,
            img: img1,
            alt: "Elegí tu masa"
        },
        {
            id: 2,
            img: img2,
            alt: "Elegí tus sabores"
        },
        {
            id: 3,
            img: img3,
            alt: "Elegí tus toppings"
        },
    ]

    const menuImages = [
        {
            id: 1,
            img: menu,
            alt: "Menu"
        }
    ]


    return (
        <Layout>
            <div className="flex flex-col items-center bg-slate-600 w-full h-full my-16 mx-1">
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl text-guafleOrange">Menu</h1>
                    <h2 className="text-3xl text-guafleOrange pt-8"> Armá tu propio Wafle!! </h2>
                </div>
                <div className="flex flex-col justify-evenly items-center md:flex-row  w-full h-full">
                    <div className=" md:m-10">    
                        <Carousel loop={true} autoplay={true} autoplayDelay={3000} className="mt-5 mb-5 md:w-700 rounded-3xl">
                            {images.map((image) => (
                                <CarouselItems key={image.id} img={image.img} alt={image.alt} />
                            ))}
                        </Carousel>
                    </div>
                    <div className="md:m-10 md:w-700 ">
                        {menuImages.map((menuImage) => (
                            <MenuItems key={menuImage.id} img={menuImage.img} alt={menuImage.alt}  />
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    )

}