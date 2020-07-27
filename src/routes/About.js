import React from "react";
import "./About.css";

function About(props) {
    console.log(props)
    return <div className="about__container">
        <div className="about">
            <span>이 앱은 리액트로 만든 무비앱입니다.</span>
        </div>
        </div>
}

export default About;