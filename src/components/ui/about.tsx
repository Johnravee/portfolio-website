import { FcInfo } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

export default function About() {
  const location = 'Rizal, Philippines'; 
  return (
    <div className="h-full flex flex-col space-y-4">
      <header className="name pt-5 pb-2 pl-5">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-sm sm:text-left text-center">
          <div className="text-lg font-bold">John Rave Mimay</div>

          <Separator orientation="vertical" className="h-4 sm:h-4 bg-gray-300 dark:bg-gray-700" />
          
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Aspiring Software Engineer</div>
        </div>
      </header>

      <Separator />
      
      {/* About Section */}
      <section className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
        <FcInfo size={20} />
        <h1 className="font-semibold text-lg font-geist">About</h1>
      </section>

      <section className="description tracking-wide flex flex-col space-y-3 px-5">
        <p className="text-sm font-geist font-medium">
          I&apos;m a third-year Bachelor of Science in Information Technology student, focused on building websites and web applications.
        </p>

        <p className="text-sm font-geist font-medium">
          I have a strong passion for technology and enjoy exploring topics like self-development, health, and minimalism through books and continuous learning.
        </p>

        <p className="text-sm font-geist font-medium">
          I am always eager to expand my knowledge and apply it to real-world projects.
        </p>
      </section>

      {/* Location Section */}
      <div className="location w-full flex flex-row p-2 pr-5 pt-4 justify-end items-center opacity-1 text-gray-400 ">
        <MdLocationPin size={15} aria-label="Location Pin" />
        <h3 className="text-sm font-medium">{location}</h3>
      </div>
    </div>
  );
}
