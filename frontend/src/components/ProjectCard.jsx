function ProjectCard({ title, description, imageSrc, link }) {
  return (
    <section className="project-card grid grid-cols-1 md:grid-cols-[2fr_1fr] grid-rows-auto gap-x-12 gap-y-6 w-11/12 m-10 group">
      <h1 className="project-item col-span-1 md:col-start-1 md:row-start-1 md:row-span-2 2xl:text-6xl md:text-5xl font-bold">
        {title}
      </h1>
      <p className="project-item col-span-1 md:col-start-2 md:row-start-2 md:row-span-2 max-w-[32ch] ml-0 md:ml-4 2xl:text-lg leading-relaxed">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-1 md:col-start-1 md:row-start-3 ml-0 md:ml-20 self-start"
      >
        <div className="2xl:w-[800px] w-[550px] aspect-[16/10]">
          <img
            className="project-item w-full h-full object-cover origin-center transition-transform duration-500 ease-out hover:scale-[1.03]"
            src={imageSrc}
            alt={title}
          />
        </div>
      </a>
    </section>
  );
}

export default ProjectCard;

