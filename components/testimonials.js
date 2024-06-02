import React from 'react';
import Testimonialcard from './testimonialcard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const Testimonials = () => {
    return (
        <div className=' w-full h-fit pb-40 bg-[#004756] flex items-center justify-center pt-40 '>
            <Carousel className=" w-[80vw] bp-898:w-[60vw] ">
                <CarouselContent>
                    <CarouselItem>
                        <Testimonialcard />
                    </CarouselItem>
                    <CarouselItem>
                        <Testimonialcard />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    );
}

export default Testimonials;
