import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
const Doctorscard = ({ name, img, type, exp, detail }) => {
    return (
        <div className=' flex flex-col items-start w-[300px] '>
            <img src={img} alt="" srcset="" />
            <div className=' w-full '>
                <h1 className=' text-2xl font-bold mt-5'>{name} </h1>
                <div className=' flex items-center justify-between w-full mt-2'>
                    <h1 className=' text-[15px] font-medium'>{type}</h1>
                    <Badge>{exp}</Badge>

                </div>
                <h1 className=' text-sm mt-3 '>{detail}</h1>
                <div className='mt-5'>
                    <Button>Appointment</Button>
                </div>
            </div>

        </div>
    );
}

export default Doctorscard;
