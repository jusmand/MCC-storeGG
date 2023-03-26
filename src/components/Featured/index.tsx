import type { FC } from "react"

const Featured: FC = () => {
    return (
        <section
            className="featured placeholder:inline-flex space-x-96 items-center w-full mt-28 h-215 justify-center  pr-36"
            style={{ backgroundImage: "url(/img/featured-bckgrnd.png)" }}
        ></section>
    )
}

export default Featured
