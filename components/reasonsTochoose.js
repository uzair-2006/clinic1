import React from 'react';
import Reasoncard from './reasoncard';
const ReasonsTochoose = () => {
    const data = [
        {
            imgSrc: 'assets/sheildicon.png', heading: 'Safety First Quality', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        }, {
            imgSrc: 'assets/icon4.png', heading: 'Satisfaction', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        }, {
            imgSrc: 'assets/icon1.png', heading: 'Patient-Centric Approach', subhaeding: 'Far far away, behind the word mounts,far from the countries vokalia and theylive in right at the coast.'
        },
    ]
    return (
        <div className=' bg-[#D4FFFC] w-full h-fit pb-20'>
            <h1 className=' px-3 pt-20 font-bold text-3xl text-center'>Top reasons to choose</h1>
            <p className=' text-sm font-medium text-center mt-3' l>They live in Bookmarksgrove right at the coast</p>
            <div className=' w-full h-fit flex items-center flex-wrap justify-around mt-10'>
                {
                    data.map((data) => {
                        return (
                            <Reasoncard imgSrc={data.imgSrc} heading={data.heading} subheading={data.subhaeding} />
                        )
                    })
                }

            </div>

        </div>
    );
}

export default ReasonsTochoose;
