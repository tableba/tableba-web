import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  return (
    <div className="box-border h-200vf">

      <img className="image-transition w-full" src="/img/transtition_mono.png"></img>

      <div id="projects-start" className="project-page bg-text_primary flex flex-col items-center gap-10">

        <ProjectCard
          title="testinggggggggggggggggggggggggggg"
          description='ttesting testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing esting '
          imageSrc="https://placehold.co/800x500?text=Slide+1"
          link="https://github.com/tableba"
        />
        <ProjectCard
          title="testinggggggggggggggggggggggggggg"
          description='ttesting testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing esting '
          imageSrc="https://placehold.co/800x500?text=Slide+1"
          link="https://github.com/tableba"
        />
        <ProjectCard
          title="testinggggggggggggggggggggggggggg"
          description='ttesting testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing testing esting '
          imageSrc="https://placehold.co/800x500?text=Slide+1"
          link="https://github.com/tableba"
        />
      </div>
    </div>
  )
}

export default Projects
