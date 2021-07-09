import React from "react"
import "./footer.css";
import resume from "../../documents/Cameron_Richards_Resume.pdf"

function clickResume() {
    window.open(resume);
}

function Footer() {
    return (
        <div className="d-flex justify-content-around bg-success" id="footer">
            <a className="p-2 text-light" href="https://github.com/crichards17" target="blank">GitHub</a>
            <a className="p-2 text-light" href="https://www.linkedin.com/in/cameron-richards-3a838036/" target="blank">LinkedIn</a>
            <a className="p-2 text-light" href="mailto: crichards@live.com">Email</a>
            <div className="p-2 text-light" id="resume-link" onClick={clickResume} target="blank">Resume</div>
        </div>
    )
}

export default Footer;