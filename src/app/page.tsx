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
    <div className="flex h-100 w-full justify-center items-center flex-col mb-5  ">
      <div className="light h-20 w-1/2   flex justify-end items-center">
        <ModeToggle />
      </div>
      <div className="grid grid-cols-7 grid-rows-16 gap-3 w-1/2">
        <div className="col-span-2 row-span-4 w-full h-40 rounded-lg bg-gray-400 dark:bg-gray-600 flex justify-end items-end">
          <Image
            src="https://imgs.search.brave.com/v4GQEXPneGsxGNRGG4ZkoIICw7-EuyevP6GwLMfcHYU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTE0Nzc1Mi9waG90/by9zdHVkaW8tcG9y/dHJhaXQtb2YtYXR0/cmFjdGl2ZS0yMC15/ZWFyLW9sZC1iZWFy/ZGVkLW1hbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9LXR3/TDFOS0thZDZTX0VQ/ckdTbmlld2poNjc3/NkEwSnUyN0V4TWg3/dl9rST0"
            className="rounded-lg w-full h-full bg-cover"
            alt="Avatar"
          />
        </div>

        <div className="col-span-5 row-span-6 h-72 bg-white border rounded-lg dark:bg-blue-700">
            <About />
        </div>

        <div className="col-span-2 row-span-7 h-full bg-white border rounded-lg dark:bg-green-600">
          <Certificates />
        </div>

        <div className="col-span-3 row-span-5 h-72 bg-white border rounded-lg dark:bg-red-600">
          <TechStacks />
        </div>

        <div className="col-span-2 row-span-10 h-full bg-white border rounded-lg dark:bg-yellow-600">
          <Connects />
        </div>

        <div className="col-span-5 row-span-5 h-48 bg-white border rounded-lg dark:bg-purple-600">
          <Works />
        </div>
      </div>
    </div>
  );
}
