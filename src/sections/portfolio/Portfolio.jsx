import './Portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ['All', ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if(category === "All") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }

  return (
    <section id='portfolio'>
      <h2>Recent Project</h2>
      <p>
        Explore a selection of my recent projects. 
        Use the buttons to switch between various categories and discover the diversity of my work.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
    
  )
}

export default Portfolio