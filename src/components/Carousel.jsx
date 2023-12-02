import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../assets/images/img/guaguafle.png";
 
export function CarouselWithContent() {

    const CarouselItems = ({ img, alt }) => {
        return <img src={img} alt={alt} className="h-full w-full object-cover"></img>
    }

    const images = [
        {
            id: 1,
            img: img1,
            alt: "Elegí tu masa"
        }
    ]

  return (
    <div className="xl:h-screen-76 md:h-screen-60 lg:h-screen-60 sm:h-60 w-auto flex items-center bg-guaflePink m-0">
        <Carousel loop={true} autoplay={true} autoplayDelay={5000} className="">
            {images.map((image) => (
                <CarouselItems key={image.id} img={image.img} alt={image.alt} />
            ))}
        </Carousel>
     </div>
  );
}