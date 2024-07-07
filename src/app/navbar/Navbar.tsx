import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#000000] border-b-2 flex justify-around text-white items-center h-[4rem] sticky top-0'>
    <div className='logo flex gap-1 text-white items-center'>
        <img src="/logo.png" className='w-14' alt='logo'></img>
        <h1 className='text-lg' >YT</h1>
    </div>
    <ul>
        <li>HOME</li>
    </ul>
    </nav>
  )
}

export default Navbar