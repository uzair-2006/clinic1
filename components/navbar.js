"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Health Checkups", href: "/health" },
        { name: "Departments", href: "/departments" },
    ]
    const pathname = usePathname()



    return (
        <div className=' w-full bg-white shadow-lg rounded-sm py-4 px-2 flex items-center justify-around sticky top-0 '>
            <div>
                <img src='/assets/logo.png' />
            </div>
            <div className=' flex items-center justify-center gap-20'>
                {navLinks.map((link) => {
                    return (

                        <Link href={link.href} key={link.href}>
                            <p className={`text-md font-medium hover:underline hover:text-[#00a0ad]  ${pathname === link.href ? 'text-[#00a0ad]' : 'text-black'} `}>{link.name}</p>
                        </Link>
                    )
                })}

                {/* <Link href='/'>
                    <p className='  text-md font-medium hover:underline  hover:text-[#00a0ad]'>About</p>
                </Link >
                <Link href='/'>
                    <p className='  text-md font-medium hover:underline  hover:text-[#00a0ad]'>Health Checkups</p>
                </Link>
                <Link href='/'>
                    <p className=' text-md  font-medium hover:underline  hover:text-[#00a0ad]'>Departments</p>
                </Link> */}

            </div>
            <div className=' flex items-center justify-center gap-12'>
                <div className=' flex items-center justify-start gap-2'>
                    <Image alt='icon' src='/assets/callIcon.png' height={17} width={17} />
                    <p className=' font-medium'>1800-657-876</p>
                </div>
                <Button>Appointment</Button>
            </div>
        </div>
    );
}

export default Navbar;
