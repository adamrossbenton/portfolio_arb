import React from "react"

function Contact() {
    return <div className="contact-container">
        <h1>CONTACT ME:</h1>
        <div className="contact-scene">
            <div className="contact-cube">
                <div className="cube-face front">
                    <h3>Email:</h3>
                    <h5>adamrossbenton@gmail.com</h5>
                </div>
                <div className="cube-face back">
                    <h3>Phone:</h3>
                    <h5>(253) 732-0285</h5>
                </div>
                <div className="cube-face right">
                    <h3>LinkedIn</h3>
                    <h5>https://www.linkedin.com/in/adamrossbenton/</h5>
                </div>
                <div className="cube-face left">
                    <h3>Github:</h3>
                    <h5>https://github.com/adamrossbenton</h5>
                </div>
                <div className="cube-face top">Instagram?</div>
                <div className="cube-face bottom">YouTube?</div>
            </div>
        </div>
    </div>
}

export default Contact