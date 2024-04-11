import React, { useState, useEffect } from 'react';
import { searchContext } from '../context/context';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        console.log(searchQuery);
    };
    return (
        <>
        <searchContext.Provider value={{searchQuery, setSearchQuery}}>
        <nav className='bg-slate-800'>
            <div className="mycontainer flex justify-between items-center px-5 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>Vault/&gt;</span>
                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold text-white' href="/">Home</a>
                        <a className='hover:font-bold text-white' href="/">About</a>
                        <a className='hover:font-bold text-white' href="/">Contact</a>
                    </li>
                </ul> */}

                {/* <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'>
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                </button> */}
                <div>
                    <input type="text" placeholder="Search by website URL" value={searchQuery} onChange={handleSearchChange} className='rounded-full border border-green-500 w-full p-4 py-1'/>
                </div>


            </div>
        </nav>
        </searchContext.Provider>
        </>
    )
}

export default Navbar
