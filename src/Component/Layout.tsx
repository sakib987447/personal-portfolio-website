import React from 'react'
import Hero from './Hero'
import About from "./About";
import Project from "./Project";
import Skills from "./Skill";
import Connect from "./Connect";
import Education from "./Education";


const Layout = () => {
  return (
    <div>

     <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Project/>
      <Connect/>
    </div>
  )
}

export default Layout