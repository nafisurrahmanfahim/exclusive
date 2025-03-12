import React from 'react'
import Container from './Container'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <section className='py-[25px] border-[2px]'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="">
                        <h3 className="font-inter font-bold text-[24px] text-[#000000]">Exclusive</h3>
                    </div>
                    <div className="">
                        <ul className='flex gap-[48px] font-poppins font-normal text-[16px] text-[#000000]'>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Sign Up</li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <input type="search" className='w-[243px] h-[38px] border-[1px] pl-[20px] font-poppins font-normal text-[12px] text-[#000000]' placeholder='What are you looking for?' />
                            <div className="absolute top-[50%] translate-y-[-50%] right-[10px] text-[#000000] text-[18px]">
                                <CiSearch />
                            </div>
                        </div>
                        <div className="pl-[24px] flex text-[25px] gap-[10px]">
                            <CiHeart />
                            <IoCartOutline/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar