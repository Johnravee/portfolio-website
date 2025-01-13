"use client";

import * as React from "react";
import ModeToggle from "@/components/ui/ModeToggle";
import About from "@/components/ui/about";
import Certificates from "@/components/ui/certificates";
import TechStacks from "@/components/ui/teck-stacks";
import Connects from "@/components/ui/connects";
import Works from "@/components/ui/works";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-auto w-full mb-5 px-4">
      <div className="light h-16 w-full max-w-screen-lg flex justify-end items-center mb-4">
        <ModeToggle />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 w-full max-w-screen-lg">
        
        {/* Avatar Section */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-4 w-full h-40 rounded-lg bg-gray-400 dark:bg-gray-600 flex justify-end items-end">
          <Image
            src="https://imgs.search.brave.com/v4GQEXPneGsxGNRGG4ZkoIICw7-EuyevP6GwLMfcHYU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTE0Nzc1Mi9waG90/by9zdHVkaW8tcG9y/dHJhaXQtb2YtYXR0/cmFjdGl2ZS0yMC15/ZWFyLW9sZC1iZWFy/ZGVkLW1hbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9LXR3/TDFOS0thZDZTX0VQ/ckdTbmlld2poNjc3/NkEwSnUyN0V4TWg3/dl9rST0"
            className="rounded-lg w-full h-full bg-cover"
            alt="Avatar"
            width={500}
            height={500}
          />
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
