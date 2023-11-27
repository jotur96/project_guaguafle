import { Children } from "react"


export const Layout = ( {children} ) => {
    return (
        <div className="flex justify-center bg-guafleSecondary h-full w-full pt-40 2xl:pt-28">
            {children}
        </div>
    )
}