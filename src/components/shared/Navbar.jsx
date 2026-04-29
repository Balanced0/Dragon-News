import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import user from "@/assets/user.png"
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className="flex justify-between container mx-auto px-4 items-center mt-9">
            <div></div>
            <ul className="flex gap-2">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>

            <div className="flex items-center gap-2">
                <Image src={user} alt="user avatar" width={45} height={45}></Image>
                <button className="btn bg-[#403F3F] text-white"><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;