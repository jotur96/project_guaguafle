import { Layout } from "../../components/Layout";
import { EcommerceCard } from "../../components/Card";
import { HorizontalCard } from "../../components/Card";
import { Button } from "@material-tailwind/react";

import img1 from "../../assets/images/menu-images/elegi-tu-masa-guafle.jpg"
import img2 from "../../assets/images/menu-images/elegi-tus-sabores.jpg"
import img3 from "../../assets/images/menu-images/elegi-tus-toppings.jpg"
import salado1 from "../../assets/images/menu-images/butifarra.jpg"
import salado2 from "../../assets/images/menu-images/capresse.jpg"
import salado3 from "../../assets/images/menu-images/pollo.jpg"
import destacado1 from "../../assets/images/menu-images/rocklets.jpg"
import destacado2 from "../../assets/images/menu-images/rosa.jpg"
import destacado3 from "../../assets/images/menu-images/ddl.jpg"
import destacado4 from "../../assets/images/menu-images/frutilla.jpg"



export const Menu = () => {

    //menu fix    
    const MenuDesc = ({ item, precio, desc }) => {
        return <div className="items-center w-full flex-col">
            <div className="flex items-center w-full flex-row justify-between">
                <p className="text-xl sm:text-sm text-left font-semibold py-2 flex-col">{item}</p>
                <p className="text-xl sm:text-sm text-right font-semibold py-2 flex-col">{precio}</p>
            </div>
            <p className="text-sm text-left py-2 flex-col">{desc}</p>
        </div>
    }




    return (
        <Layout>
            <div className="w-full h-full flex flex-col justify-center items-center z-0 py-10">

                <div className="flex flex-row items-center justify-center w-full h-fit">
                    <p className="regals text-4xl text-center py-3">¡Armá tu propio waffle!</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-center w-full xl:h-fit
                sm:gap-6 xl:gap-16 lg:px-16 sm:w-11/12 my-5">

                    <div className="items-center justify-center xl:w-1/3 h-fit sm:py-5">
                        <EcommerceCard className="h-full w-full object-cover" image={img1}></EcommerceCard>
                        <p className="text-2xl text-center regals py-4">Masas</p>
                        <MenuDesc item={"Básica - Grande"} precio={"Gs. 30.000"}></MenuDesc>
                        <MenuDesc item={"Básica - Chica"} precio={"Gs. 25.000"}></MenuDesc>
                        <MenuDesc item={"Chips de Chocolate - Grande"} precio={"Gs. 32.000"}></MenuDesc>
                        <MenuDesc item={"Chips de Chocolate - Chica"} precio={"Gs. 27.000"}></MenuDesc>
                    </div>

                    <div className="items-center justify-center xl:w-1/3 h-fit sm:py-5">
                        <EcommerceCard className="h-full w-full object-cover" image={img2}></EcommerceCard>
                        <p className="text-2xl text-center regals py-4">Sabores de helado</p>
                        <MenuDesc item={"Chocolate"}></MenuDesc>
                        <MenuDesc item={"Dulce de leche"}></MenuDesc>
                        <MenuDesc item={"Americana"}></MenuDesc>
                        <MenuDesc item={"Frutilla"}></MenuDesc>
                    </div>

                    <div className="items-center justify-center xl:w-1/3 h-fit sm:py-5">
                        <EcommerceCard className="h-full w-full object-cover" image={img3}></EcommerceCard>
                        <p className="text-2xl text-center regals py-4">Toppings</p>
                        <MenuDesc item={"Oreos"}></MenuDesc>
                        <MenuDesc item={"Rocklets"}></MenuDesc>
                        <MenuDesc item={"Frutas y granolas"}></MenuDesc>
                        <MenuDesc item={"Chocolates (negros o blancos)"}></MenuDesc>
                        <p className="text-sm text-center py-2 font-semibold">Consultá por nuevas opciones</p>
                    </div>

                </div>

                <div className="bg-deep-orange-100 lg:gap-5 flex flex-col w-full h-fit justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center w-full xl:h-fit
                        sm:gap-6 xl:gap-16 lg:px-16 sm:w-11/12 py-5">
                        <p className="regals text-4xl text-center py-2 pt-10 sm:px-5">¡Probá nuestras opciones saladas!</p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center w-full xl:h-fit
                        sm:gap-6 xl:gap-16 lg:px-16 sm:w-11/12 my-5">

                        <div className="items-center justify-center xl:w-1/3 h-fit sm:py-5">
                            <EcommerceCard className="h-full w-full object-cover" image={salado1}></EcommerceCard>
                        </div>

                        <div className="items-center justify-center xl:w-1/3 h-fit sm:py-5">
                            <EcommerceCard className="h-full w-full object-cover" image={salado2}></EcommerceCard>
                        </div>

                        <div className="items-center justify-center xl:w-1/3 h-fit sm:py-5">
                            <EcommerceCard className="h-full w-full object-cover" image={salado3}></EcommerceCard>
                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row justify-center w-full xl:h-fit
                    sm:gap-10 xl:gap-20 xl:px-20 sm:w-11/12 py-5 bg-deep-orange-100">

                        <div className="items-center justify-center xl:w-1/2 h-fit sm:py-5 xl:px-10 bg-deep-orange-100">
                            <MenuDesc item={"Guafle Caprese"} precio={"Gs. 30.000"} desc={"Muzzarella, tomates"}></MenuDesc>
                            <MenuDesc item={"Guafle con Omelette, jamón y queso"} precio={"Gs. 30.000"} desc={"Omelettes, jamón, queso catupiry"}></MenuDesc>
                            <MenuDesc item={"Guafle Butifarra con Salsa de Ajo"} precio={"Gs. 30.000"} desc={"Butifarra, salsa de ajo"}></MenuDesc>
                            <MenuDesc item={"Guafle con Pollo y Queso Catupiry"} precio={"Gs. 30.000"} desc={"Pollo, queso catupiry"}></MenuDesc>
                            <MenuDesc item={"Guafle con Pancho, Papitas y Aderezos"} precio={"Gs. 30.000"} desc={"Salsa de tomate, pancho, papitas"}></MenuDesc>
                            <br />
                            <MenuDesc item={"Salsa adicional"} precio={"Gs. 2.000"} desc={"Ajo picante, ketchup, mayonesa, mostaza, chimichurri, salsa de ajo de la casa"}></MenuDesc>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row items-center justify-center w-full h-fit">
                    <p className="regals text-4xl text-center py-2 pt-10">Destacados</p>
                </div>

                <div className="flex flex-col justify-center items-center w-full xl:h-fit
                    sm:gap-20 xl:gap-20 sm:w-11/12 xl:px-20 my-5">
                    <HorizontalCard image={destacado1}
                        title={"Waffle con helado de chocolate"}
                        txt={"Masa crocante y calentita rellena de helado de chocolate acompañado con rocklets."}>
                    </HorizontalCard>
                    <HorizontalCard image={destacado2}
                        title={"Waffle con helado de frutilla"}
                        txt={"Guafle calentito y crocante con un relleno de helado de frutilla y marshmallow con una cobertura a elección."}>
                    </HorizontalCard><HorizontalCard image={destacado3}
                        title={"Waffle con helado de dulce de leche"}
                        txt={"Masa dulce extra crocante con relleno de un delicioso helado cremoso de dulce de leche."}>
                    </HorizontalCard><HorizontalCard image={destacado4}
                        title={"Waffle con helado de crema americana"}
                        txt={"Waffle relleno de helado de crema americana con frutillas y un toque de granola por encima."}>
                    </HorizontalCard>
                </div>

            </div>
        </Layout>
        // <Layout>
        //     <div className="h-full w-full">
        //         <img className="fixed w-full h-full object-cover opacity-40 z-0" src={background} alt="Background" />
        //         <section className="flex 2xl:flex-row h-screen-50 w-full">
        //             <div className="bg-orange-600 h-full w-full">
        //                 <h1>Section 1.1</h1>
        //             </div>
        //             <div className="bg-green-800 h-full w-full">
        //                 <h1>Section 1.2</h1>
        //             </div>
        //         </section>
        //         <section className="flex 2xl:flex-row h-screen w-full">
        //             <div className="bg-red-700 h-full w-full">
        //                 <h1>Section 2.1</h1>

        //             </div>
        //             <div className="flex items-center justify-center bg-guafleSecondary-full w-full opacity-95 z-10">

        //                 <Carousel loop={true} className="rounded-3xl py-20">
        //                     {menuImages.map((image) => (
        //                         <CarouselItems key={image.id} img={image.img} alt={image.alt} />
        //                     ))}
        //                 </Carousel>
        //             </div>
        //         </section>
        //     </div>
        // </Layout>
    )

}