import React from 'react';

const Qualitycard = () => {
    const qualities = [
        { name: 'Safety First Quality Must' },
        { name: 'Patient-Centric Approach' },
        { name: 'Focused Leadership' },
        { name: 'Cutting-Edge Technology' },
        { name: 'Transparent Pricing' },
        { name: 'Coordinated Care' }
    ]
    return (
        <div className=' w-[340px] h-[500px] bg-white rounded-2xl shadow-2xl'>
            <div className=' w-full pt-10 pl-10'>
                <h1 className=' font-bold text-3xl text-[#081E29]'> Why Choose Us?</h1>
            </div>
            <div className=' w-full flex items-start justify-start gap-7 pl-10 mt-[60px] flex-col'>
                {qualities.map((qualitie) => {
                    return (
                        <div className=' flex items-center justify-start gap-3' key={qualitie.name}>
                            <img src="assets/tickicon.png" alt="" />
                            <p className=' font-semibold  text-sm'>{qualitie.name}</p>
                        </div>
                    )
                })}


            </div>

        </div>
    );
}

export default Qualitycard;
