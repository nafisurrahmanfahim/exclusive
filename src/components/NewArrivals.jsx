import React from 'react'
import Container from './Container'
import play from '../assets/playStation.png'
import woman from '../assets/realWoman.png'
import speaker from '../assets/speaker.png'
import perfume from '../assets/perfume.png'

const NewArrivals = () => {
    return (
        <section className="">
            <Container>
                <div className="pb-[140px] border-b-[1px] border-[#c4c0c0]">
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
                        <h3 className='font-semibold font-poppins text-[16px] text-[#DB4444]'>Featured</h3>
                    </div>
                    <div className="pt-[20px] pb-[60px]">
                        <h3 className="font-inter font-semibold text-[36px] text-[#000000]">New Arrival</h3>
                    </div>

                    <div className="h-[610px] flex justify-between">
                        <div className="relative w-[49%] bg-[#000000] h-[100%] group cursor-pointer">
                            <img className='absolute bottom-0 left-[50px]' src={play} alt="" />
                            <div className="text-[#fff] absolute top-[446px] left-[52px] duration-500 ease-in-out group-hover:top-[60%] ">
                                <h3 className='font-inter font-semibold text-[24px]'>PlayStation 5</h3>
                                <p className="w-[242px] font-normal font-poppins text-[14px] pt-[10px] pb-[14px]">Black and White version of the PS5 coming out on sale.</p>
                                <a className="font-medium font-poppins text-[16px] border-b-[1px]">Shop Now</a>
                            </div>
                        </div>
                        <div className="w-[48%] flex flex-col gap-10">
                            <div className="h-[46.7%] bg-[#0C0C0C] relative group cursor-pointer">
                                <img className='absolute right-[0] group-hover:right-[15%] duration-500 ease-in-out' src={woman} alt="" />
                                <div className="text-[#FAFAFA] ">
                                    <h3 className='absolute top-[134px] left-[24px] font-inter font-semibold text-[24px]'>Women’s Collections</h3>
                                    <p className="absolute top-[178px] left-[24px] w-[242px] font-normal font-poppins text-[14px] pt-[10px] pb-[14px]">Black and White version of the PS5 coming out on sale.</p>
                                    <a className="absolute top-[236px] left-[24px] font-medium font-poppins text-[16px] border-b-[1px]">Shop Now</a>
                                </div>
                            </div>
                            <div className="h-[45%] flex pl-[30px]">
                                <div className="w-[45%]">
                                    <img src={speaker} alt="" />
                                </div>
                                <div className="w-[45%]">
                                    <img src={perfume} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default NewArrivals