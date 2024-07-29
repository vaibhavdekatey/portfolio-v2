import ProjectCard from './ProjectCards';
import projectList from "./ProjectList";

function Project(){
    return (
        <div className="container row flex-lg-row-reverse " id="pro">
        <h1 className="display-5 col-12 fw-bold text-body-emphasis lh-1 mb-5">Some Things I've Built</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-1">

            {projectList.map (pro => 
            <ProjectCard 
                key = {pro.key}
                title = {pro.projectTitle} 
                image = {pro.img_src}
                context = {pro.projectContext}
                gitLink = {pro.gitHub}
                link = {pro.link}
            />)
            }

        </div>
    </div>

  )
}
  
export default Project;