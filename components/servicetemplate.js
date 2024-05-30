import React from 'react';
import { Button } from './ui/button';
const Servicetemplate = ({ mainsrc, logosrc, mainheading, subheading, templatedata }) => {
    const data = [
        { name: templatedata[0] },
        { name: templatedata[1] },
        { name: templatedata[2] },
    ]
    return (
        <div className=' w-full flex items-center justify-center gap-20 bp-1024:justify-between bp-1024:gap-0 bp-1024:px-4 bp-898:flex-col
         bp-898:mt-20 '>
            <div>
                <img src={mainsrc} alt="" />
            </div>
            <div className=' flex  flex-col w-[400px]  items-start justify-normal bp-898:mt-20'>
                <img src={logosrc} alt="" srcset="" />
                <h1 className=' text-3xl font-bold mt-10 text-[#081E29]'>{mainheading}</h1>
                <p className=' text-[#081E29] mt-5  text-md font-medium'>{subheading}</p>
                <div className=' flex mt-10 mb-10 flex-col items-start justify-center gap-5'>
                    {
                        data.map((data) => {
                            return (
                                <div key={data.name} className=' flex  items-center justify-start gap-2'>
                                    <img src="assets/tickiconblack.png" alt="" />
                                    <p className=' text-sm  font-semibold'>{data.name}</p>
                                </div>
                            )
                        })
                    }

                </div>
                <Button>Take An Appointment</Button>
            </div>

        </div>
    );
}

export default Servicetemplate;
