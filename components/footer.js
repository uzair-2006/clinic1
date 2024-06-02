import React from 'react';
import Custombutton from './custombutton';
import Footerlinks from './footerlinks';
import Footerstrip from './footerstrip';
const Footer = () => {
    return (
        <div className=' w-full bg-[#004756]'>
            <div className=' h-fit w-full p-5 flex pt-20  items-start justify-center gap-8 bp-898:flex-col'>
                <div className=' w-[30%] flex flex-col items-end justify-center gap-8 bp-898:w-full bp-898:items-center '>
                    <img src="assets/logowhite.png" alt="" srcset="" />
                    <div className=' h-fit flex flex-col justify-center gap-6'>
                        <Custombutton text="Take An Appointment" src="assets/arrowwhite.png" />
                        <Custombutton text="Connect On Whatsapp" src="assets/whatsappwhite.png" />
                    </div>
                </div>
                <div className=' w-[70%] flex items-start justify-evenly  py-2 bp-898:flex-col bp-898:w-full bp-898:items-center'>
                    <Footerlinks heading="SERVICES" links={['Ambulance', 'Pathology', 'Radiology', 'Pharmacy']} />
                    <Footerlinks heading="Health CHECKUP" links={['Ambulance', 'Pathology', 'Radiology', 'Pharmacy']} />
                    <Footerlinks heading="DEPARTMENTS" links={['Ambulance', 'Pathology', 'Radiology', 'Pharmacy']} />
                    <Footerlinks heading="QUICK LINKS" links={['Ambulance', 'Pathology']} />
                </div>
            </div>
            <Footerstrip />

        </div>
    );
}

export default Footer;
