import React from 'react';

const Footerstrip = () => {
    return (
        <div className=' w-full h-fit py-3 px-20 flex items-center justify-between bp-898:px-5 '>
            <h1 className=' text-[#B2C8CC] text-sm font-normal'>© 2023 RNN Studio. Powered by Webflow</h1>
            <div className=' flex items-center justify-center w-fit gap-4'>
                <img src="assets/facebook.png" alt="" srcset="" />
                <img src="assets/printerest.png" alt="" srcset="" />
                <img src="assets/twitter.png" alt="" srcset="" />
                <img src="assets/instagram.png" alt="" srcset="" />
            </div>

        </div>
    );
}

export default Footerstrip;
