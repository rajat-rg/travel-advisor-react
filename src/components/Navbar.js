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


                    

<button className="ml-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 float-right " type="button" data-modal-toggle="authentication-modal">
LogIn
</button>

<div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">


<div className="relative p-4 w-full max-w-md h-full md:h-auto">

<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
<div className="flex justify-end p-2">
<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</button>
</div>
<form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
<h3 className="text-xl font-medium text-gray-900 dark:text-white">Log in to Travel Advisor</h3>
<div>
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
</div>
<div>
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
</div>

<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

</form>
</div>
</div>
</div>




<button className="ml-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 float-right " type="button" data-modal-toggle="signup-modal">
SignUp
</button>

<div id="signup-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">


<div className="relative p-4 w-full max-w-md h-full md:h-auto">

<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
<div className="flex justify-end p-2">
<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="signup-modal">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</button>
</div>
<form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
<h3 className="text-xl font-medium text-gray-900 dark:text-white">Log in to Travel Advisor</h3>
<div>
<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter your full name</label>
<input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Alex Hales" required=""/>
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required=""/>
</div>
<div>
<label htmlFor="password1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> password</label>
<input type="password" name="password1" id="password1" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
<label htmlFor="password1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
<input type="password" name="password2" id="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required=""/>
</div>

<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

</form>
</div>
</div>
</div>







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
