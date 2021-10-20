import React from "react";
import PastExperience from "./components/PastExperience";
import SelfIntroduction from "./components/SelfIntroduction";
import './style.css'
const AppMain = () => {
    return (
        <main className="app-main-layout">
        <div>
        <SelfIntroduction/>
        <PastExperience/>
        </div>   
        </main>
    )
}

export default AppMain