
import { CardTemaplte, CardTemplateTwo, GridBox, HeadingStyle, Paragraph, TitleStyle } from '@/components/core'
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

    const carddata2 = [
        {
            image: {
                url: "/images/icon/Vector (1).png",
                width: 53,
                height: 32,
                alt: "Dedicated Customer Relationship Manager"
            },
            label: "Dedicated Customer Relationship Manager",
            strongtext: "Customer"
        },
        {
            image: {
                url: "/images/icon/Vector (2).png",
                width: 53,
                height: 32,
                alt: "Seamless Access to Society Amenities"
            },
            label: "Seamless Access to Society Amenities",
            strongtext: "Seamless Access"
        },
        {
            image: {
                url: "/images/icon/Vector (3).png",
                width: 53,
                height: 32,
                alt: "Room Customization & Furniture Rentals"
            },
            label: "Room Customization & Furniture Rentals",
            strongtext: "Customization"
        },
        {
            image: {
                url: "/images/icon/Vector (4).png",
                width: 53,
                height: 32,
                alt: "App Enabled One-Stop Tenancy Management"
            },
            label: "App Enabled One-Stop Tenancy Management",
            strongtext: "Tenancy"
        },
        {
            image: {
                url: "/images/icon/Vector (5).png",
                width: 53,
                height: 32,
                alt: "Trusted Housekeeping Service Managed by XU Lifestyle"
            },
            label: "Trusted Housekeeping Service Managed by XU Lifestyle",
            strongtext: "Housekeeping"
        },
    ]

    return (
        <div className='relative'>
            <div className='absolute right-0 top-[137px]'>
                <Image src="/images/Vector-righ.png" width={1104} height={508} alt='Vector' />
            </div>
            <div className='absolute left-0 top-[32%] z-[-2] w-[37%]'>
                <Image src="/images/Ellipse.png" width={1104} height={508} alt='Vector ' />
            </div>
            <div className='mt-[50px]'>
            <div className='container '>
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
                <GridBox columns={3} gap={7} className='mt-[170px] items-center'>
                    <GridBox.GridItem columnMerge={1} className='space-y-[16px]'>
                        <h2 className='text-[40px] font-semibold leading-[40px] text-left '>We have <span className='borel-regular text-[42px] font-normal text-[#9975FE]'>got your</span> back!</h2>
                        <p className='text-xl font-normal leading-[24.2px] text-[#2E2E2E]'>Making your life a breeze with our <strong>Assistance.</strong></p>
                    </GridBox.GridItem>
                    {carddata2.map((item, index) => (
                        <GridBox.GridItem columnMerge={1} className='space-y-[16px]' key={index}>
                            <CardTemplateTwo image={item.image} label={item.label} strongtext={item.strongtext} />
                        </GridBox.GridItem>
                    ))}
                </GridBox>
            </div>
            </div>
        </div>
    )
}
