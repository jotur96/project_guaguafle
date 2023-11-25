import { Carousel } from "@material-tailwind/react";
import { Layout } from "../../components/Layout";

import img1 from "../../assets/images/menu-images/elegi-tu-masa-guafle.jpg"
import img2 from "../../assets/images/menu-images/elegi-tus-sabores.jpg"
import img3 from "../../assets/images/menu-images/elegi-tus-toppings.jpg"
import menu1 from "../../assets/images/menu-images/arma-tu-guafle.jpg"
import menu2 from "../../assets/images/menu-images/menu-guaguafle.jpg"



export const Menu = () => {


    const CarouselItems = ({ img, alt }) => {
        return <img src={img} alt={alt} className=" w-full h-full rounded-3xl"></img>
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
            img: menu1,
            alt: "Menu"
        },
        {
            id: 2,
            img: menu2,
            alt: "Menu"
        }
    ]

    const imagesIg = [
        {
            id: 1,
            img: "https://scontent.cdninstagram.com/v/t39.30808-6/402648118_305086659049869_1631573336250979745_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=5iXHDPmnPgAAX_RyiHo&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfB3NrV2w6y_lBBxIn2_d5GprXto4TdFm5tLDV3Hluotaw&oe=6565936D&_nc_sid=10d13b",
            alt:"Guafles"
        },
        {
            id: 2,
            img: "https://scontent.cdninstagram.com/v/t39.30808-6/385502631_281216221436913_8145499822544321553_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=C6QM-UXilVoAX98QM1R&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfAJrXIF9ah31PtpFRp6npZZ3hrdLEJuoaSZPrvXJR5ffg&oe=6564AC1A&_nc_sid=10d13b",
            alt:"Guafles"
        },
        {
            id: 3,
            img: "https://instagram.fasu3-1.fna.fbcdn.net/v/t39.30808-6/376840028_268954202663115_3124706802048995142_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDAweDIwMDAuc2RyIn0&_nc_ht=instagram.fasu3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=yQCXXKDC2EkAX-Ad-So&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE4OTUyMzEyNzQxMDczOTIzNw%3D%3D.2-ccb7-5&oh=00_AfCr_mfqH5yCSTw8xi04cFfhi3qr5H3Mj1EenYeXlzciWA&oe=6563F136&_nc_sid=b41fef",
            alt:"Guafles"
        },
        {
            id: 4,
            img: "https://instagram.fasu3-1.fna.fbcdn.net/v/t39.30808-6/361656899_17893834712840524_8085700217199640029_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDAweDEwMDAuc2RyIn0&_nc_ht=instagram.fasu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=biwIYQOp_Y8AX_rsCTO&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE0OTY2NTYzNDU5MzIzMjE5OQ%3D%3D.2-ccb7-5&oh=00_AfAHIzgYkVdSORvk6k29Q1elcJnfzxcT96CnmJ-YaPYQVg&oe=6563DC1E&_nc_sid=b41fef",
            alt:"Guafles"
        },
        {
            id: 5,
            img: "https://instagram.fasu3-1.fna.fbcdn.net/v/t39.30808-6/365955084_17896491131840524_3474742778850007025_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fasu3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=gAFhKNebbnwAX_cNgfP&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzE2MjgxNjI3ODQ5NzYxNTUyOA%3D%3D.2-ccb7-5&oh=00_AfDVlSoCduUPAblHGai_M5rn7v-Ytl0iyI-o2DODfvlNnQ&oe=65633D5F&_nc_sid=b41fef",
            alt:"Guafles"
        },
    ]


    const background = "https://scontent.cdninstagram.com/v/t39.30808-6/401503687_305085889049946_8132371084919703394_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=8gaCF4xCpy0AX_Mqtcs&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfDcqHzDWUyDIRDvVV2T0ykQG6HJmF2bj_5QO2-qPrJ6sQ&oe=6563ADC0&_nc_sid=10d13b"


    return (
        <Layout>
            <div className="flex flex-col h-full w-full">
                <img className="fixed w-full h-full object-cover opacity-40 z-0" src={background} alt="Background" />
                <div className="h-full w-full">
                    <section className="flex 2xl:flex-row flex-col-reverse w-full 2xl:h-fit h-screen items-center justify-center">
                        <div className="flex items-center justify-center w-full 2xl:w-1/2 h-1/2 2xl:h-fit 2xl:px-36 z-10 bg-guafleSecondary 2xl:py-10">
                            <Carousel loop={true} autoplay={true} autoplayDelay={5000} className="">
                                {images.map((image) => (
                                    <CarouselItems key={image.id} img={image.img} alt={image.alt} />
                                ))}
                            </Carousel>
                        </div>
                        <div className="flex items-center justify-center 2xl:w-1/2 h-screen-76 opacity-100  z-10">
                            <p className="text-4xl 2xl:text-7xl opacity-100 text-center ">
                                Waffles Únicos! <br />
                                Crea, <br />
                                Combina, <br />
                                Disfruta.
                            </p>
                        </div>
                    </section>
                    <section className="flex 2xl:flex-row flex-col-reverse w-full h-screen items-center justify-center">
                        <div className="flex flex-col items-center justify-around w-full 2xl:w-1/2 h-1/2 2xl:h-full opacity-95">
                            <div className="flex items-center justify-center w-full h-1/4">
                            <p className="text-2xl 2xl:text-6xl opacity-100 text-center">
                                Los Waffles mas destacados!!
                            </p>
                            </div>
                            <div className=" w-full h-3/4 rounded-3xl 2xl:px-20 2xl:pb-20">
                            <Carousel loop={true}>
                                {imagesIg.map((image) => (
                                    <CarouselItems key={image.id} img={image.img} alt={image.alt} />
                                ))}
                            </Carousel>
                            </div>

                        </div>
                        <div className="flex items-center justify-center w-full 2xl:w-1/2 h-full  2xl:px-10 bg-guafleSecondary z-10">
                            
                            <Carousel loop={true} className="2xl:w-700 rounded-3xl 2xl:h-fit">
                                {menuImages.map((image) => (
                                    <CarouselItems key={image.id} img={image.img} alt={image.alt} />
                                ))}
                            </Carousel>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )

}