"use client";

import ModeToggle from "@/components/ui/ModeToggle";
import About from "@/components/ui/about";
import Certificates from "@/components/ui/certificates";
import TechStacks from "@/components/ui/teck-stacks";
import Connects from "@/components/ui/connects";
import Works from "@/components/ui/works";
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-auto w-full  px-4 mb-3">
      <div className="light h-16 w-full max-w-screen-lg flex justify-end items-center mb-2">
        <ModeToggle />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 w-full max-w-screen-lg">
        
        {/* Avatar Section */}
       <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-4 w-full h-40 rounded-lg bg-white dark:bg-[#1111] border flex justify-end items-end overflow-hidden">
          <div className="h-full w-56">
            <Image
              src="/me.jpg"
              className="w-full h-full object-cover"
              alt="Avatar"
              width={500}
              height={500}
            />
          </div>
          <div className="flex w-20 h-full justify-center items-center flex-col gap-5">
            <Link href="https://github.com/Johnravee" target="_blank" className="hover:text-gray-400"><FaGithub size={18} /></Link>
            <Link href="https://www.linkedin.com/in/john-rave-mimay-740a06237/" target="_blank" className="hover:text-gray-400"><FaLinkedin size={18} /></Link>
            <Link href="https://www.facebook.com/johnraveee/" target="_blank" className="hover:text-gray-400"><FaFacebook size={18} /></Link>
            <Link href="https://medium.com/@johnravemimayn" target="_blank" className="hover:text-gray-400"><FaMedium size={18} /></Link>
          </div>
        </div>


        {/* About Section */}
       <div className="col-span-1 sm:col-span-2 lg:col-span-5 row-span-6 min-h-[300px] bg-white border rounded-lg dark:bg-[#1111]  overflow-hidden">
          <About />
        </div>

        {/* Certificates Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-7 h-full bg-white border rounded-lg dark:bg-[#1111]">
          <Certificates />
        </div>

        {/* TechStacks Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-5 h-72 bg-white border rounded-lg dark:bg-[#1111]">
          <TechStacks />
        </div>

        {/* Connects Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-10 h-full bg-white border rounded-lg dark:bg-[#1111]">
          <Connects />
        </div>

        {/* Works Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-5 row-span-5 h-48 bg-white border rounded-lg dark:bg-[#1111]">
          <Works />
        </div>
      </div>
    </div>
  );
}
