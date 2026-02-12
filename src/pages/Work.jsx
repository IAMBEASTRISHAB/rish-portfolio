// Work.jsx
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="max-w-400 mx-auto px-4 md:px-8 lg:px-10 py-30 text-white">
      <div className="pb-30 md:pb-30 lg:pb-30">
        <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-24 pb-20 md:pb-20 lg:pb-30">

          <div className="w-full lg:max-w-130">
            <h2 className="text-[60px] md:text-[80px] lg:text-[100px] leading-tight">
              Work
            </h2>
          </div>

          <div className="shrink-0 text-left w-full md:w-auto md:max-w-auto lg:max-w-136.5">
            <p className="text-white text-[20px] md:text-[24px] lg:text-[30px] leading-[122%]">
              A curated collection of websites and digital experiences I've designed.
            </p>
          </div>

        </section>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              id={project.id}
              image={project.thumbnail}
            />
          ))}
        </div>
      </div>
    </main>
  );
}