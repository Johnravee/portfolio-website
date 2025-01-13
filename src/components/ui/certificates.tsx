'use client'
import { GiAchievement } from "react-icons/gi";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

export default function Certificates() {

  interface Certificate {
    title: string,
    provider: string,
    url: string
  }

  const cert: Certificate[] = [
    {
      title: 'PMP certification',
      provider: 'SkillUp',
      url: "https://simpli-web.app.link/e/ikshKIRd7Pb"
    },

    {
      title: 'Front End Development',
      provider: 'SkillUp',
      url: "https://simpli-web.app.link/e/dDNB9xTd7Pb"
    },

    {
      title: 'Introduction to MongoDB',
      provider: 'SkillUp',
      url: "https://simpli-web.app.link/e/9kMvqeXd7Pb"
    }
  ];

  return (
    <div>
      <div className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
        <GiAchievement size={25} />
        <h1 className='font-semibold text-lg font-geist'>Certificates</h1>
      </div>

      <div>
        <ul className="list-none h-full w-full pt-5 flex flex-wrap gap-1 justify-center mb-5 sm:mb-8">
          {cert.map((val, index) => {
            return (
              <li key={index} className="w-full sm:w-80 lg:w-96 p-3 bg-white shadow-sm mx-2 border rounded-sm flex flex-col mb-4 dark:bg-[#1A1A1A]">
                <div className="list-item w-full">
                  <div className="title">
                    <h3 className='font-semibold text-sm dark:text-white'>{val.title}</h3>
                    <h6 className='font-medium text-xs text-muted-foreground'>{val.provider}</h6>
                  </div>
                </div>
                <div className="cert-link flex justify-end items-center text-muted-foreground">
                  <Link className='text-sm font-medium hover:decoration-1' href={val.url} target='_blank'>view</Link>
                  <span className="arrow ml-2"><FaArrowRight size={10} /></span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
