import React from 'react';
import Qualitycard from './qualitycard';
import { Button } from './ui/button';
const Whyus = () => {
    const qualities = [
        { name: 'Safety First Quality Must' },
        { name: 'Patient-Centric Approach' },
        { name: 'Focused Leadership' },
        { name: 'Cutting-Edge Technology' },
        { name: 'Transparent Pricing' },
        { name: 'Coordinated Care' }
    ]
    return (
        <div className=' w-full h-[700px]     bg-[#004756] mt-20 flex items-center justify-center gap-40  bp-1024:flex-col-reverse bp-1024:h-fit bp-1298:py-20'>
            <Qualitycard />
            <div className=' flex flex-col items-start  justify-start gap-8 bp-1024:px-5'>
                <h1 className=' text-white font-bold text-5xl'>Dedicated to provide <br />
                    best the treatment.</h1>
                <p className=' text-lg font-normal text-white '>They live in Bookmarksgrove right at the coast of the <br />
                    Semantics, a large language ocean. A small river named <br />
                    Duden flows by their place and supplies it.</p>
                <Button variant="custom"  >Take an Appointment</Button>
            </div>

        </div>
    );
}

export default Whyus;
