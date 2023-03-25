import type { FC } from "react"

const HeroSection: FC = () => {
    return (
        <section
            id="hero"
            className="hero-section items-center mt-32 h-85 flex justify-center"
            style={{ width: 1440, height: 337 }}
        >
            <div className="hero-section-left">
                <div className="inline-flex flex-col space-y-6 w-125 h-85 w-125 items-start justify-end">
                    <p className="text-xl font-semibold text-gray-400">
                        Halo gamers,
                    </p>
                    <p className="text-5xl font-bold">
                        Topup & Get a New
                        <br />
                        Experience in Gaming
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
                    className="inline-flex space-x-8 items-end justify-end"
                    style={{ width: 690.35, height: 332.05 }}
                >
                    <div
                        className="relative"
                        style={{ width: 176.35, height: 187.14 }}
                    >
                        <img
                            className="w-44 h-48 absolute left-0 top-0 rounded-2xl"
                            src="https://via.placeholder.com/175.07432556152344x187.13800048828125"
                        />
                        <div className="inline-flex flex-col items-start justify-start w-16 h-9 px-2 py-1 absolute right-0 top-0 bg-gray-900 rounded-tr-2xl rounded-bl-2xl">
                            <div className="inline-flex space-x-0.5 items-center justify-center">
                                <img
                                    className="w-6 h-6 rounded-lg"
                                    src="https://via.placeholder.com/24x24"
                                />
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
                        <img
                            className="w-72 h-80 absolute left-0 top-0 border-2 rounded-2xl border-white"
                            src="https://via.placeholder.com/276.36993408203125x331.0265197753906"
                        />
                        <div className="inline-flex flex-col items-start justify-start w-20 h-10 px-2 py-1 absolute right-0 top-0 bg-gray-900 rounded-tr-2xl rounded-bl-2xl">
                            <div className="inline-flex space-x-0.5 items-center justify-center">
                                <img
                                    className="w-6 h-6 rounded-lg"
                                    src="https://via.placeholder.com/24x24"
                                />
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
                        <img
                            className="w-44 h-48 absolute left-0 top-0 rounded-2xl"
                            src="https://via.placeholder.com/175.07432556152344x187.13800048828125"
                        />
                        <div className="inline-flex flex-col items-start justify-start w-16 h-9 px-2 py-1 absolute right-0 top-0 bg-gray-900 rounded-tr-2xl rounded-bl-2xl">
                            <div className="inline-flex space-x-0.5 items-center justify-center">
                                <img
                                    className="w-6 h-6 rounded-lg"
                                    src="https://via.placeholder.com/24x24"
                                />
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
