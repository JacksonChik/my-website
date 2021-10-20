import React from "react"
import { Button } from "react-bootstrap"
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import "./style.scss" 




const Topbar = () : JSX.Element => {
    const onClickButton = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
}
  return (
//     <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/dashboard">Dashboard</Link>
//         </li>
//       </ul>

//       <hr />

//       {/*
//         A <Switch> looks through all its children <Route>
//         elements and renders the first one whose path
//         matches the current URL. Use a <Switch> any time
//         you have multiple routes, but you want only one
//         of them to render at a time
//       */}
//       <Switch>
//         <Route exact path="/">
//         </Route>
//         <Route path="/about">
//         </Route>
//         <Route path="/dashboard">
//         </Route>
//       </Switch>
//     </div>
//   </Router>
    <Router>
    <header className="topbar-layout">
    <Link to="/bio" className="topbar-layout--item">
      {/* <Button className="topbar-layout--item" onClick={onClickButton}> */}
          Bio
      {/* </Button> */}
      </Link> 
      <Link to="/pastExp" className="topbar-layout--item">
      {/* <Button className="topbar-layout--item" > */}
          Past experience
      {/* </Button> */}
      </Link> 
    <Link to="/more" className="topbar-layout--item">
      {/* <Button className="topbar-layout--item" > */}
          More about me
      {/* </Button> */}
    </Link>
    </header>
    </Router>
    )
}

export default Topbar