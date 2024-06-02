import React from 'react';

const Footerlinks = ({ heading, links }) => {
    return (
        <div className=' flex flex-col items-start justify-center gap-3 bp-898:items-center bp-898:mt-10'>
            <h1 className=' text-white text-lg font-semibold mb-4'>{heading}</h1>
            {links.map((link) => {
                return (
                    <p key={link} className=' text-[#B2C8CC] text-sm font-normal hover:underline hover:cursor-pointer'>{link}</p>
                )
            })}
        </div>
    );
}

export default Footerlinks;
