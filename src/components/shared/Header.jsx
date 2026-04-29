import React from 'react';
import Image from 'next/image'
import logo from "@/assets/logo.png"
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="container mx-auto flex items-center justify-center flex-col">
            <Image src={logo} width={300} height={200} alt="Logo" className="mt-12 mb-5"></Image>
            <p className="mb-2.5">Journalism Without Fear or Favour</p>
            <p className="mb-8">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;