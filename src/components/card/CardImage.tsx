import Image from 'next/image'
import { FC } from "react";
import {colorClasses} from "@/constants/constants";


export interface CardImage {
    variablesCount: number;
    image: string;
}

export const CardImage:FC<CardImage> = ({
                                            action = 'gray',
                                            image,
                                            variablesCount = 15,
                                        }) => {

    const actionColor = colorClasses[action];
    return(
        <div className='relative'>
            <div className={`absolute top-0 w-auto h-8 ml-2 mt-2 rounded-md border-2 text-white ${actionColor}`}>
                <span className='text-sm px-2'>{`Options: ${variablesCount}`}</span>
            </div>
            <Image className='mx-auto w-auto h-auto rounded-md border-transparent' src={image}/>
        </div>
    )
}