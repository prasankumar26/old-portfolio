import React from 'react'
import './About.scss';

function AboutData({ImgUrl,AboutName,AboutDescription}) {
    return (
        <>
        <div className="col-md-6 mb-4">
             <div className="home-four-img">
              <img src={ImgUrl} className="img-fluid" alt="d"/>
             </div>
           </div>
           <div className="col-md-6 my-auto">
             <div className="home-four-content">
             <h2>{AboutName}</h2>
             <p>{AboutDescription}</p>
             </div>
           </div> 
        
            
        </>
    )
}

export default AboutData
