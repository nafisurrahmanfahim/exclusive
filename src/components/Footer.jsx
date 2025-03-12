import React from 'react'
import Container from './Container'
import scan from '../assets/scan.png'
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="bg-[#000000] pt-[80px] pb-[124px]">
            <Container>
                <div className="text-[#FAFAFA] font-poppins flex">
                    <div className="w-[23%]">
                        <h3 className="font-medium text-[20px] pb-[24px]">Exclusive</h3>
                        <h3 className="font-medium text-[20px] pb-[24px]">Subscribe</h3>
                        <p className="font-normal text-[16px] pb-[16px]">Get 10% off your first order</p>
                        <div className="w-[217px] relative">
                            <input className='w-full h-[48px] bg-transparent border-[1px] pl-[16px] pt-[2px] rounded-[4px]' type="text" placeholder='Enter your email'/>
                            <div className="absolute top-[50%] translate-y-[-50%] right-[15px] text-[22px]">
                                <LuSendHorizontal/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[23%]">
                        <h3 className="font-medium text-[20px] pb-[24px]">Support</h3>
                        <p className="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className="">exclusive@gmail.com</p>
                        <p className="">+88015-88888-9999</p>
                    </div>
                    <div className="w-[23%]">
                        <h3 className="font-medium text-[20px] pb-[24px]">Account</h3>
                        <p className="">My Account</p>
                        <p className="">Login / Register</p>
                        <p className="">Cart</p>
                        <p className="">Wishlist</p>
                        <p className="">Shop</p>
                    </div>
                    <div className="w-[23%]">
                        <h3 className="font-medium text-[20px] pb-[24px]">Quick Link</h3>
                        <p className="">Privacy Policy</p>
                        <p className="">Terms Of Use</p>
                        <p className="">FAQ</p>
                        <p className="">Contact</p>
                    </div>
                    <div className="w-[26%]">
                        <h3 className="font-medium text-[20px] pb-[24px]">Download App</h3>
                        <p className="">Save $3 with App New User Only</p>
                        <img src={scan} alt="" />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer