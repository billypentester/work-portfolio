import {useEffect} from 'react'
import SweetScroll from 'sweet-scroll';
import Icons from '../utils/Icons';

const Navbar = () => {

    useEffect(() => {
    
        const sweetScroll = new SweetScroll({
            trigger: 'a[href^="#"]', // Apply smooth scrolling to anchor links
            header: '[data-scroll-header]', // Selector for fixed headers (optional)
            duration: 1500, // Specifies animation duration in integer
            easing: 'easeOutQuint', // Specifies the pattern of easing
            offset: -125, // Specifies the value to offset the scroll position in pixels
            vertical: true, // Enable the vertical scroll
            horizontal: false, // Enable the horizontal scroll
            cancellable: true, // When fired wheel or touchstart events to stop scrolling
            updateURL: false, // Update the URL hash on after scroll (true | false | "push" | "replace")
            preventDefault: true, // Cancels the container element click event
            stopPropagation: true, // Prevents further propagation of the container element click event in the bubbling phase
            quickMode: false, // Instantly scroll to the destination! (It's recommended to use it with `easeOutExpo`)
        });

        return () => {
            sweetScroll.destroy();
        }

    }, [])

  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">billypentester</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a href='#main'>Hey</a>
                </li>
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#work'>Work</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn" href="/BilalAhmad.pdf" target="_blank" rel="noopener noreferrer">
                <Icons type='file' paint="h-4 w-4  text-gray-800"/>
                <span className="hidden md:block me-2">Resume</span>
            </a>
        </div>
    </div>
  )
}

export default Navbar
