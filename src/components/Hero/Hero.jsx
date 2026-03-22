import React from 'react';
const Hero = () => {
    return (
        <div className='px-6 md:px-20 my-6 md:my-20 flex items-center justify-center gap-6 text-white'>
            <div className='h-44 md:h-62.5 w-100 md:w-175 flex flex-col items-center justify-center  rounded-xl  bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-none shadow-sm transition'>
                <h1 className='text-[18px] md:text-2xl'>In-Progress</h1>
                <h1 className='text-3xl md:text-7xl font-semibold'>0</h1>
            </div>
            <div className='h-44 md:h-62.5 w-100 md:w-175  flex flex-col items-center justify-center  rounded-xl bg-linear-to-br from-[#54CF68] to-[#00827A] border-none shadow-sm transition'>
                <h1 className='text-[18px] md:text-2xl'>Resolved</h1>
                <img src="" alt="" />
                <h1 className='text-3xl md:text-7xl font-semibold'>0</h1>
            </div>
        </div>
    );
};

export default Hero;