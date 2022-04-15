import React from "react";
import {Link} from "react-router-dom";
import { useLocation} from 'react-router-dom';

import logo from "../static/travel.svg"

export const Navbar = () => {
    let location = useLocation();
  
   return (    

<div>
    <nav className="bg-white focus:ring-4 focus:ring-blue-300 text-white dark:bg-purple-800  ">
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
                <div className=" flex items-center">
                    {/* <Link className="flex-shrink-0" to="/"> */}
                        <img className="h-8 w-8" src={logo} alt="Travel"/>
                    {/* </Link> */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex space-x-4">
                            <Link className= {` ${location.pathname==='/'?"text-purple-800":"text-purple-400"  } hover:text-purple-800 dark:hover:text-purple-800 px-3 py-2 rounded-md text-sm font-medium`} to="/" >
                                Travel Advisor
                            </Link>
                            <Link className={`${location.pathname==='/map'?"text-purple-800":"text-purple-400"  } dark:text-white  hover:text-purple-800 dark:hover:text-purple-800 px-3 py-2 rounded-md text-sm font-medium`} to="/map">
                                Map
                            </Link>
                            
                            
                        </div>
                        
                    </div>
                </div>
                
                <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button className="text-purple-800 dark:text-white hover:text-purple-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className=" ml-10 flex space-x-4 ">


                    

<Link className="ml-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 float-right " type="button" to="/login">
LogIn
</Link>




<Link className="ml-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 float-right " type="button" to="/signup">
SignUp
</Link>






                </div>  
            </div>
            
        </div>
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link className="text-purple-300 hover:text-purple-800 dark:hover:text-purple-800 block px-3 py-2 rounded-md text-base font-medium" to="/">
                    Home
                </Link>
                <Link className="text-purple-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" to="/#">
                    Gallery
                </Link>
                <Link className="text-purple-300 hover:text-purple-800 dark:hover:text-purple-800 block px-3 py-2 rounded-md text-base font-medium" to="/#">
                    Content
                </Link>
                <Link className="text-purple-300 hover:text-purple-800 dark:hover:text-purple-800 block px-3 py-2 rounded-md text-base font-medium" to="/#">
                    Contact
                </Link>
            </div>
        </div>
    </nav>
</div>

  );
};
export default Navbar;
