import Image from 'next/image'
import Header from "@/components/header/Header";
import {Carousel, Typography} from "antd";

import images from '../images'
import PCCardImg from "../images/PCCardImg.jpeg"

import {Card} from "@/components/card/Card";

export default function Home() {


    return (
        <main className="">
            <Header/>
            <section>
                <Carousel
                    autoplay
                >
                    {images.map(({title, description, img}) =>(
                        <div key={title}>
                            <Typography
                                className='absolute mt-48 text-white text-4xl indent-4'
                            >
                                {title}
                            </Typography>

                            <Typography
                                className='absolute mt-60 text-white text-xl indent-4'
                            >
                                {description}
                            </Typography>

                            <Image
                                src={img}
                                width={2560}
                                height={800}
                                alt="1"
                                quality={100}
                            />
                        </div>
                    ))}
                </Carousel>
            </section>

            <section>
                <Typography
                    className='w-3/4 text-center text-white text-4xl m-auto p-6'
                    >
                    We create computers that will be given to gamers
                    and creative professionals enjoy using it
                </Typography>
                <div className="grid justify-items-center grid-cols-3 grid-rows-3 gap-5">
                    <Card image={PCCardImg} variablesCount={5} characterTitle='Optimal' characterDescription='Balanced gaming PC' price={1000}/>
                    <Card image={PCCardImg} variablesCount={20} characterTitle='Power' characterDescription='Powered premium gaming PC' />
                    <Card image={PCCardImg}/>
                    <Card image={PCCardImg}/>
                    <Card image={PCCardImg}/>
                    <Card image={PCCardImg}/>
                </div>

            </section>
        </main>
    )
}
