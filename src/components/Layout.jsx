import { Children } from "react"


export const Layout = ( {children} ) => {
    return (
        <div className="flex justify-center">
            {children}
        </div>
    )
}