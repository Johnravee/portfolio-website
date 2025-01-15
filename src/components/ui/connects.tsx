import { LiaBlogSolid } from "react-icons/lia";
import Link from 'next/link'; 
import { MdOutlineEmail } from "react-icons/md";

export default function Connects() {

    interface Blogs {
        title: string,
        platform: string,
        url: string
    }

    const blogs: Blogs[] = [
        {
            title: "How reduce array function works",
            platform: "Medium",
            url: "https://medium.com/codex/how-reduce-array-function-works-2854d0bbbeca"
        },
        {
            title: "Node.js Authentication",
            platform: "Medium",
            url: "https://medium.com/@johnravemimayn/node-js-authentication-with-json-web-token-jwt-253075e70ddd"
        },
        {
            title: " Types of Websites",
            platform: "Medium",
            url: "https://medium.com/@johnravemimayn/different-types-of-websites-79aec63f6c3d"
        }
    ];

  return (
    <div>
        <div className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
            <LiaBlogSolid size={25} />
            <h1 className='font-semibold text-lg font-geist'>Blogs</h1>
        </div>

        <div>
            <ul className="list-none h-full w-full pt-2 flex flex-col gap-1 items-center sm:items-start sm:flex-wrap sm:flex-row sm:gap-1 sm:w-full">
                {blogs.map((val, index) => {
                    return (
                        <li key={index} className="w-96 sm:w-80 lg:w-96 p-3  mb-1 sm:m-2  bg-white shadow-sm border rounded-sm dark:bg-[#1A1A1A]">
                            <div className="list-item w-full">
                                <div className="title">
                                    <h3 className='font-semibold text-sm dark:text-white'>{val.title}</h3>
                                    <h6 className='font-medium text-xs text-muted-foreground'>{val.platform}</h6>
                                </div>
                            </div>
                            <div className="cert-link flex justify-end items-center text-muted-foreground">
                                <Link className='text-sm font-medium underline-offset-4 underline' href={val.url} target='_blank'>view</Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>

        <div className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
            <MdOutlineEmail size={25} />
            <h1 className='font-semibold text-lg font-geist'>Connects</h1>
        </div>

        <div className="description flex justify-center items-center pb-1 pl-5 pr-5 tracking-normal">
            <p className='text-sm font-semibold'>
                Feel free to send me an 
                <Link href="mailto:johnravemimayn@gmail.com" className='underline-offset-2 underline ml-1 text-blue-500' target='_blank'>Email</Link> or send a message through my 
                <Link href="https://www.linkedin.com/in/johrave-mimay-740a06237/" className='underline-offset-2 underline ml-1 text-blue-500' target='_blank'>LinkedIn</Link> .
            </p>
        </div>
    </div>
  );
}
