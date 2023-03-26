import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"

const Header: FC = () => {
    return (
        <header
            className="inline-flex space-x-96 items-center justify-between  scrollbar-hide px-28 "
            style={{ width: 1440, height: 108 }}
        >
            <div className="inline-flex flex-col items-center justify-center py-2.5">
                <Link
                    href="/"
                    className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
                >
                    <Image
                        src="/img/logo-MCC.png"
                        alt="logo Mafia Code Community"
                        width={93}
                        height={108}
                    />
                </Link>
            </div>
            <div
                className="flex space-x-24 items-center justify-center"
                style={{ width: 543, height: 50 }}
            >
                <div className="flex space-x-12 items-start justify-start">
                    <p className="text-xl font-medium text-center text-gray-400">
                        Home
                    </p>
                    <p className="text-xl font-medium text-center text-gray-400">
                        Game
                    </p>
                    <p className="text-xl font-medium text-center text-gray-400">
                        Help
                    </p>
                </div>
                <button className="flex items-center justify-center w-44 px-11 py-2.5 bg-button-100 rounded-lg text-xl font-medium text-center text-white">
                    Sign in
                </button>
            </div>
        </header>
    )
}

export default Header
