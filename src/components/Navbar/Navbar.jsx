import React from "react"
import logo from "../../assets/logo.png"
export default function Navbar(){
    return (
        <>
        <div className="w-full fixed  bg-gray-950 h-16 flex justify-between px-32 text-white items-center">
        <img src={logo} className='w-28 h-10  font-semibold'/>
            <div className="flex items-center justify-between w-1/3">
               <button className="h-5 flex items-center rounded font-semibold text-base hover:border-2 p-5">Learn</button>
               <button className="h-5 flex items-center rounded font-semibold text-base hover:border-2 p-5">About</button>
               <button className="h-5 flex items-center rounded font-semibold text-base bg-white hover:border-2 hover:bg-black hover:text-white text-black p-5">Login</button>
            </div>
        </div>
        </>
    )
}