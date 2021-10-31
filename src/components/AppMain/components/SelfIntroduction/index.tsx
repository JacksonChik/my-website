import React from "react";
import { SocialIcon } from "react-social-icons";
import "./style.scss"
const SelfIntroduction = () =>{
    return(
        <div className="intro-page">
        <div className="self-introduction">
            <header className="self-introduction--header">
            A little bit about me
            </header>
            <p className="self-introduction--body">
            My name is Jackson Chik, a computer science student studying at UBC.
            </p>
            <p className="self-introduction--body">
            I was studying at McGill in Montreal, Quebec before September 2021. Fun times. 
            </p>
            <p>
            <SocialIcon url="https://www.instagram.com/jacksonchik01/" className="self-introduction--social-platform-icon"/>
            <SocialIcon url="https://www.facebook.com/jackson.chik.1" className="self-introduction--social-platform-icon"/>
            <SocialIcon url="https://open.spotify.com/user/12102399971?si=2b1061db7ead4ee4" className="self-introduction--social-platform-icon"/>
            <SocialIcon url="https://ca.linkedin.com/in/jackson-chik-b63313194" className="self-introduction--social-platform-icon"/>
            </p>
        </div>
        </div>
    )
}

export default SelfIntroduction