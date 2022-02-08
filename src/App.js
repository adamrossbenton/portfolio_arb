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

// HOOKS
import RenderHooks from "../src/hooks/RenderHooks"
import WorksHooks from "../src/hooks/WorksHooks"

function App() {
  
  const {loading} = RenderHooks()
  const {works, getWorks} = WorksHooks()

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
            path="/projects/:id"
            render={(routerProps) => <Show 
              {...routerProps}
              loading={loading}
              works={works}
              getWorks={getWorks}
            />}
          />
          <Route 
            path="/projects"
            render={(routerProps) => <Projects 
              {...routerProps}
              loading={loading}
              works={works}
              getWorks={getWorks}
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
