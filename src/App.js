// DEPENDENCIES
import React from "react"
import {Route, Switch} from "react-router-dom"

// STYLES
import './App.css';
import './styles.css'

// PAGES/COMPONENTS
import Header from "./components/Header"
import Footer from "./components/Footer"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Main from "./pages/Main"
import Projects from "./pages/Projects"
import Show from "./pages/Show"

function App() {
  return (
    <div className="App">
      <div className="contents">
        <Header />
        <Switch>
          {/* HOME */}
          <Route exact
            path="/"
            render={(routerProps) => <Main 
              {...routerProps}
              // props go here
            />}
          />
          {/* ABOUT */}
          <Route 
            path="/about"
            render={(routerProps) => <About 
              {...routerProps}
              // props go here
            />}
          />
          {/* PROJECTS */}
          <Route 
            path="/projects"
            render={(routerProps) => <Projects 
              {...routerProps}
              // props go here
            />} 
          />
          {/* CONTACT */}
          <Route 
            path="/contact"
            render={(routerProps) => <Contact 
              {...routerProps}
              // props go here
            />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
