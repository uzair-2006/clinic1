import React from 'react';
import Hero from './hero';
const AboutHero = () => {
    return (
        <div >
            <p className=' text-center text-[#00A0AA] px-3  font-bold text-lg mt-8'>About Page</p>
            <h1 className=' text-4xl font-bold text-[#081E29] text-center mt-8 px-3 '>The Hospital That Cares     For <br /> Life And Humanity</h1>
            <div className='w-full h-fit p-4 flex items-center justify-center mt-5'>
                <div className=' w-[900px] h-fit'>
                    <img src="assets/about-bg1.png" alt="" />
                </div>
            </div>
            <div className=' mt-40'>
                <Hero buttonText='See All Services' heading='Our Story' subHeading='Micro Healthcare is dedicated to provide best treatment.'

                    subheading2='Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics.'
                />
            </div>

        </div>
    );
}

export default AboutHero;
