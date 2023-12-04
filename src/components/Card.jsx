import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
  } from "@material-tailwind/react";

   
  export function EcommerceCard({image, className}) {
    return (
      <Card className="w-auto h-96 sm-h lg:h-80 hover:scale-[1.01] focus:scale-[1.01] bg-white">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
            alt="card-image"
            className={className}
          />
        </CardHeader>
        {/* <CardBody>
          <h1
            color="gray"
            className="font-normal opacity-75"
          >
            Waffle con helado de esto y aquello
          </h1>
        </CardBody> */}
        <CardFooter className="pt-0 h-0 my-0">{/* 
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            PedidosYa!
          </Button> */}
        </CardFooter>
      </Card>
    );
  }


export function HorizontalCard({image, title, txt}) {
    return (
      <Card className="w-auto max-w-[48rem] flex-row h-screen-50">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <h1 className="mb-2 text-xl text-left font-semibold p-1 flex-col">
            {title}
          </h1>
          <p className="text-md text-left p-1 flex-col">
            {txt}
          </p>
        </CardBody>
      </Card>
    );
  }