import Image from 'next/image';
import React from 'react'
import { Paragraph } from '../Paragraph';

type CardTemaplteProps = {
    image: {
        url: string;
        width: number;
        height: number;
        alt: string;
    },
    label: string;
}

export const CardTemaplte = ({image, label}: CardTemaplteProps) => {
  return (
    <div className='space-y-[35px]'>
        <Image src={image.url} width={image.width} height={image.height} alt={image.alt} className='m-auto'/>
        <Paragraph className='md:text-xl font-medium leading-[27px] text-[#2E2E2E] text-center'>{label}</Paragraph>
    </div>
  )
}
