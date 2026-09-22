import React from "react";
import { Link } from "react-router-dom";
import TrueTravler from "../assets/Truetravlers.png";
import Education_landing from "../assets/education_landing_page.png";
import RealEstate from "../assets/Real_estates.png";
import IconsPng from "../assets/icons.png";
import Netflix from "../assets/Netflix_Clone.png";
import ProductApi from "../assets/Product_Api.png"

const Projects = () => {
  return (
    <section id="project" className="py-24 bg-black text-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2">
          <div className="left space-y-6 h-[250px] sm:h-[400px] w-full lg:max-w-[450px] overflow-y-scroll no-scrollbar">
            <img
              src={TrueTravler}
              alt="Razorpay Inspired Payment Platform"
              className="w-full lg:min-w-[400px] rounded"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-auto lg:h-[400px] w-full lg:min-w-[450px]">
             <h3 className="text-xl font-semibold mb-3 text-amber-400">
    True Traveller
  </h3>

  <p className="text-gray-300 text-sm mb-4 leading-[2.1]">
    A travel website that helps users explore popular destinations,
    discover travel packages, and plan memorable trips with a simple
    and user-friendly interface.
  </p>

  <ul className="text-sm text-gray-400 mb-4 space-y-1 leading-[2.1]">
    <li>• Explore Popular Destinations</li>
    <li>• Browse Travel Packages</li>
    <li>• Easy Package Booking</li>
    <li>• Travel Guides and Gallery</li>
        <li>• Deployed on Vercel</li>
  </ul>

            <div className="flex gap-4">
              <Link
                to={
                  "https://true-traveller-website.vercel.app/"
                }
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded font-semibold"
              >
                Live
                <img
                  src={IconsPng}
                  alt=""
                  className="w-6 h-6 inline-block ml-2"
                />
              </Link>
              {/* <Link
                to={"https://github.com/Merajkhan74/Razorpay-Inspired-Payment-Platform-UI"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link> */}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2 mt-10">
          <div className="left space-y-6 h-[250px] sm:h-[400px] w-full lg:max-w-[450px] overflow-y-scroll no-scrollbar">
            <img
              src={Education_landing}
              alt="Music Streaming Website"
              className="w-full lg:min-w-[400px] rounded"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-auto lg:h-[400px] w-full lg:min-w-[450px]">
             <h3 className="text-xl font-semibold mb-3 text-amber-400">
    Education Landing Page
  </h3>

  <p className="text-gray-300 text-sm mb-4 leading-[2.1]">
    A modern education website designed to provide information about
    courses, career opportunities, educational resources, and other
    learning-related services through a clean and engaging interface.
  </p>

  <ul className="text-sm text-gray-400 mb-4 space-y-1 leading-[2.1]">
    <li>• Course Information</li>
    <li>• Career Opportunities</li>
    <li>• Educational Blog</li>
    <li>• About Us Section</li>
    <li>• Deployed on Vercel</li>
  </ul>

            <div className="flex gap-4">
              <Link
                to={"https://education-landing-page-eop6.vercel.app/"}
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded font-semibold"
              >
                Live
                <img
                  src={IconsPng}
                  alt=""
                  className="w-6 h-6 inline-block ml-2"
                />
              </Link>

              {/* <Link
                to={"https://github.com/Merajkhan74/Music-Website"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link> */}
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2 mt-10">
          <div className="left space-y-6 h-[250px] sm:h-[400px] w-full lg:max-w-[450px] overflow-y-scroll no-scrollbar">
            <img
              src={RealEstate}
              alt="StudySync Learning Platform"
              className="w-full lg:min-w-[400px] rounded"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-auto lg:h-[400px] w-full lg:min-w-[450px]">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">
    Real Estate Property Finder
  </h3>

  <p className="text-gray-300 text-sm mb-4 leading-[2.1]">
    A modern and responsive real estate website designed to help users
    discover properties, explore popular destinations, and find suitable
    homes with an easy-to-use interface.
  </p>

  <ul className="text-sm text-gray-400 mb-4 space-y-1 leading-[2.1]">
    <li>• Property Listing and Search</li>
    <li>• Property Details and Pricing</li>
    <li>• Popular City and Location Sections</li>
    <li>• Responsive Real Estate UI</li>
    <li>• Modern Bootstrap Based Design</li>
  </ul>

            <div className="flex gap-4">
              <Link
                to={"https://real-estate-property-website.vercel.app/"}
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded font-semibold"
              >
                Live
                <img
                  src={IconsPng}
                  alt=""
                  className="w-6 h-6 inline-block ml-2"
                />
              </Link>

              {/* <Link
                to={"https://github.com/Merajkhan74/StudySync"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link> */}
            </div>
          </div>
        </div>

        {/* Netflix clone backend*/}
        <div className="  ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8  justify-center">
            <div className="w-full max-w-[500px] h-[570px] lg:h-[450px]  mx-auto mt-10 overflow-visible rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
              {/* Image */}
              <div className="w-full overflow-hidden h-[160px]">
                <img
                  src={Netflix}
                  alt="YouTube Backend Project"
                  className="w-full h-45  lg:h-[350px]  mt-2 sm:h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-105    "
                />
              </div>

              {/* Content */}
              <div className="p-2 sm:p-2 md:p-2">
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 pl-1.5 ">
                  Netflix <span className="text-red-500">Clone</span>
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-5 sm:leading-6 mb-2 pl-1.5 ">
                   A Netflix-inspired movie streaming web application built with React.js,
  Tailwind CSS and the TMDB API featuring movie discovery, trending movies,
  search functionality, movie details, trailers, and responsive UI.
                </p>

                {/* Tech Stack */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-2 pl-1.5">
                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Node.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-gray-500/10 text-gray-300
                         text-[10px] sm:text-xs md:text-sm
                         border border-gray-400/20 whitespace-nowrap"
                  >
                    Express.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    MongoDB
                  </span>

                   <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-pink-500/10 text-pink-500
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Mongoose
                  </span>
                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-red-500/10 text-red-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-red-400/20 whitespace-nowrap"
                  >
                    JWT
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-blue-500/10 text-blue-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-blue-400/20 whitespace-nowrap"
                  >
                    Cloudinary
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-yellow-500/10 text-yellow-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-yellow-400/20 whitespace-nowrap"
                  >
                    Multer
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pl-1.5 justify-center">
                  <a
                    href="https://github.com/sakib987447/netflix-clone-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-5 py-2.5 mt-2
                     rounded-lg bg-blue-500 text-white text-sm font-medium
                     transition hover:bg-red-800 w-full "
                  >
                    GitHub
                  </a>

                  <button
                    className="w-full sm:w-auto px-5 py-2.5
                     rounded-lg border border-white/20
                     text-white text-sm font-medium
                     transition hover:bg-white/10  cursor-not-allowed  mt-2"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>

            {/* 2 project Collaborative Project Management */}
             <div className="w-full max-w-[500px] h-[620px] lg:h-[450px]  mx-auto mt-10 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">

        <div className="w-full  h-[180px] overflow-hidden">
          <img
            src={ProductApi}
            alt="Collaborative Project Management"
            className="w-full  object-contain object-center block "
          />
        </div>
        
              <div className="p-2 sm:p-2 md:p-2">
               
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 pl-1.5 ">
                 Product Api  <span className="text-red-500">Management</span>
                </h2>

              
                <p className="text-gray-300 text-xs sm:text-sm leading-5 sm:leading-6 mb-2 pl-1.5 ">
A modern React-based movie streaming application powered by the TMDB API, featuring trending movies, popular movie categories, movie search, detailed movie information.</p>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-2 pl-1.5">
                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Node.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-gray-500/10 text-gray-300
                         text-[10px] sm:text-xs md:text-sm
                         border border-gray-400/20 whitespace-nowrap"
                  >
                    Express.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    MongoDB
                  </span>
                   <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-pink-500/10 text-pink-500
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Mongoose
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-red-500/10 text-red-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-red-400/20 whitespace-nowrap"
                  >
                    JWT
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-blue-500/10 text-blue-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-blue-400/20 whitespace-nowrap"
                  >
                    Cloudinary
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-yellow-500/10 text-yellow-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-yellow-400/20 whitespace-nowrap"
                  >
                    Multer
                  </span>
                </div>

              
                <div className="flex flex-col sm:flex-row gap-3 l-1.5 justify-center">
                  <a
                    href="https://github.com/sakib987447/product-details-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-5 py-2.5
                     rounded-lg bg-blue-600 text-white text-sm font-medium
                     transition hover:bg-red-700 w-full"
                  >
                    GitHub
                  </a>

                  <button
                    className="w-full sm:w-auto px-5 py-2.5
                     rounded-lg border border-white/20
                     text-white text-sm font-medium
                     transition hover:bg-white/10  cursor-not-allowed "
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
