import React from 'react';

const Subhero = () => {
    const data = [
        { name: 'Pediatrician', src: '/assets/image1.png' },
        { name: 'Cardiologist', src: '/assets/image2.png' },
        { name: 'Dermatologist', src: '/assets/image3.png' },
    ]
    return (
        <div className=' w-full h-[650px] bg-[#00A0AA] flex items-center justify-start  pt-[80px] flex-col gap-9  xl:h-fit  xl:pb-20'>

            <div className=' w-full flex items-center justify-evenly flex-col'>
                <div className=' w-full flex items-start  justify-center gap-[300px]  mb-20  xl:px-8 xl:gap-40  lg:flex-col lg:gap-10 '>
                    <div className=' lg:w-full'>
                        <h1 className=' leading-normal text-white font-bold text-4xl lg:text-center'>Medpro Healthcare is <br />
                            dedicated to provide <br />
                            best treatment.</h1>
                    </div>
                    <div className=' lg:w-full '>
                        <p className='  leading-[32px] text-white lg:text-center  font-normal  text-lg'>A wonderful serenity has taken possession of my entire soul, <br /> like
                            these sweet mornings of spring which I enjoy with my whole heart. <br />
                            I am alone, and feel the charm of existence in this spot, <br /> which was
                            created for the bliss of souls like mine.</p>
                    </div>
                </div>
                <div className=' w-full flex items-center justify-center gap-20 px-10 flex-wrap  '>
                    {data.map((data) => {
                        return (
                            <div className=' relative  xl:mb-20 ' key={data.name}>
                                <img src={data.src} alt="" />
                                <div className=' absolute bottom-[-50px] left-[45px] bg-white rounded-md shadow-2xl flex flex-col items-center justify-center gap-2  px-[60px] py-5'>
                                    <p className=' text-[#00A0AA]  font-semibold  text-md'>For Your Child Health</p>
                                    <h1 className=' font-bold text-2xl'>{data.name}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Subhero;
