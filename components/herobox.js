import React from 'react';

const Herobox = () => {
    return (
        <div className=' p-5 w-[250px] rounded-md shadow-2xl bg-white flex gap-3 items-center justify-center  left-[-90px] top-20 absolute bp-1298:top-0 bp-1298:left-[-150px]  bp-764:w-[190px] bp-764:text-sm  bp-764:left-[200px] bp-764:top-[-30px] sm:hidden  '>
            <img src="/assets/brain.png" alt="" />
            <p className=' font-semibold'>More Than 20K Pateint Treated!</p>

        </div>
    );
}

export default Herobox;
