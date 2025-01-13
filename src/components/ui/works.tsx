import React, {useState, useEffect} from 'react'
import { PiStackSimpleFill } from "react-icons/pi";
import { IoMdMore } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import Allprojects from './all-projects';
export default function Works() {

      const [mounted, setMounted] = useState(false);
    
   

    interface Projects{
        title: string,
        role: string,
        img: string,
        techs: string[],
        url: {
            youtubeUrl : string,
            githubUrl : string
        }

    }

    const [projects, setProject] = useState<Projects[]>([
        {
            title: "INSTITUTE OF COMPUTER STUDIES SCHEDULING SYSTEM",
            role: "Lead Developer",
            img: '',
            techs: ['Visual Basic', 'MySQL'],
            url: {
                youtubeUrl: '',
                githubUrl: ''
            }
        },
        {
            title: "INVENTORY MANAGEMENT SYSTEM",
            role: "Lead Developer",
            img: '',
            techs: ['React', 'MySQL', 'Node.js', 'Jwt'],
            url: {
                youtubeUrl: '',
                githubUrl: ''
            }
        }
    ])


       useEffect(() => {
            setMounted(true);
        }, []);

     if (!mounted) return null;

  return (
    <div>
        <div className="flex w-full flex-row items-center justify-between pl-5 pt-5 pb-3 gap-1">
                <div className="flex flex-row items-center gap-3">
                    <PiStackSimpleFill  size={25} />
                    <h1 className='font-semibold text-lg font-geist'>Recent works</h1>
                </div>
                <div className="mr-5">
                     <Drawer>
                        <DrawerTrigger asChild>
                            <div>
                                <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                    <Button variant="outline" size={"sm"}>
                                        <IoMdMore size={30} />
                                    </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>See more</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>
                            </div>
                         </DrawerTrigger>

                        <DrawerContent className='h-[500px]'>
                            <DrawerHeader className='flex items-center justify-between'>
                                <DrawerTitle className='font-bold text-lg'>All of my works</DrawerTitle>
                                <DrawerClose asChild>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>

                            </DrawerHeader>
                            <DrawerFooter className='flex  items-center h-full'>
                                 <Allprojects />
                            </DrawerFooter>
                            
                        </DrawerContent>
                    </Drawer>
                     
                </div>
        </div>

        <div>
        <ul className="list-none h-full w-full flex justify-start flex-row gap-2 items-center  pl-5 pr-5">
          {projects.map((val, index) =>{
            return (
                <li key={index} className="max-w-100 max-h-40 p-3 bg-white shadow-sm border rounded-sm">
                <div className="list-item w-full">
                <div className="title">
                    <h3 className='font-semibold text-sm'>{val.title}</h3>
                    <h6 className='font-medium text-xs text-muted-foreground'>{val.role}</h6>
                </div>
                </div>
                <div className="cert-link flex justify-end items-center">
                    <div className="flex gap-2">
                        <Link href="" ><FaYoutube size={18} className='text-red-600' /></Link>
                        <Link href=""><FaGithub size={18} /></Link>
                    </div>
                </div>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
