import React from 'react';
import { Button } from './ui/button';
const Services = () => {
    const services = [
        { name: 'Mental Health', src: '/assets/icon1.png' },
        { name: 'Vaccination', src: '/assets/icon2.png' },
        { name: 'Eye Disease', src: '/assets/icon3.png' },
        { name: 'Cardiology', src: '/assets/icon4.png' },
        { name: 'General Health', src: '/assets/icon5.png' }
    ]
    return (
        <div className=' w-full h-[600px] '>
            <div className=' w-full flex items-center justify-center flex-col gap-4 pt-20'>
                <p className=' text-[#00A0AA]  font-semibold text-xl '>Services And Treatments</p>
                <h1 className=' text-[#081E29] font-bold text-5xl'>More than 40 specialty <br />
                    and health care services</h1>
            </div>
            <div className=' w-full flex items-center gap-20 justify-center mt-20'>
                {services.map((service) => {
                    return (
                        <div className=' flex  flex-col items-center justify-center gap-5' key={service.name}>
                            <div className=' bg-white rounded-lg p-[60px] flex items-center justify-center shadow-xl '>
                                <img src={service.src} alt="" />
                            </div>
                            <p className=' font-bold text-[#081E29] text-lg'>{service.name}</p>
                        </div>
                    )
                })}

            </div>
            <div className='w-full flex items-center justify-center mt-20 pb-20'>
                <Button>See All Services</Button>
            </div>

        </div>
    );
}

export default Services;
