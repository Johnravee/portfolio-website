import React, { useState } from 'react'
import { LiaBlogSolid } from "react-icons/lia";
import Link from 'next/link'; 
import { MdOutlineEmail } from "react-icons/md";
export default function Connects() {

    interface Blogs {
        title: string,
        platform: string,
        url: string
    }

    const [blogs, setBlog] = useState<Blogs[]>([
        {
            title: "How reduce",
            platform: "medium",
            url: "https://medium.com/codex/how-reduce-array-function-works-2854d0bbbeca"
        },
        {
            title: "Node.js Authentication",
            platform: "medium",
            url: "https://medium.com/@johnravemimayn/node-js-authentication-with-json-web-token-jwt-253075e70ddd"
        },
        {
            title: " Types of Websites",
            platform: "medium",
            url: "https://medium.com/@johnravemimayn/different-types-of-websites-79aec63f6c3d"
        }
    ])

  return (
    <div>
        <div className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
            <LiaBlogSolid size={25} />
            <h1 className='font-semibold text-lg font-geist'>Blogs</h1>
        </div>

        <div>
        <ul className="list-none h-full w-full flex justify-center flex-col gap-2 items-center pt-2">
            {blogs.map((val, index) =>{
                return(
                    <li key={index}  className="w-48 p-3 bg-white shadow-sm border rounded-sm">
                    <div className="list-item w-full">
                        <div className="title">
                            <h3 className='font-semibold text-sm'>{val.title}</h3>
                            <h6 className='font-medium text-xs text-muted-foreground'>{val.platform}</h6>
                        </div>
                    </div>
                    <div className="cert-link flex justify-end items-center text-muted-foreground">
                        <Link className='text-sm font-medium  underline-offset-4 underline' href={val.url} target='_blank'>view</Link>
                    </div>
                </li>
                )
            })}
        </ul>
      </div>
       <div className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
            <MdOutlineEmail  size={25} />
            <h1 className='font-semibold text-lg font-geist'>Connects</h1>
        </div>
        <div className="description flex justify-center items-center  pl-5 pr-5 tracking-normal">
            <p className='text-sm font-semibold'>Feel free to send me an <Link href="mailto:johnravemimayn@gmail.com" className='underline-offset-2 underline ml-1 text-blue-500' target='_blank'>Email</Link> or send message through my 
                <Link href="https://www.linkedin.com/in/johrave-mimay-740a06237/" className='underline-offset-2 underline ml-1 text-blue-500' target='_blank'>LinkedIn</Link>.
            </p>
        </div>
    </div>
  )
}
