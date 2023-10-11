import { FC, ReactNode } from "react";

export interface CardComponentsPC {
    svg: ReactNode;
    description: string;
}

export const CardComponentsPC:FC<CardComponentsPC> = ({svg, description}) => {
  return(
      <ul className='py-1'>
          <li className='flex items-center'>
              <span>
               {svg()}
              </span>
              <span className='pl-2 text-sm'>
                {description}
              </span>
          </li>
      </ul>
  )
}