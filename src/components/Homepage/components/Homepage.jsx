import React from 'react';
import { FaLinkedin, FaArrowDown } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import "./Homepage.css";
import { FaAnglesDown } from "react-icons/fa6";

export default function Homepage() {
  return (
    <div className="w-full h-screen bg-home bg-cover pt-16">
      <div className="mx-auto mt-28 space-y-10 items-center flex flex-col text-white w-2/3">
        {/* Logo and LinkedIn Section */}
        <div className="px-5 h-14 flex border border-purple-300 rounded-2xl items-center space-x-5">
          <img src={logo} alt="Logo" className="w-28 h-8 border-r pr-8 font-semibold" />
          <div className="flex space-x-2 p-2 items-center">
            <FaLinkedin className="text-2xl" />
            <div className="text-sm font-medium">
              LinkedIn <br />
              Glow Up
            </div>
          </div>
        </div>

        {/* Heading */}
        <div
          className="text-6xl leading-none text-center home-font"
          style={{
            WebkitTextStroke: "1px black",  
            color: "white",
            textShadow: "3px 2px 2px rgba(255,255,255, 1)",  
          }}
        >
          Skills that speak <br />
          <div className='text-5xl'>
          Dreams that Soar
          </div>
        </div>

        {/* Description */}
        <div className="w-2/3 text-center text-base ">
          Sircle your success with our upskilling platform that bridges the gap
          between students' aspirations and professional careers. We empower teens
          with future-ready skills through our <strong>EXTERNSHIPS</strong>  led by field achievers
          and <strong>CXO</strong>s, turning <i>Dreams Into Action</i> .
        </div>

        {/* Button */}
        <div className='bg-white  rounded-xl border-r-[3.5px] border-b-[3.5px]'>
        <button className="px-6 py-3  bg-gradient-to-r  from-col-3 via-col-2 to-col-1 border-2 border-col-1 rounded-lg  flex items-center space-x-2">
          <span className="text-white">Know More</span>
         
          <FaAnglesDown className="text-lg   text-white/90" />
         
        </button>
        </div>
      </div>
    </div>
  );
}
