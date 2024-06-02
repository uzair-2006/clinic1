import React from 'react';

const Testimonialcard = () => {
    return (
        <div className=' w-full flex items-center justify-center gap-20'>
            <div className=' flex flex-col justify-center items-start gap-5'>
                <div>
                    <img src="assets/testimonial.png" alt="" srcset="" />
                </div>
                <h1 className=' text-2xl font-normal text-white'>
                    “A wonderful serenity has taken <br />
                    possession of my entire soul, like <br />
                    these sweet mornings of spring <br />
                    which I enjoy.
                </h1>
                <div className=' flex flex-col justify-center gap-0 mt-8'>
                    <h2 className=' text-bold text-lg text-white'>
                        Mr Williams
                    </h2>
                    <p className=' text-white   font-semibold text-lg'>Diabetes Patient</p>
                </div>
            </div>
            <div className='  bp-898:hidden'>
                <img src="assets/videoimg.png" alt="" srcset="" />
            </div>

        </div>
    );
}

export default Testimonialcard;
