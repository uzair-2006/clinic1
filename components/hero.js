import React from 'react';
import { Button } from './ui/button';
import Herobox from './herobox';
import Heroball from './heroball';
const Hero = () => {
    return (
        <div className='w-full h-[87vh] flex items-end justify-evenly  '>
            <div className=' flex flex-col justify-center items-start pb-[250px] w-[500px]  '>
                <p className='  font-bold  text-lg text-[#00A0AA] mb-4'>Welcome To Medpro Health Care</p>
                <h1 className=' text-[#081E29] text-6xl font-bold leading-[67px] mb-[60px]'>The Hospital That Cares For Life And Humanity</h1>
                <div>
                    <Button>Discover More</Button>

                </div>
      

            </div>

            <div className=' z-auto'>
                <img src='/assets/doctor.png' className=' z-10 relative pl-5' />
                <Heroball className='z-0 ' />
            </div>

        </div>
    );
}

export default Hero;
