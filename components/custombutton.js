import React from 'react';

const Custombutton = ({ src, text }) => {
    return (
        <div className=' px-3 py-2  rounded-md border text-white text-sm font-semibold border-white flex items-center justify-center gap-3
         hover:cursor-pointer hover:bg-[#004756]/50'>
            <img src={src} alt="" srcset="" />
            <p>{text}</p>
        </div>
    );
}

export default Custombutton;
