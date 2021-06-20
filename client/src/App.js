import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home, NotFound } from "./views/index";
import ProfileContext from "./Context/ProfileContext";
import React, { useState } from "react";

function App() {

  const [profile, setProfile] = useState(null);

  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
      <Router>
        <Navbar />
        <div className="App"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ProfileContext.Provider>
  );
}

export default App;
