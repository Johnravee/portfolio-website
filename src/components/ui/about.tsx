import { FcInfo } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

export default function About() {
  const location = 'Rizal, Philippines'; // Use a constant instead of useState
  return (
    <div className="p-5">
      {/* Header section */}
      <header className="name pt-5 pb-2 pl-5">
        <div className="flex flex-col sm:flex-row h-5 items-center space-x-4 text-sm">
          <div className="text-lg font-bold">John Rave Mimay</div>
          <Separator orientation="vertical" />
          <div className="text-sm font-medium text-gray-600">Aspiring Software Engineer</div>
        </div>
      </header>

      <Separator />
      
      {/* About Section */}
      <section className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
        <FcInfo size={20} />
        <h1 className="font-semibold text-lg font-geist">About</h1>
      </section>

      <section className="description tracking-wide">
        <p className="text-sm font-geist pl-5 pr-5 font-medium">
          I&apos;m a third-year Bachelor of Science in Information Technology student, focused on building websites and web applications.
        </p>

        <p className="text-sm font-geist pt-3 pl-5 pr-5 font-medium">
          I have a strong passion for technology and enjoy exploring topics like self-development, health, and minimalism through books and continuous learning.
        </p>

        <p className="text-sm font-geist pt-3 pl-5 pr-5 font-medium">
          I am always eager to expand my knowledge and apply it to real-world projects.
        </p>
      </section>

      {/* Location Section */}
      <div className="location w-full flex flex-row p-2 pr-5 pt-4 justify-end items-center opacity-1 text-gray-400">
        <MdLocationPin size={15} aria-label="Location Pin" />
        <h3 className="text-sm font-medium">{location}</h3>
      </div>
    </div>
  );
}
