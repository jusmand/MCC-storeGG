import Head from "next/head"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Timeline from "../components/TImeline"

export default function Home() {
    return (
        <>
            <Head>
                <title>MCC-StoreGG</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <HeroSection />
            <Timeline />
        </>
    )
}