import {FC} from "react";

export interface CardInfo {
    characterTitle?: string;
    characterDescription?: string;
}

export const CardInfo:FC<CardInfo> = ({
                             characterTitle,
                             characterDescription
                         }) => {
    return (
        <div>
            <div className='flex flex-col text-white'>
                {characterTitle && (
                    <span className='text-xl font-black'>
                        {characterTitle}
                    </span>
                )}
                {characterDescription && (
                    <span className='text-xs font-normal text-gray-400'>
                       {characterDescription}
                    </span>
                )}
            </div>
        </div>)
}