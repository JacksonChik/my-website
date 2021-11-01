import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppMain from './AppMain';
import AppTop from './AppTop';
import {  Route, Switch } from "react-router-dom";
import SelfIntroduction from './AppMain/components/SelfIntroduction';
import PastExperience from './AppMain/components/PastExperience';


const App = () : JSX.Element =>{
  return (
  <> 
  <BrowserRouter> 
    <AppTop/>
    {/* <AppMain/> */}
    <Switch>
                        <Route path="/bio" component={SelfIntroduction} />
                        <Route path="/pastExp" component={PastExperience  }/>
                        <Route path="/more" />
                    </Switch>
    </BrowserRouter>
  </>
  )
}

export default App;
