import { Carousel, Typography, Button } from "@material-tailwind/react";

 
export function CarouselWithContent({images}) {

    const CarouselItems = ({ img, alt }) => {
        return <img src={img} alt={alt} className="h-full w-full object-cover bg-deep-orange-100"></img>
    }



  return (
        <Carousel loop={true} autoplay={true} autoplayDelay={5000} className="lg:rounded-xl">
            {images.map((image) => (
                <CarouselItems key={image.id} img={image.img} alt={image.alt} />
            ))}
        </Carousel>
  );
}