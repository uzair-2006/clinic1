import React from 'react';
import { Button } from './ui/button';
import Herobox from './herobox';
const Hero = ({ buttonText, heading, subHeading, subheading2 }) => {
    return (
        <div className='w-full h-[87vh] flex items-end justify-evenly  bp-968:flex-col bp-968:items-center bp-968:mt-[170px] bp-968:h-fit  '>
            <div className=' flex flex-col justify-center  items-start pb-[150px] w-[500px] bp-968:pb-[100px] bp-552:px-3 bp-552:w-full bp-552:pl-8  '>
                <p className='  font-bold  text-lg text-[#00A0AA] mb-4'>{heading}</p>
                <h1 className=' text-[#081E29]   text-6xl font-bold leading-[67px] mb-[60px] bp-1298:text-4xl bp-1298:mb-[30px] bp-968:text-6xl bp-552:text-4xl '>{subHeading}</h1>
                <div>
                    <p className=' pb-10  text-sm  font-medium'>{subheading2}</p>
                    <Button>{buttonText}</Button>

                </div>


            </div>

            <div className=' z-auto relative bp-552:w-full bp-552:flex bp-552:items-center bp-552:justify-center'>
                <img src='/assets/background.png' className=' z-10 relative pl-5 bp-1298:h-[600px] bp-1298:pl-0' />
                <Herobox />

            </div>

        </div>
    );
}

export default Hero;
