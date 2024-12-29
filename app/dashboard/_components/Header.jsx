"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Dashboard from "../page";

function Header() {
   
  const router = useRouter()
    const path = usePathname();

    useEffect(()=>{
        console.log(path)
    })

  return (

    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.svg"} width={160} height={100} alt="Logo"></Image>
      <ul className='hidden md:flex gap-6'>
        <li onClick={()=>{router.push(`/dashboard`)}} className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/dashboard'&&'text-primary font-bold'}`}>
          Dashboard
        </li>

        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/dashboard/questions'&&'text-primary font-bold'}`}>
          Questions
        </li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/dashboard/upgrade'&&'text-primary font-bold'}`}>
          Upgrade
        </li>
        
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/dashboard/how'&&'text-primary font-bold'}`}>
          How it Works?
        </li>
      </ul>
      <UserButton></UserButton>
    </div>
  );
}

export default Header;
