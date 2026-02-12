// ProjectCard.jsx
import { Link } from "react-router-dom";

export default function ProjectCard({ title, image, id }) {
  return (
    <Link to={`/work/${id}`} className="flex flex-col w-full group">
      {/* Responsive image container */}
      <div className="bg-[#222222] w-full aspect-square flex items-center justify-center overflow-hidden group-hover:opacity-80 transition-opacity">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gray-400 text-xl">In Progress</span>
        )}
      </div>

      {/* Text */}
      <h3 className="text-white text-[18px] md:text-[20px] mt-8 group-hover:opacity-70 transition-opacity">{title}</h3>
    </Link>
  );
}