import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export function CarouselWithContent() {

    const CarouselItems = ({ img, alt }) => {
        return <img src={img} alt={alt} className="h-full w-full object-cover"></img>
    }

    const images = [
        {
            id: 1,
            img: "https://scontent.fasu11-1.fna.fbcdn.net/v/t39.30808-6/326163101_400058138990872_3448990309395903189_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=grASwb4LK6AAX8TwT_L&_nc_ht=scontent.fasu11-1.fna&oh=00_AfBi3daRkFd17dUgtnV5U8lSy77gCAk9PWVW8ZuWQkHJHg&oe=656CAB84",
            alt: "Elegí tu masa"
        }
    ]

  return (
    <div className="xl:h-screen-76 w-3/4 flex items-center bg-guaflePink m-0">
        <Carousel loop={true} autoplay={true} autoplayDelay={5000} className="">
            {images.map((image) => (
                <CarouselItems key={image.id} img={image.img} alt={image.alt} />
            ))}
        </Carousel>
     </div>
  );
}