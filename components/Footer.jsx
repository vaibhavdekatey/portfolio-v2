import React from "react";
import gitHubico from '../src/assets/icons/github-mark-white.png'
import linkedinico from '../src/assets/icons/linkedin.png'
import instaico from '../src/assets/icons/insta.png'
import behanceico from '../src/assets/icons/behance.svg'



function Footer() {
    return(
        <div className="cred">
            <footer >
                <ul className="conn mb-3">
                <li><a href="https://www.github.com/vaibhavdekatey" target="_blank"><img src={gitHubico} ></img></a></li>
                <li><a href="https://www.linkedin.com/in/vaibhav-dekatey/" target="_blank"><img src={linkedinico}></img></a></li>
                <li><a href="https://www.instagram.com/artistquill27/" target="_blank"><img src={instaico}></img></a></li>
                <li><a href="https://www.behance.net/vaibhavdekatey" target="_blank"><img src={behanceico}></img></a></li>
                </ul>
                <a className="foot" href="#">Designed & Built by Vaibhav Dekatey</a>
            </footer>
        </div>
    )
}

export default Footer;