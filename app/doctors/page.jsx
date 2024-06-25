import React from 'react';
import Doctorscard from '@/components/doctorscard';
const Page = () => {
    const data = [
        { name: "Charlotte Smith", img: "assets/doctor1.png", type: "General Physician", detail: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.", exp: "19 Years Experience" },
        { name: "Charlotte Smith", img: "assets/doctor2.png", type: "General Physician", detail: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.", exp: "19 Years Experience" },
        { name: "Charlotte Smith", img: "assets/doctor3.png", type: "General Physician", detail: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.", exp: "19 Years Experience" },
        { name: "Charlotte Smith", img: "assets/doctor4.png", type: "General Physician", detail: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.", exp: "19 Years Experience" },
        { name: "Charlotte Smith", img: "assets/doctor5.png", type: "General Physician", detail: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.", exp: "19 Years Experience" },
        { name: "Charlotte Smith", img: "assets/doctor6.png", type: "General Physician", detail: "Dr. Charlotte Smith has extensive experience in all aspects of adult cardiology, in particular the prevention and treatment of heart attack.", exp: "19 Years Experience" }
    ]
    return (
        <div>
            <h1 className=' text-sm font-medium text-[#00A0AA] text-center mt-20'>Our Doctors</h1>
            <h1 className=' mt-8 text-center  text-4xl text-[#081E29] font-bold'>Effective and best <br /> healthcare services</h1>
            <div className=' mt-10 mb-10  flex items-center   justify-center gap-[90px] px-10 flex-wrap'>
                {
                    data.map((doctor) => {
                        return (
                            <Doctorscard name={doctor.name} exp={doctor.exp} img={doctor.img} detail={doctor.detail} type={doctor.type} />
                        )
                    })
                }



            </div>

        </div>
    );
}

export default Page;
