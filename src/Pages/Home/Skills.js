import React from 'react'


function Skills({name,description,percentage}) {
    return (
      
             <div className="col-md-4 mb-4">
         <div className="skill-box"> 
          <h2> {name} </h2>
          <p> {description} </p>

          <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" >{percentage}</div>
  </div>
  </div>

          </div>



    
        
    )
    
}

export default Skills


