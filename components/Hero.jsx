import React from "react";
import me from "../src/assets/me.jpg"



function Hero(props) {
    return (
        <div className="hero" id="hero">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={me} className="d-block mx-lg-auto img-fluid" alt="Display picture" loading="lazy" />
                </div>

                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Me</h1>
                    <p className="lead">Hello! I'm Vaibhav Dekatey </p>

                    <p className="lead">
                        Experience in blending the art of design with skill of programming with strong organizational skills, and meticulous attention to detail.
                    </p>  

                    <p className="lead">Pursued my Bachelors from <a className="highlights" href="http://www.dypiu.ac.in" target="_blank" rel="noopener noreferrer"> DYPIU, Pune</a>  in Computer Science and Engineering.
                    </p>

                    <p className="lead">
                        Here are a few of the other activities that I love to do!
                    </p>

                    <ul className=" lead hobbies">
                        <li>Coding</li>
                        <li>Illustration</li>
                        <li>Gaming</li>
                        <li>Painting</li>
                    </ul>
                    <br />

                </div>
            </div>
        </div>


    )

}

export default Hero;