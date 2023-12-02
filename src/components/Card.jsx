import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
  } from "@material-tailwind/react";

   
  export function EcommerceCard() {
    return (
      <Card className="w-fit h-56">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
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