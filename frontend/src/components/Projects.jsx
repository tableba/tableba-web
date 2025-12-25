import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <div className="box-border h-200vf">

      <img className="image-transition w-full" src="/img/transtition_mono.png"></img>

      <div id="projects-start" className="project-page bg-text_primary flex flex-col items-center gap-10">

        <ProjectCard
          title="Repairing a Sansa Clip Sport MP3 player"
          description='Bought from a second hand shop this Sansa Clip Sport was missing components and was not turning on.
          Click on the image to see how it got repaired and why there is a text saying "ipod 2".'
          imageSrc="https://placehold.co/800x500?text=Slide+1"
          link="https://github.com/tableba"
        />
      </div>
    </div>
  )
}

export default Projects
