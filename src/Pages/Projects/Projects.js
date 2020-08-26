import React from 'react'
import ProjectData from './ProjectData';
import SocialMedia from '../../Socialmedia/SocialMedia';

function Projects() {
  return (
    <>
    <div>
      <h1 className="projects">Projects</h1>
    </div>

     <div className="container">
     <SocialMedia/>
     <div className="row my-5">
     
          <ProjectData
          ImgUrl="/prasan-imges/amazon-clone.JPG"
          ProjectName="Amazon Clone Project"
          ProjectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in officiis vel tempora quidem maiores asperiores eius blanditiis explicabo cumque?"
          ProjectView="View Project"
          link="https://clone-project-8bf75.web.app"
          />

      
          <ProjectData
          ImgUrl="/prasan-imges/messenger-clone.JPG"
          ProjectName="Todo-List Clone Project"
          ProjectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in officiis vel tempora quidem maiores asperiores eius blanditiis explicabo cumque?"
          ProjectView="View Project"
          link="https://facebook-messenger-clonr.web.app"
          />

      
          <ProjectData
          ImgUrl="/prasan-imges/messenger-clone.JPG"
          ProjectName="Facebook Messenger Clone"
          ProjectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in officiis vel tempora quidem maiores asperiores eius blanditiis explicabo cumque?"
          ProjectView="View Project"
          link="https://facebook-messenger-clonr.web.app"
          />

      
          <ProjectData
          ImgUrl="/prasan-imges/amazon-clone.JPG"
          ProjectName="Twitter Clone Project"
          ProjectDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in officiis vel tempora quidem maiores asperiores eius blanditiis explicabo cumque?"
          ProjectView="View Project"
          link="https://facebook-messenger-clonr.web.app"
          />

      

      
     </div>
     </div>

     </>
  )
}

export default Projects
