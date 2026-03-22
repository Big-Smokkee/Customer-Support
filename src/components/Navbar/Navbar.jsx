import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-6 md:px-20 ">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-[16px] md:text-2xl">CS — Ticket System</a>
                </div>


                <div className="navbar-end  gap-8 text-[16px]">
                    <div className='gap-8 hidden md:flex '>
                        <a href="">Home</a>
                        <a href="">FAQ</a>
                        <a href="">Changelog</a>
                        <a href="">Blog</a>
                        <a href="">Download</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <ul className="p-2">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Changelog</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Download</a></li>
                                    <li><a href="">Contact</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-primary text-white font-semibold 
  bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-none
   shadow-sm hover:opacity-90 transition text-[12px] md:text-[16px]"><span><FontAwesomeIcon icon={faPlus} /></span>New Ticket</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;