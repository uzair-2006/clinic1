import React from 'react';
import Servicetemplate from './servicetemplate';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ServiceTabs = () => {
    return (
        <div className=' w-full flex items-center justify-center mt-10'>
            <Tabs defaultValue="Woman Health" className="w-full flex items-center flex-col">
                <TabsList>
                    <TabsTrigger value="Woman Health">Woman Health</TabsTrigger>
                    <TabsTrigger value="Cancer Screening">Cancer Screening</TabsTrigger>
                    <TabsTrigger value="Kids Vaccine">Kids Vaccine</TabsTrigger>
                </TabsList>
                <TabsContent value="Woman Health" className=" w-full">
                    <Servicetemplate mainheading="Health Checkup Plans" subheading={`A wonderful serenity has taken possession of my 
entire soul, like these sweet mornings of spring`} mainsrc="assets/woman1.png" logosrc="assets/heart-icon.png" templatedata={['Complete Blood Count with ESR', 'Lipid Profile, Live Profile, Kidney Profile', 'USG Abdomen with Pelvis, Mammography']} />
                </TabsContent>
                <TabsContent value="Cancer Screening">
                    <Servicetemplate mainheading="Cancer Screening Checkup" subheading={`A wonderful serenity has taken possession of my 
entire soul, like these sweet mornings of spring`} mainsrc="assets/woman2.png" logosrc="assets/cancer-icon.png" templatedata={['Complete Blood Count with ESR', 'Lipid Profile, Live Profile, Kidney Profile', 'USG Abdomen with Pelvis, Mammography']} />
                </TabsContent>
                <TabsContent value="Kids Vaccine">
                    <Servicetemplate mainheading="Health Checkup Plans" subheading={`A wonderful serenity has taken possession of my 
entire soul, like these sweet mornings of spring`} mainsrc="assets/kid.png" logosrc="assets/syringe-icon.png" templatedata={['Complete Blood Count with ESR', 'Lipid Profile, Live Profile, Kidney Profile', 'USG Abdomen with Pelvis, Mammography']} />
                </TabsContent>
            </Tabs>


        </div>
    );
}

export default ServiceTabs;
