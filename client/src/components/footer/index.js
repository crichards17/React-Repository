import React from "react"
import "./footer.css";

function Footer() {
    return (
        <div className="d-flex justify-content-around bg-success" id="footer">
            <a className="p-2 text-light" href="https://github.com/crichards17" target="blank">GitHub</a>
            <a className="p-2 text-light" href="https://www.linkedin.com/in/cameron-richards-3a838036/">LinkedIn</a>
            <a className="p-2 text-light" href="mailto: crichards@live.com">Email</a>
            <div className="p-2 text-light">Resume</div>
        </div>
    )
}

export default Footer;