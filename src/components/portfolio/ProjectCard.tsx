import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-64 w-full sm:h-72 md:h-80">
        <Image
          src={project.imageUrl}
          alt={project.siteName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        />
        {/* Desktop Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex flex-col items-center justify-center p-6 text-center">
          <p className="text-yellow-600 text-sm font-semibold tracking-wider uppercase mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl font-bold text-white">
            {project.siteName}
          </h3>
        </div>
      </div>

      {/* Mobile Text (Visible below image on small screens) */}
      <div className="p-5 md:hidden">
        <p className="text-yellow-600 text-xs font-semibold tracking-wider uppercase mb-1">
          {project.category}
        </p>
        <h3 className="text-lg font-bold text-white">
          {project.siteName}
        </h3>
      </div>
    </div>
  );
}
