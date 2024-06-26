import React from 'react';

const Reasoncard = ({ imgSrc, heading, subheading }) => {
    return (
        <div className=' bg-white shadow-xl mx-5 bp-1019:my-5 rounded-xl flex items-center justify-center flex-col gap-3 p-8 py-10 w-[300px]'>
            <img src={imgSrc} alt="" srcset="" />
            <h1 className=' font-bold text-lg '>{heading}</h1>
            <p className=' text-center  text-sm'>{subheading}</p>

        </div>
    );
}

export default Reasoncard;
