import React from 'react';
import Reasoncard from '@/components/reasoncard';
const Page = () => {
    const data = [
        {
            imgSrc: 'assets/sheildicon.png', heading: 'Safety First Quality', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        }, {
            imgSrc: 'assets/icon4.png', heading: 'Satisfaction', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        }, {
            imgSrc: 'assets/icon1.png', heading: 'Patient-Centric Approach', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        },
        {
            imgSrc: 'assets/icon1.png', heading: 'Patient-Centric Approach', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        },
        {
            imgSrc: 'assets/icon1.png', heading: 'Patient-Centric Approach', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        },
        {
            imgSrc: 'assets/icon1.png', heading: 'Patient-Centric Approach', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        },
    ]
    return (
        <div>
            <h1 className=' text-sm font-medium text-[#00A0AA] text-center mt-20'>Our Departments</h1>
            <h1 className=' mt-8 text-center  text-4xl text-[#081E29] font-bold'>Micro is dedicated to<br /> provide best treatment</h1>
            <div className=' flex items-center justify-center w-full'>
                <div className=' mt-20 flex w-[1250px]  items-center justify-center gap-20 gap-y-[140px] px-5 pb-[160px] flex-wrap'>
                    {
                        data.map((data) => {
                            return (
                                <Reasoncard imgSrc={data.imgSrc} heading={data.heading} subheading={data.subhaeding} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Page;
