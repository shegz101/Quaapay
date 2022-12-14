import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className='flex flex-row justify-between bg-[#000000] w-[60%] ml-[20%] mr-[20%] h-14 
        rounded-[40px] items-center fixed z-20'>
            {/* Quaapay Logo */}
            <div className='flex flex-row space-x-8 pl-4'>
                <div className='pt-3.5'>
                    <img className='h-5' src={logo} alt="logo"/>
                </div>
                <nav className="text-[#FFFFFF] font-semibold mb-3 pt-[14px]">
                    <ul className='flex flex-row space-x-4 text-[13px]'>
                        <li>Community</li>
                        <li>Features</li>
                        <li>Docs</li>
                        <li>Terms & policy</li>
                    </ul>
                </nav>
            </div>

            <div className='pr-2'>
                <button className='bg-[#4e4e4e] h-10 rounded-[41px] w-40 opacity-95 text-[14px] text-[#FFFFFF]'>Download app</button>
            </div>
        </div>
    )
}

export default Header;
