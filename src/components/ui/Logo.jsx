import Image from 'next/image';
import React from 'react';


const Logo = () => {
    return (
        <div className='flex w-28 h-12 justify-around items-center san z-50'>
            <Image width={32} height={31} src='/lamp.svg' alt='logo'></Image>
            <p className='k2d-bold text-[31px] uppercase p-san'>san</p>
        </div>
    );
};

export default Logo;