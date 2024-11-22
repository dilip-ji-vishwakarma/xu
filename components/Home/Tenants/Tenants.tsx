
import { CardTemaplte, HeadingStyle, Paragraph, TitleStyle } from '@/components/core'
import Image from 'next/image'
import React from 'react'

export const Tenants = () => {

    const carddata = [
        {
            image: {
                url: "/images/Tenants/Premium location.png",
                width: 171,
                height: 170,
                alt: "Premium Locations"
            },
            label: "Premium Locations"
        },
        {
            image: {
                url: "/images/Tenants/likeminded-flatmate.png",
                width: 171,
                height: 170,
                alt: "Like minded People"
            },
            label: "Like minded People"
        },
        {
            image: {
                url: "/images/Tenants/Savings-pana.png",
                width: 171,
                height: 170,
                alt: "Comfort made Affordable"
            },
            label: "Comfort made Affordable"
        }
    ]

    return (
        <div className='relative'>
            <div className='absolute right-0 top-[137px]'>
                <Image src="/images/Vector-righ.png" width={1104} height={508} alt='Vector' />
            </div>
            <div className='absolute left-0 top-[68%] z-[-2] w-[30%]'>
                <Image src="/images/Ellipse.png" width={1104} height={508} alt='Vector ' />
            </div>
        <div className='container'>
            <div className='space-y-3'>
                <HeadingStyle><span className='borel-regular'>Hey</span> Tenants</HeadingStyle>
                <Paragraph className='text-[#2E2E2E]'>{`It’s time to Elevate Your Living with Our Tailored Solutions!`}</Paragraph>
                <TitleStyle className='text-center josefin-sans'>{`What’s in it for you?`}</TitleStyle>
            </div>
            <div className='md:flex md:justify-between items-center pt-[100px]'>
                {carddata.map((item, index) => (
                    <CardTemaplte key={index} image={item.image} label={item.label} />
                ))}
            </div>
            <div className='dilip'>
                <h2>We have <span className='josefin-sans'>got your</span> back!</h2>
            </div>
        </div>
        </div>
    )
}
