"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const Sidebar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Health Checkups", href: "/health" },
        { name: "Doctors", href: "/doctors" },
        { name: "Departments", href: "/departments" },
    ]
    const pathname = usePathname()
    return (
        <div className=' w-full h-full flex items-start pl-6 justify-between py-10 flex-col'>
            <div>
                <img src="assets/logo.png" alt="" />
            </div>
            <div className=' flex items-start justify-center flex-col gap-10  '>
                {navLinks.map((link) => {
                    return (

                        <Link href={link.href} key={link.href}>
                            <p className={`text-md font-medium hover:underline hover:text-[#00a0ad]  ${pathname === link.href ? 'text-[#00a0ad]' : 'text-black'} `}>{link.name}</p>
                        </Link>
                    )
                })}
            </div>
            <div className=' flex items-center justify-center gap-8 flex-col'>
                <div className=' flex items-center justify-start gap-2'>
                    <Image alt='icon' src='/assets/callIcon.png' height={17} width={17} />
                    <p className=' font-medium bp-1298:text-sm'>1800-657-876</p>
                </div>
                <Button>Appointment</Button>
            </div>

        </div>
    );
}

export default Sidebar;
