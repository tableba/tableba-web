function ProjectCard({title, description, imageSrc, link}) {

  return (
    <section className="project-card grid grid-cols-[2fr_1fr] grid-rows-[auto_auto_2fr] gap-x-12 gap-y-6 w-95/100 m-10 group">
        <h1 className="project-item col-start-1 row-start-1 row-span-2 text-5xl font-bold" href={link}>{title}</h1>
      <p className="project-item col-start-2 row-start-2 row-span-2 max-w-[32ch] ml-4 leading-relaxed">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="col-start-1 row-start-3 ml-30 self-start"
      >
        <div
          className="w-[600px] aspect-[16/10] overflow-hidden">
          <img
            className="
            project-item w-full h-full object-cover
            transition-transform
            duration-500
            ease-out
            hover:scale-[1.03]
            "
            src={imageSrc}
            alt={title}
          />
        </div>
      </a>
    </section>
  );
}

export default ProjectCard
