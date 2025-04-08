import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    let data = useSelector((state) => state.Product.cartItem)
    let [userShow, setUserShow] = useState(false)
    let userRef = useRef()

    useEffect(()=> {
        document.addEventListener('click', (e)=> {
            if (userRef.current.contains(e.target)) {
                setUserShow(!userShow)
            } else {
                setUserShow(false)
            }
        })
    },[userShow])

    return (
        <section className='py-[25px] border-[2px]'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="">
                        <h3 className="font-inter font-bold text-[24px] text-[#000000]">Exclusive</h3>
                    </div>
                    <div className="">
                        <ul className='flex gap-[48px] font-poppins font-normal text-[16px] text-[#000000]'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">Shop</Link>
                            </li>
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
                            <div className="relative">
                                <IoCartOutline />
                                {data.length > 0 ? <div className="absolute top-[-9px] right-[-15px] w-[20px] h-[20px] bg-[#000] rounded-full text-[#fff] text-[12px] flex items-center justify-center">
                                    {data.length}
                                </div> : ""}
                            </div>
                            <div className="relative pl-[10px] text-[#DB4444] cursor-pointer" ref={userRef}>
                                <FaUserCircle />
                                {userShow && <div className="rounded-[4px] absolute w-[224px] h-[208px] bg-[#000000af] text-[#FAFAFA] z-50 left-[-180px] top-[35px] font-poppins font-normal text-[14px] pl-[20px] pt-[18px] pr-[13px]">
                                    <div className="">
                                        <h3 className='flex items-center gap-[16px] font-poppins font-normal text-[14px]'><span className='text-[16px]'><FaRegUserCircle/></span>Manage My Account</h3>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar