import type { FC } from "react"
import Image from "next/image"

const HeroSection: FC = () => {
    return (
        <section
            id="hero"
            className="hero-section items-center mt-32 h-85 flex justify-center"
            style={{ width: 1440, height: 337 }}
        >
            <div className="hero-section-left">
                <div className="inline-flex flex-col space-y-6 w-125 h-85 items-start justify-end">
                    <p className="text-xl font-semibold text-gray-400">
                        Halo gamers,
                    </p>
                    <p className="text-5xl font-bold ">
                        Topup & Get
                        <span>
                            a New
                            <br />
                            Experience in Gaming
                        </span>
                    </p>
                    <p
                        className="text-xl font-semibold leading-loose text-gray-400"
                        style={{ width: 483 }}
                    >
                        Kami menyediakan jutaan cara untuk mem
                        <br />
                        bantu players menjadi pemenang sejati
                    </p>
                    <div className="w-48 h-12">
                        <div className="flex items-center justify-center flex-1 h-full px-5 pt-2.5 pb-3 bg-button-100 rounded-full">
                            <p className="flex-1 text-lg font-medium text-center text-white">
                                Get Started
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-section-right">
                <div
                    className="inline-flex space-x-8 justify-end items-center"
                    style={{ width: 690.35, height: 332.05 }}
                >
                    <div
                        className="relative"
                        style={{ width: 176.35, height: 187.14 }}
                    >
                        <div className="w-44 h-48 absolute left-0 top-0 rounded-2xl">
                            <Image
                                src="/img/hero-image-1.png"
                                alt="hero"
                                fill
                            />
                        </div>
                        <div className="inline-flex flex-col items-start justify-start w-16 h-9 px-2 py-1 absolute right-0 top-0 bg-gray-900 rounded-tr-2xl rounded-bl-2xl">
                            <div className="inline-flex space-x-0.5 items-center justify-center">
                                <div className="w-6 h-6 rounded-lg">
                                    <Image
                                        src="/img/icon-splash.png"
                                        alt="hero-image"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <p className="text-xl font-semibold text-white">
                                    0.5
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative"
                        style={{ width: 277.83, height: 332.05 }}
                    >
                        <div className="absolute left-0 top-0 border-2 rounded-2xl border-white">
                            <Image
                                src="/img/hero-image-2.png"
                                alt="hero section"
                                width={276.37}
                                height={331.03}
                            />
                        </div>

                        <div className="inline-flex flex-col items-start justify-start w-20 h-10 px-2 py-1 absolute right-0 top-0 bg-gray-900 rounded-tr-2xl rounded-bl-2xl">
                            <div className="inline-flex space-x-0.5 items-center justify-center">
                                <div className="w-6 h-6 rounded-lg">
                                    <Image
                                        src="/img/icon-splash.png"
                                        alt="hero-image"
                                        width={16}
                                        height={16}
                                    />
                                </div>

                                <p className="text-xl font-semibold text-white">
                                    0.7
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative"
                        style={{ width: 176.35, height: 187.14 }}
                    >
                        <div className="w-44 h-48 absolute left-0 top-0 rounded-2xl">
                            <Image
                                src="/img/hero-image-3.png"
                                alt="hero section"
                                fill
                            />
                        </div>
                        <div className="inline-flex flex-col items-start justify-start w-16 h-9 px-2 py-1 absolute right-0 top-0 bg-gray-900 rounded-tr-2xl rounded-bl-2xl">
                            <div className="inline-flex space-x-0.5 items-center justify-center">
                                <div className="w-6 h-6 rounded-lg">
                                    <Image
                                        src="/img/icon-splash.png"
                                        alt="hero-image"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <p className="text-xl font-semibold text-white">
                                    0.1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
