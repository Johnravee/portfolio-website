import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'

export default function Allprojects() {



    interface Projects {
        imgUrl: string,
        title: string,
        link: string
    }

   

     const [works, setWork] = useState<Projects[]>([
        {
            imgUrl: "/Baranggaymanagement.png",
            title: 'Baranggay information management system',
            link: 'https://github.com/Johnravee/BARANGGAY_INFORMATION_MANAGEMENT'
        },
        {
            imgUrl: "/capstonegenerator.png",
            title: 'Capstone title generator',
            link: 'https://github.com/Johnravee/CapstoneTittleGen'
        },
        {
            imgUrl: "/dentalappointment.png",
            title: 'Dental appointment system',
            link: 'https://github.com/Johnravee/Dental-Clinic-Appointment-System'
        },
        {
            imgUrl: "/icd-scheduleviewing.png",
            title: 'ICS SCHED VIEWING SUB-SYSTEM',
            link: 'https://github.com/Johnravee/ICS_SCHED_VIEWING_SUBSYSTEM'
        },
        {
            imgUrl: "/ICSSCHED.png",
            title: 'ICS SCHEDULING SYSTEM',
            link: 'https://github.com/Johnravee/ICS_SCHEDULING_SYSTEM'
        },
     ])
     
 



   return (
    <div className="relative w-full max-w-full h-auto">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-auto"
      >
        <CarouselContent>
          {works.map((val, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
              <div>
                <Card>
                  <CardContent className="flex justify-center flex-col p-0">
                    <Link href={val.link}>
                        <img 
                        src={val.imgUrl} 
                        alt={`Project Image ${val.title}`} 
                        className="w-full h-full object-contain" 
                        />
                    </Link>
                    <div className="flex p-5">
                        <h1 className='text-lg font-bold'>Title: {val.title}</h1>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
   
        <CarouselPrevious 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black rounded-full p-4">
        </CarouselPrevious>

        <CarouselNext 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black rounded-full p-4">
        </CarouselNext>
      </Carousel>
    </div>
  )
}
