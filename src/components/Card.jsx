import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
  } from "@material-tailwind/react";

   
  export function EcommerceCard({image}) {
    return (
      <Card className="w-fit h-56">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        {/* <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <h1 color="blue-gray" className="font-medium">
              Waffle
            </h1>
            <h1 color="blue-gray" className="font-medium">
              $95.00
            </h1>
          </div>
          <h1
            color="gray"
            className="font-normal opacity-75"
          >
            Waffle con helado de esto y aquello
          </h1>
        </CardBody> */}
        <CardFooter className="pt-0">{/* 
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