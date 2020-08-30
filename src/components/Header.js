import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <header className="text-white bg-gray-800 body-font w-full md:overflow-hidden">
          <div className="container mx-auto flex flex-wrap p-2 justify-between flex-row items-center">
            <a
              href="/"
              className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            >
              <span className="ml-1 text-3xl  font-black text-white">
                MernTest
                <span className="font-black text-4xl text-red-500">.</span>
              </span>
            </a>
            <Link to="/add">
              <button className="bg-red-500 text-white active:bg-red-600 font-bold  text-xs px-6 py-3 rounded shadow hover:bg-red-700 outline-none focus:outline-none mr-2 mb-1">
                Create
              </button>
            </Link>
          </div>
        </header>
      </div>
    );
}

export default Header
