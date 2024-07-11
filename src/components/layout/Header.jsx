import React from 'react'

function Header() {
    return (
        <React.Fragment>
            <div className='bg-[#FFFFFF] w-full h-16 px-10 hidden md:flex items-center gap-10 text-sm font-light'>
                <a href="#">Blogs</a>
                <a href="#">News</a>
                <a href="#">Help center</a>
                <a href="#">Customer care</a>
            </div>
            <div className='bg-[#FFFFFF] w-full h-14 px-10 flex items-center'>
                <h3 className='text-xl font-semibold'>Dashboard</h3>
            </div>
        </React.Fragment>
    )
}

export default Header
