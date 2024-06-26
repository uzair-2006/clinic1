import React from 'react';

const Value = () => {
    const data1 = [
        'Care for customer', 'Respect and Care', 'Trust Mutually'
    ]
    return (
        <div className=' w-full flex items-start justify-center gap-40 h-fit flex-wrap px-10 py-20'>
            <div className=' w-[360px]'>
                <img src="assets/value-woman.png" alt="" />
            </div>
            <div className=' mt-5 h-full flex flex-col items-start justify-start w-[400px] gap-3 '>
                <h1 className=' text-sm font-medium text-[#00A0AA]'>Our Value</h1>
                <h1 className=' text-3xl  font-bold'>Dedicated To Provide Best Treatment</h1>
                <h1 className=' text-sm font-normal'>I am so happy, my dear friend, so absorbed in the
                    exquisite sense of mere tranquil existence, that I
                    neglect my talents.</h1>
                <div className=' w-full flex items-center justify-between mt-5 '>
                    <div className=' w-fit flex flex-row '>
                        <div className=' w-fit flex flex-col items-start justify-center gap-3 px-1'>
                            {
                                data1.map((data) => {
                                    return (
                                        <Formatter title={data} />
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className=' w-fit flex flex-col'>
                        <div className=' w-fit flex flex-col items-start justify-center gap-3 px-1'>
                            {
                                data1.map((data) => {
                                    return (
                                        <Formatter title={data} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}



const Formatter = ({ title }) => {
    return (
        <div className=' flex items-start justify-center gap-2'>
            <img src="assets/tickicon.png" alt="" />
            <p className=' text-md font-thin'>{title}</p>
        </div>
    );
}




export default Value;
