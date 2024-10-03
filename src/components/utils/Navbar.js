'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About Us',
        href: '/about',
    },
    {
        name: 'Services',
        href: '#',
        dropdown: [
            { name: 'Web Development', href: '#' },
            { name: 'UI/UX Service', href: '#' },
            { name: 'Graphics Design', href: '#' },
            { name: 'Search Engine Optimization (SEO)', href: '#' },
            { name: 'Digital Marketing', href: '#' },
            { name: 'Mobile App Development', href: '#' },
            { name: 'E-Commerce', href: '#' },
            { name: 'Content Writing', href: '#' },
            { name: 'Website Maintenance', href: '#' },
        ],
    },
    {
        name: 'Our Portfolio',
        href: '/portfolio',
    },
    {
        name: 'Blogs',
        href: '/blog',
    },
    {
        name: 'Contact Us',
        href: '/contact',
    },
]

// export function Navbar({activeNav,setActiveNav}) {
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <div className="relative w-full" style={{ background: 'transparent', color: '#262866' }}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <a src='/'>
                        <img
                            src='/assets/Digital_Resolvers_LOGO.png'
                            alt='Logo'
                            className="w-auto max-w-full h-auto object-contain"
                            style={{ height: '110px' }}
                        />
                    </a>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8 mr-4" style={{ fontSize: 'large' }}>
                        {menuItems.map((item) => (
                            item.dropdown ? (
                                <li key={item.name} className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        style={{ fontSize: 'large' }}
                                        className={`flex text-sm font-semibold hover:text-[#ff932b] focus:outline-none `}
                                    >
                                        {item.name}
                                        <IoMdArrowDropdown className='mt-1 ml-1' />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" style={{ zIndex: 10 }}>
                                            {item.dropdown.map(subItem => (
                                                <a
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"

                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ) : (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        style={{ fontSize: 'large' }}
                                        // className={`text-sm font-semibold hover:text-[#ff932b] ${activeNav===item.name ? 'active': ''}`}
                                        className={`text-sm font-semibold hover:text-[#ff932b] `}
                                    // onClick={()=>setActiveNav(item.name)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="transition duration-300 rounded-full bg-transparent px-3 py-2 text-sm font-semibold text-[#262866] hover:bg-[#262866] hover:text-white"
                        style={{ border: '1px solid #262866' }}
                    >
                        Call Now
                    </button>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">

                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            item.dropdown ? (
                                                <div key={item.name} className="relative">
                                                    <button className="w-full text-left px-4 py-2 text-sm font-semibold hover:bg-gray-50"

                                                    >
                                                        {item.name}
                                                    </button>
                                                    {isDropdownOpen && (
                                                        <div className=" inset-x-0 top-full mt-2 bg-white  " style={{ borderTopRightRadius: 'inherit', borderTopLeftRadius: 'inherit', width: 'max-content' }}>
                                                            {item.dropdown.map(subItem => (
                                                                <a
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                                                                >
                                                                    {subItem.name}
                                                                </a>
                                                            ))}
                                                        </div>)}
                                                </div>
                                            ) : (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    // className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50  ${activeNav===item.name ? 'active': ''}`}
                                                    className={`-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 `}
                                                // onClick={()=>setActiveNav(item.name)}
                                                >
                                                    <span className="ml-3 text-base font-medium text-gray-900">
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            )
                                        ))}
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Navbar