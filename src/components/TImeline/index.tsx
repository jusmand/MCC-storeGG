import type { FC } from "react"

const Timeline: FC = () => {
    return (
        <section className="inline-flex flex-col space-y-8 mt-32 ml-20 items-center h-100 justify-center">
            <p className="text-3xl font-bold text-center">
                It’s Really That
                <br />
                Easy to Win the Game
            </p>
            <div
                className="inline-flex space-x-12 items-center justify-end"
                style={{ width: 1181, height: 274 }}
            >
                <div className="w-96 h-72">
                    <div className="inline-flex flex-col space-y-5 items-start justify-end flex-1 h-full py-8 pl-8 pr-20 bg-gray-400 bg-opacity-10 rounded-3xl">
                        <div
                            className="relative"
                            style={{ width: 80, height: 80 }}
                        >
                            <div className="w-20 h-20 bg-purple-200 rounded-full" />
                        </div>
                        <p className="text-xl font-semibold leading-loose text-white">
                            1. Start
                        </p>
                        <p className="text-xl font-semibold leading-loose text-gray-400">
                            Pilih salah satu game
                            <br />
                            yang ingin kamu top up
                        </p>
                    </div>
                </div>
                <div className="w-96 h-72">
                    <div className="inline-flex flex-col space-y-5 items-start justify-end flex-1 h-full py-8 pl-8 pr-20 bg-gray-400 bg-opacity-10 rounded-3xl">
                        <div
                            className="relative"
                            style={{ width: 80, height: 80 }}
                        >
                            <div className="w-20 h-20 bg-purple-200 rounded-full" />
                        </div>
                        <p className="text-xl font-semibold leading-loose text-white">
                            2. Fill Up
                        </p>
                        <p className="text-xl font-semibold leading-loose text-gray-400">
                            Top up sesuai dengan
                            <br />
                            nominal yang tersedia
                        </p>
                    </div>
                </div>
                <div className="w-96 h-72">
                    <div className="inline-flex flex-col space-y-5 items-start justify-end flex-1 h-full py-8 pl-8 pr-20 bg-gray-400 bg-opacity-10 rounded-3xl">
                        <div
                            className="relative"
                            style={{ width: 80, height: 80 }}
                        >
                            <div className="w-20 h-20 bg-purple-200 rounded-full" />
                        </div>
                        <p className="text-xl font-semibold leading-loose text-white">
                            3. Be a Winner
                        </p>
                        <p className="text-xl font-semibold leading-loose text-gray-400">
                            Siap digunakan untuk
                            <br />
                            improve permainan kamu
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
