import "./App.css";
import { BrowserRouter, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Project from "./Component/Project";
import Skills from "./Component/Skill";
import Navbar from "./Component/Navbar";
import Connect from "./Component/Connect";
import Layout from "./Component/Layout";
import Education from "./Component/Education";

// path apne file location ke hisaab se adjust karo
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div>
        <Navbar />
       <Layout/>
      </div>
    
  },
  {
    path: "/about",
    element:
      <div>
        <Navbar />  
        <About />
        <Skills/>
         <Education/>
        <Project />
        <Connect/>
        
      </div>
    
  },
    {
    path:"/skills",
    element:
      <div>
        <Navbar />
        <Skills/>
        <Education/>
        <Project />
        <Connect/>
      </div>
    
  },  {
    path:"/education",
    element:
      <div>
        <Navbar />
        <Education/>
        <Project />
        <Connect/>
      </div>
    
  },
  {
    path: "/project",
    element:
    <div>
        <Navbar />
        <Project />
         <Skills/>
      
      </div>
    
  },

  {
    path: "/connect",
    element:
      <div>
        <Navbar />     
        <Connect/>
      </div>
    
  },
]);

function App() {
  return (
    <>
   
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
