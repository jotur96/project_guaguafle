import { Children } from "react"


export const Layout = ( {children} ) => {
    return (
        <div className="flex justify-center bg-guafleSecondary text-guafleDark h-full w-full pt-20 xl:pt-24">
            {children}
        </div>
    )
}