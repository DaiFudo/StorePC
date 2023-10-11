import {FC} from "react";
import {colorClasses} from "@/constants/constants";
import { CardImage } from "@/components/card/CardImage";
import { CardInfo } from "@/components/card/CardInfo";
import { CardPrice } from "@/components/card/CardPrice";
import { CardComponentsPC } from "@/components/card/CardComponentsPC";
import { gpuSvg } from "@/svg/gpuSvg.js";

export type PopLvl = 'red' | 'green' | 'white' | 'gray' | 'yellow';

export interface Card extends aboutProduct, CardImage {
    color: PopLvl;
    background: PopLvl;
}

export interface aboutProduct extends CardInfo, CardPrice{
    price?: number;
}

export const Card: FC<Card> = ({
                                   variablesCount = 15,
                                   characterTitle,
                                   characterDescription,
                                   price,
                                   background = 'gray',
                                   action = 'gray',
                                   image
                               }) => {
    const backgroundColor = colorClasses[background];

    return (
        <div className={`w-96 h-auto p-5 rounded-md  bg-primary-gray d-flex justify-items-center ${backgroundColor} transition-transform transform-gpu hover:scale-105 cursor-pointer`}>
            <CardImage
                variablesCount={variablesCount}
                action={action}
                image={image}
            />

        <div className='flex justify-between py-1'>
                <CardInfo
                    characterTitle={characterTitle}
                    characterDescription={characterDescription}
                />

                <CardPrice
                    price={price}
                />

        </div>
            <div style={{margin: '10px auto', height: '1px', background: 'gray', width: '100%'}}></div>
            <CardComponentsPC
                svg={gpuSvg}
                description='NVIDIA GeForce RTX 4070 / 4080 / 4090'
            />
        </div>
    );
};