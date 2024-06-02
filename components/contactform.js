import React from 'react';
import { Input } from './ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button';
const Contactform = () => {
    return (
        <div className=' bg-white rounded-lg shadow-md w-[400px] h-fit gap-4 pb-8 px-8 pt-8 flex flex-col  justify-evenly'>
            <Input placeholder='Name' className='w-full' />
            <Input placeholder='Phone' className='w-full' />
            <Input placeholder='Email' className='w-full' />
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Textarea placeholder="Type your message here." />
            <div className=' pt-5'>
                <Button size="full">Submit Now</Button>
            </div>


        </div>
    );
}

export default Contactform;
