import React from "react";

function Hello() {
    return (
        <div className="hello">

            <div className="px-4 py-5 my-5 mb-9" >
            <h6 className="up1">Hello, my name is</h6>
            <h1 className="display-3 fw-bold" >Vaibhav Dekatey.</h1>
            <h1 className="display-5 fw-bold second">Front-End Developer and <br /> Graphics Designer!</h1>

            <p className="lead mt-4 mb-4">I'm a Final year Computer Science and Engineering Student. Primarily interested in Front-End Development and Graphics Design.<br />I enjoy learning new skills and implementing them in real life!</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-">
            <a href="mailto:vaibhav2001dekatey@gmail.com"><button type="button1" className="btn btn-outline-secondary btn-lg px-4" >Get In Touch</button></a>
            </div>
        </div>
    </div>
    )

}

export default Hello;