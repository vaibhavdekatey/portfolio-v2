import React from "react";
import gitHubico from '../src/assets/icons/github-mark-white.png'
import globeico from '../src/assets/icons/globe2.svg'

function ProjectCard(props) {
    return(
        <div className="col" >
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.image} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />        
                <div className="card-body">
                <p className="yr">{props.title}</p>
                <p className="card-text">{props.context}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary"><a href={props.gitLink} target="_blank" rel="noopener noreferrer"><img src={gitHubico} /></a></button>
                    <button type="button2" className="btn btn-sm btn-outline-secondary"><a href={props.link} target="_blank" rel="noopener noreferrer"><img src={globeico} fill="" /></a></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;