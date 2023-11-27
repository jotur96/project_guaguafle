import { Layout } from "../../components/Layout";

import img1 from "../../assets/images/personaje1.png";
import img2 from "../../assets/images/personaje2.png";
import img3 from "../../assets/images/personaje3.png";

import background from "../../assets/images/img/chocolate.png"


export const Nosotros = () => {

    // const background = "https://scontent.cdninstagram.com/v/t39.30808-6/401503687_305085889049946_8132371084919703394_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=8gaCF4xCpy0AX_Mqtcs&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfDcqHzDWUyDIRDvVV2T0ykQG6HJmF2bj_5QO2-qPrJ6sQ&oe=6563ADC0&_nc_sid=10d13b"

    return (
        <Layout>
            <div className="relative h-full w-full ">
                <img className="fixed w-full h-full object-cover" src={background} alt="Background" />
                <section className="flex flex-col-reverse items-center justify-center h-full">
                    <div className="h-screen-50 w-full z-10">
                        <img className="w-full h-full object-contain" src={img1} alt="Background" />
                    </div>
                    <div className="flex flex-col  items-center h-fit w-fit bg-guafleSecondary z-10 px-20 md:px-24 xl:px-48 2xl:px-80 pb-10">
                        <h2 className="text-2xl md:text-5xl xl:text-6xl 2xl:text-8xl my-10 text-guafleOrange">Nuestra Historia</h2>
                        <p className="text-lg md:text-xl 2xl:text-3xl text-justify text-guafleOrange">
                            Esta es nuestra historia:
                            Nos gusta mucho movernos, ser un trotamundos girando
                            Venimos de todas partes, y en cada lugar descubrimos un sabor único
                            Un pequeño pedazo que nos conecta con recuerdos, personas, momentos
                            Y esa explosión de sabores, genera una mezcla atractiva, una cultura del buen gusto
                            Es lo lindo de ser nómada, tener sabores de todo el mundo
                            Guaguafles, sabores de cada rincón del mundo.
                        </p>
                    </div>
                </section>
                <section className="flex flex-col h-ful">
                    <div className="flex flex-col items-center h-fit w-full bg-guafleSecondary z-10 px-20 md:px-24 xl:px-48 2xl:px-80 pb-10">
                        <h2 className="text-2xl text-center md:text-5xl lg:text-6xl 3xl:text-8xl my-10  text-guafleOrange">El nombre ¿De dónde viene?</h2>
                        <p className="text-lg md:text-xl 2xl:text-3xl text-justify text-guafleOrange">
                            En algunos lugares, Guagua, o La Guagua, es un transporte móvil, una pequeña especie de
                            combi que te mueve a todos lados, su característica es esa, la de hacerte sentir que puedes
                            estar en varios lugares. También hay una relación con la niñez, los chicos pequeños, casi
                            onomatopéyico (que suena por lo que significa) escuchar un “Guá, guá” sintiendo que
                            alguien arranca a llorar, todo lo que tienen una linda infancia. Y un plus que encontramos: el
                            GUAraní. El idioma que nos conecta a nuestra tierra, que trasciende y emociona.
                        </p>
                    </div>
                    <div className="h-screen-50 w-full z-10 mb-70">
                        <img className="w-full h-full object-contain opacity-100" src={img3} alt="Background" />
                    </div>
                </section>
            </div>


        </Layout>
    )
}