"use client"
import React from 'react';
import Sidebar from './sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Health Checkups", href: "/health" },
        { name: "Doctors", href: "/doctors" },
        { name: "Departments", href: "/departments" },
    ]
    const pathname = usePathname()



    return (
        <div className=' w-full bg-white shadow-lg rounded-lg py-4 px-2 flex items-center justify-around sticky top-0 z-50 bp-968:justify-between bp-968:px-10 bp-660:fixed bp-1298:top-0  '>
            <div>
                <img src='/assets/logo.png' />
            </div>
            <div className=' flex items-center justify-center gap-20 bp-1298:gap-10 bp-1298:text-sm bp-968:hidden'>
                {navLinks.map((link) => {
                    return (

                        <Link href={link.href} key={link.href}>
                            <p className={`text-md font-medium hover:underline hover:text-[#00a0ad]  ${pathname === link.href ? 'text-[#00a0ad]' : 'text-black'} `}>{link.name}</p>
                        </Link>
                    )
                })}
            </div>
            <div className=' flex items-center justify-center gap-12 bp-968:hidden'>
                <div className=' flex items-center justify-start gap-2'>
                    <Image alt='icon' src='/assets/callIcon.png' height={17} width={17} />
                    <p className=' font-medium bp-1298:text-sm'>1800-657-876</p>
                </div>
                <Button>Appointment</Button>
            </div>
            <Sheet className=' w-[200px]'>
                <SheetTrigger>
                    <div className=' hidden bp-968:flex'>
                        <img src="assets/menuicon.png" alt="" />
                    </div>
                </SheetTrigger>
                <SheetContent side="left" className='w-[250px]' >
                    <Sidebar />

                </SheetContent>
            </Sheet>

        </div>
    );
}

export default Navbar;