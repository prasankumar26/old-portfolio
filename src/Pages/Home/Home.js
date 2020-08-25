import React from 'react'
import './Home.scss';
import {Link} from 'react-router-dom'
import Skills from './Skills';


function Home() {
  return (
    <>
    <div className="home-parent container-fluid">
     <div className="row">
       <div className="col-md-6">
       <h1 className="home"></h1>
       </div>
       <div className="col-md-6 text-white my-auto">
         <h2 className="banner-heading">I am Prasan Kumar</h2>
         <h2>Front End Developer</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias esse vel, laborum cum ipsum dicta pariatur assumenda. Saepe ducimus inventore quo, at labore nam magnam placeat magni consequatur numquam aliquid?</p>
         <div className="banner-btn">
          <Link to="/about"> <button className="btn">View More</button> </Link> 
          </div>
       </div>
     </div>
    </div>



   <div className="container-fluid">
     <div className="skills-heading mx-auto mt-5 mb-5">
     <h2 className="text-center">My Skills</h2>
     </div>
    
     <div className="row">
    
     <Skills 
     name="HTML- 5"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="98 %"
     />
    
     <Skills 
     name="CSS- 3"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="96 %"
     />
    
     <Skills 
     name="JAVASCRIPT"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="80 %"
     />
    
     <Skills 
     name="BOOTSTRAP- 4"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="98 %"
     />
    
     <Skills 
     name="J-QUERY"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="60 %"
     />
    
     <Skills 
     name="REACT-JS"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="60 %"
     />
     
     <Skills 
     name="GIT- Version-Control"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="60 %"
     />
     <Skills 
     name="PHOTOSHOP"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="60 %"
     />
     <Skills 
     name="SEO"
     description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quidem rerum hic quaerat magnam sunt culpa minima amet nisi voluptatibus, architecto in consequatur praesentium mollitia laudantium eos aut ex! Eaque."
     percentage="60 %"
     />

  
     </div>
   </div>






    {/* 3rd bg img  */}

    <div className="container-fluid">
      <div className="home-bg-img"></div>
    </div>







        <div className="container-fluid">
          <div className="home-four">
            <h2> WEBSITES AND WEB-APPLICATIONS</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae voluptate optio vitae perferendis velit itaque ipsam tenetur quasi quia. Sunt rem consequuntur cupiditate quia praesentium alias eligendi quam ducimus eveniet.</p>
          </div>
          <div className="row mt-4">
           <div className="col-md-6 mb-4">
              <div className="home-four-img">
               <img src="/prasan-imges/WEBSITE DESIGNING.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>WEB DESIGNING</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure mollitia debitis soluta dolorum, voluptates, expedita officia unde quia, magni hic labore molestiae deleniti laboriosam nobis. Nemo dolor porro corporis?</p>
              </div>
            </div>
         </div>

          <div className="row mt-4 d-flex flex-row-reverse">
           <div className="col-md-6 mb-5">
              <div className="home-four-img">
               <img src="/prasan-imges/WEBSITE DESIGNING.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>WEB DEVELOPER</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure mollitia debitis soluta dolorum, voluptates, expedita officia unde quia, magni hic labore molestiae deleniti laboriosam nobis. Nemo dolor porro corporis?</p>
              </div>
            </div>
         </div>

        </div>


   
        <div className="container-fluid">
         
          <div className="row mt-4">
           <div className="col-md-6 mb-4">
              <div className="home-four-img">
               <img src="/prasan-imges/WEBSITE DESIGNING.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>FRONT-END-ENGINEER</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure mollitia debitis soluta dolorum, voluptates, expedita officia unde quia, magni hic labore molestiae deleniti laboriosam nobis. Nemo dolor porro corporis?</p>
              </div>
            </div>
         </div>

          <div className="row mt-4 d-flex flex-row-reverse">
           <div className="col-md-6 mb-5">
              <div className="home-four-img">
               <img src="/prasan-imges/WEBSITE DESIGNING.jpg" className="img-fluid" alt="d"/>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="home-four-content">
              <h2>REACT-JS EXPERT</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iure mollitia debitis soluta dolorum, voluptates, expedita officia unde quia, magni hic labore molestiae deleniti laboriosam nobis. Nemo dolor porro corporis?</p>
              </div>
            </div>
         </div>

        </div>


   
     



    </>
  )
}

export default Home
