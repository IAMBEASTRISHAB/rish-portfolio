import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function WorkDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <main className="max-w-400 mx-auto px-4 md:px-8 lg:px-10 py-30 text-white">
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-400 mx-auto px-4 md:px-8 lg:px-10 py-30 text-white">
      <section>
        {/* Project Title and Type */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8 md:mb-16 lg:mb-30">
          <h1 className="text-[60px] md:text-[80px] lg:text-[100px] leading-tight">
            {project.title}
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px]">
            {project.type}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-24 mb-20 md:mb-20 lg:mb-30">
          <div className="flex flex-col gap-6">
            {project.figmaLink && (
              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <img src="/figma.png" alt="Figma" className="w-8 h-8 md:w-10 md:h-10" />
                <span className="text-[20px] md:text-[24px] lg:text-[30px]">Figma File</span>
                <img src="/Vector2.svg" alt="Arrow" className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            )}
            {project.behanceLink && (
              <a href={project.behanceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <img src="/behance.png" alt="Behance" className="w-8 h-8 md:w-10 md:h-10" />
                <span className="text-[20px] md:text-[24px] lg:text-[30px]">Behance</span>
                <img src="/Vector2.svg" alt="Arrow" className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            )}
            {project.webflowLink && (
              <a href={project.webflowLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <img src="/webflow.png" alt="Webflow" className="w-8 h-8 md:w-10 md:h-10" />
                <span className="text-[20px] md:text-[24px] lg:text-[30px]">Webflow</span>
                <img src="/Vector2.svg" alt="Arrow" className="w-4 h-4 md:w-6 md:h-6" />
              </a>
            )}
          </div>

          <p className="text-[20px] md:text-[24px] lg:text-[30px] leading-[122%]">
            {project.description}
          </p>
        </div>

        {/* Image Containers */}
        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-10">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="w-full bg-[#222222] relative flex items-center justify-center overflow-hidden"
              style={{ paddingBottom: "80%" }}
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-16 md:mt-20 lg:mt-24 text-center">
          <Link
            to="/work"
            className="text-white text-[24px] md:text-[32px] lg:text-[40px] inline-flex items-center gap-5"
          >
            More Projects
            <img
              src="/Vector.svg"
              alt="Arrow"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
