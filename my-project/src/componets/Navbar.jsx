import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleNavbar = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ease-in-out  ${
        scrolled ? 'bg-white shadow-sm py-5' : 'bg- py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-indigo-600">My Grilbril </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-5 text-2xl">
          <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-2xl text-gray-700"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white px-4 text-center text-2xl ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <a href="#" className="block py-2 text-gray-600 hover:text-indigo-600">Home</a>
        <a href="#" className="block py-2 text-gray-600 hover:text-indigo-600">About</a>
        <a href="#" className="block py-2 text-gray-600 hover:text-indigo-600">Services</a>
        <a href="#" className="block py-2 text-gray-600 hover:text-indigo-600">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
