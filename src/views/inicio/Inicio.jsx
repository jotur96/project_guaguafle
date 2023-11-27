import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Layout } from "../../components/Layout"
import { Link } from "react-router-dom";


export const Inicio = () => {
    return (
        <Layout>
            <div className="w-full h-full flex flex-col items-center py-20 z-0">
                <div className="flex flex-col items-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50">
                    <CarouselWithContent />
                </div>
                <div className="flex flex-col items-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50">
                    <h1>VIENEN DE FRANCIA</h1>
                        <br />
                    <h1>PARECEN DE ESTADOS UNIDOS</h1>
                        <br />  
                    <h1>CON RECETA DE NEUQUÉN</h1>
                        <br />
                    <h1>HECHAS EN ASUNCIÓN</h1>
                </div>
                <div className="flex flex-row items-center justify-center xl:w-full xl:h-screen-50 bg-deep-orange-200 gap-44">
                    <div className="flex-col items-center justify-center w-48 h-56 bg-blue-gray-400">producto 1</div>
                    <div className="flex-col items-center justify-center w-48 h-56 bg-blue-gray-400">producto 2</div>
                    <div className="flex-col items-center justify-center w-48 h-56 bg-blue-gray-400">producto 3</div>
                </div>
                <div className="flex flex-row justify-center xl:w-full xl:h-20 bg-deep-orange-200">
                  <Link to="/menu">
                    <Button>Nuestro menú</Button>
                  </Link>
                </div>
                <div className="flex flex-col items-center justify-center xl:w-1/2 2xl:w-fit xl:h-screen-50">
                    <h1>¡Una forma diferente y divertida de comer waffles!</h1>
                        <br />
                    <h1>Encontranos en Teniente Vera esquina Denis Roa</h1>
                        <br />  
                    <h1>Lunes a Domingos - 12:00 a 20:00</h1>
                </div>
            </div>
        </Layout>
    )
}

 
const CarouselWithContent = () => {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-deep-orange-300/25">
          <div className="w-3/4 text-center md:w-2/4 text-white">
              Sabores de cada rincón del mundo
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-deep-orange-300/25">
          <div className="w-3/4 text-center md:w-2/4 text-white">
              Sabores de cada rincón del mundo
            {/* <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography> */}
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </Carousel>
  );
}