import React from "react";
import "./style.scss"

const PastExperience = () =>{
    return(
        <div>
            <div className="work-experience">
                <header className="section-title">
                    Work experience
                </header>
                <header className="work-experience--job-title">
                Full Stack Developer @ KM.ON by Karl Mayer Hong Kong (2021.06 – 2021.09)
                </header>
                <ul className="work-experience--job-duties">
                    <li>
                    Implemented performance critical RESTful APIs and deployed endpoints for enterprise level web applications with Scala Play.
                    </li>
                    <li>
                    Queries and access with Scala’s Slick library to PostgreSQL database. Implemented CSV validation on the backend and ensured customer data integrity.
                    </li>
                    <li>
                    Created a highly scalable boilerplate application with React.js under supervision, which is now used by KM.ON’s engineering teams in Hong Kong, Germany, and India.
                    </li>
                    <li>
                    Frontend UI/UX design with Figma. Implemented new reusable components to the company’s UI library with React.js, which are now used in all company projects.
                    </li>
                    <li>
                    Implemented extensive unit tests and test suites on the backend with ScalaTest. A 90%+ test coverage was achieved.
                    </li>
                    <li>
                    Peer review, agile process. Jira release note automated generation & delivery.
                    </li>
                </ul>
            </div>
            <div className="relevant-coursework">
                <header className="section-title">
                    Relevant coursework
                </header>
            </div>
        </div>
    )
}

export default PastExperience
