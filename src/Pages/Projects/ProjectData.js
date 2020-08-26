import React from 'react'
import './Project.scss';


function ProjectData({ImgUrl,ProjectName,ProjectDescription,ProjectView,link}) {
    return (
        <>

         <div className="col-md-4 mb-5">
         <div className="card">
           <div className="card-img">
             <img src={ImgUrl} className="img-fluid" alt="amazon project"/>
           </div>
           <div className="card-body">
             <h4>{ProjectName}</h4>
             <p>{ProjectDescription}</p>
           </div>
           <div className="card-footer">
            <a href={link} target="blank"> <button type="button" className="btn btn-warning">{ProjectView}</button> </a>
           </div>
         </div>
       </div>

        </>
    )
}

export default ProjectData
