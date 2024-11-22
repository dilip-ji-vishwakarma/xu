
import { Heading } from '@/components/core'
import React from 'react'

export const Presence = () => {
    return (
        <div className='md:container'>
            <div className='md:space-y-[60px] space-y-[30px] md:py-[60px] py-[42px]'>
                <Heading className='text-[var(--text)] uppercase'>OUR PRESENCE</Heading>
                <div className='md:h-[282px] py-[50px] bg-cover bg-center bg-no-repeat flex items-center justify-center' style={{ backgroundImage: "url(/images/vector.png)" }}>
                    <span className='text-[var(--text)] md:text-xl text-sm font-semibold leading-[29.26px] tracking-[0.94em] uppercase'>Bangalore</span>
                </div>
            </div>
        </div>
    )
}
