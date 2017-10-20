import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Media from './Media';
import Home from './Home';
import { AnimatedRoute } from 'react-router-transition';

export default function SharedRoutes() {
  return (
    <div>
      <AnimatedRoute
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        path="*"
        component={Navbar}
      />
      <AnimatedRoute
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        exact path="/"
        component={Home}
      />
      <AnimatedRoute
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        exact path="/about"
        component={About}
      />
      <AnimatedRoute
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        exact path="/projects"
        component={Projects}
      />
      <AnimatedRoute
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        exact path="/media"
        component={Media}
      />
    </div>
  );
}
