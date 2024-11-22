import Image from 'next/image';
import React from 'react';

type CardTemplateTwoProps = {
    image: {
        url: string;
        width: number;
        height: number;
        alt: string;
    },
    label: string;
    strongtext: string;
};

export const CardTemplateTwo = ({ image, label, strongtext }: CardTemplateTwoProps) => {
    const highlightText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <strong key={index}>{part}</strong>
            ) : (
                part
            )
        );
    };

    return (
        <div className="border border-solid border-[#DCDCDC] blur-overlay py-[33px] px-[39px] rounded-[24px] space-y-[50px]">
            <Image src={image.url} width={image.width} height={image.height} alt={image.alt} className='w-[53px] h-8 object-contain'/>
            <p className='text-[#1C1C1C] text-xl leading-[28px] text-left'>{highlightText(label, strongtext)}</p>
        </div>
    );
};
