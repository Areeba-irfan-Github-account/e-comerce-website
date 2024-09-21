"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import React from 'react'

const Nav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);
    return (
        <>
            <div className='sticky top-0 flex items-center justify-between  bg-cyan-700  '>

                <div className='text-3xl ml-6 font-bold text-pink-500'>XMarket</div>



                <div>
                    <label htmlFor="">
                        <input type="text" placeholder='Search for products' className='rounded-sm bg-gray-200 w-80 h-8 hover:bg-slate-100 cursor-text' />
                        <button className='bg-pink-400 h-8 w-16 rounded-sm hover:bg-pink-600'>Search</button>
                    </label>
                </div>

                <div className='p-3'>
                    <ul className='flex space-x-4'>
                        <li className='cursor-pointer text-xl text-white  hover:text-cyan-400 hover:shadow-xl'><Link href="/" >Home</Link></li>
                        <li className='cursor-pointer text-xl text-white  hover:text-cyan-400 hover:shadow-xl'><Link href="login">Login</Link></li>
                        {/* Categories Dropdown */}
                        <div ref={dropdownRef} className="relative group">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="text-white flex text-xl items-center ursor-pointer   hover:text-cyan-400 hover:shadow-xl"
                            >
                                Categories
                                <svg
                                    className="ml-2 h-4 w-4 fill-current text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <div
                                className={`absolute ${dropdownOpen ? 'block' : 'hidden'} group-hover:block bg-pink-200 text-black py-2 mt-2 w-40 shadow-lg`}
                            >
                                <ul className="space-y-2">
                                    <li className="px-4 py-2 hover:bg-pink-600">
                                        <Link href="/electronics">Electronics</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-pink-600">
                                        <Link href="/clothes">Clothes</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-pink-600">
                                        <Link href="/home-and-kitchen">Home & kitchen</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <li className='mr-4 cursor-pointer text-xl text-white hover:text-cyan-400 hover:shadow-xl'><Link href="Cart" >Cart</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}


export default Nav