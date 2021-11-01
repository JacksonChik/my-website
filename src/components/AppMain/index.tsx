import React from "react";
import { useEffect } from "react";
import PastExperience from "./components/PastExperience";
// import { Route } from "react-router";
import SelfIntroduction from "./components/SelfIntroduction";
import './style.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
const AppMain = () => {
    return (
        <BrowserRouter>
            <main className="app-main-layout">
                <div>
                {/* <Link to="/bio">Messages</Link> */}
                    {/* <Switch> */}
                        <Route path="/bio" component={SelfIntroduction} />
                        <Route path="/pastExp" component={PastExperience}/>
                        <Route path="/more" />
                    {/* </Switch> */}
                </div>   
            </main>
        </BrowserRouter>
    )
}

export default AppMain