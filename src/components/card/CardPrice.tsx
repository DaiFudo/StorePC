import {FC} from "react";

export interface CardPrice {
    price?: number;
}

export const CardPrice: FC<CardPrice> = ({ price }) => {
    return price && price > 0 && price < 9999 && (
        <div className='flex flex-col text-white'>
      <span className='text-xl font-black'>
        From <span className='text-green-500 font-mono'>${price}</span>
      </span>
            <span className='text-xs font-normal text-gray-400'>
        <span className='text-green-500 font-mono'>${Math.round(price / 36)}</span> per month
      </span>
        </div>
    );
};