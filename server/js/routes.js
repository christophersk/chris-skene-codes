import React from "react";

import { Route } from "react-router";
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Hello from './components/Hello';


const routes = (
  <div>
    <Route path="*" component={Navbar} />
    <Route path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/hello" component={Hello} />
  </div>

);

export default routes;
