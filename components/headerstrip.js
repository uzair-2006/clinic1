import React from 'react';
import Image from 'next/image';
const Headerstrip = () => {
    return (
        <div className=' w-full   p-3 flex items-center justify-around py-4'>
            <div className=' flex items-center justify-center gap-12'>
                <div className=' flex items-center justify-start gap-2'>
                    <Image alt='icon' height={17} width={17} src='/assets/locationIcon.png' />
                    <p className=' text-sm  font-medium text-black'>90919 Madie Run Apt. 790</p>
                </div>
                <div className=' flex items-center justify-start gap-2'>
                    <Image alt='icon' height={20} width={20} src='/assets/messageIcon.png' />
                    <p className=' text-black text-sm font-medium'>hello@yoursite.com</p>
                </div>
            </div>
            <div className=' flex items-center justify-start gap-2'>
                <Image alt='icon' height={20} width={20} src='/assets/whatsappIcon.png' />
                <p className=' text-black text-sm font-medium'>Connect On Whatsapp</p>
            </div>

        </div>
    );
}

export default Headerstrip;
