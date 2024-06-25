import React from 'react';
import Contactform from './contactform';
const Contactus = () => {
    return (
        <div className=' w-full h-fit py-20 px-5 flex bg-[#D4FFFC] items-center justify-center gap-40 bp-1024:gap-0 bp-1024:justify-between  bp-898:flex-col'>
            <div className='pr-2'>
                <h1 className=' text-lg  font-semibold text-[#00A0AA] mb-10'>Appointment</h1>
                <h1 className=' text-4xl font-bold text-[#081E29] mb-5'>Get in touch to book <br />
                    your first appointment</h1>
                <p className='  text-lg font-normal'>Far far away, behind the word mountains, far from the <br />
                    countries Vokalia and Consonantia.</p>
                <div className=' flex flex-col items-start justify-center gap-3 mt-8'>
                    <div className=' flex items-start justify-center gap-2'>
                        <img src="assets/phoneiconfilled.png" alt="" srcset="" />
                        <p className='  text-md font-semibold'>(123) 456 -7890</p>

                    </div>
                    <div className=' flex items-start justify-center gap-2'>
                        <img src="assets/mailiconfilled.png" alt="" srcset="" />
                        <p className='  text-md font-semibold'>(123) 456 -7890</p>

                    </div>
                </div>
            </div>
            <div className=' bp-898:mt-20'>
                <Contactform />

            </div>
        </div>
    );
}

export default Contactus;
