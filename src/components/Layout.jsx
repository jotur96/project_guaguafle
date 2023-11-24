import { Children } from "react"


export const Layout = ( {children} ) => {
    return (
        <div className="flex justify-center bg-guafleSecondary h-full w-full md:mt-16 mt-32">
            {children}
        </div>
    )
}