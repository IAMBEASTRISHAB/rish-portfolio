import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main className="max-w-400 mx-auto px-4 sm:px-6 lg:px-10 text-white">

      <div className="pt-20 md:pt-20 lg:pt-36 pb-20 md:pb-20 lg:pb-44">

        <section className="flex flex-col lg:flex-row justify-between gap-24">

          <div className="flex flex-col justify-between w-full lg:max-w-130">
            <h1 className="text-[20px] md:text-[24px] lg:text-[30px] leading-tight">
              First impressions last forever.
            </h1>

            <div className="mt-8 lg:hidden">
              <p className="text-white text-[20px] md:text-[24px] lg:text-[30px] leading-[122%]">
                I design digital experiences that turn visitors into clients. Whether you're building a SaaS product, crafting a landing page, or launching an app, I create interfaces that people actually want to use and that drive real business results.
              </p>
            </div>

            <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[124%] mt-8 lg:mt-0">
              <span className="block">I'm currently available</span>
              <span className="block">for new projects</span>
            </p>

          </div>

          <div className="w-full lg:max-w-140 lg:text-left hidden lg:block">
            <p className="text-white text-[20px] md:text-[24px] lg:text-[30px] leading-[122%]">
              I design digital experiences that turn visitors into clients. Whether you're building a SaaS product, crafting a landing page, or launching an app, I create interfaces that people actually want to use and that drive real business results.
            </p>
          </div>

        </section>
      </div>

      {/* Work Section */}
      <div className="pb-30 md:pb-30 lg:pb-50">
        <section className="flex flex-row justify-between items-center gap-24 pb-20 md:pb-20 lg:pb-30">

          <div className="w-full lg:max-w-130">
            <h2 className="text-[60px] md:text-[80px] lg:text-[100px] leading-tight">
              Work
            </h2>
          </div>

          <div className="w-auto shrink-0 text-left">
            <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[124%] flex flex-col gap-y-2">
              <span className="block">Web Design</span>
              <span className="block">UI/UX Design</span>
              <span className="block">Product Design</span>
            </p>
          </div>

        </section>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 md:pb-20 lg:pb-30">
          <ProjectCard title="Cogito" id="1" image="/Project-1-mockup-1.webp" />
          <ProjectCard title="Project 2" id="2" />
          <ProjectCard title="Project 3" id="3" />
          <ProjectCard title="Project 4" id="4" />
        </div>

        <div className="mt-6 text-center">
          <Link to="/work" className="text-white text-[24px] md:text-[32px] lg:text-[40px] inline-flex items-center gap-5">
            More Projects
            <img src="/Vector.svg" alt="Arrow" className="w-8 h-8 md:w-10 md:h-10" />
          </Link>
        </div>

      </div>

    </main>
  );
}