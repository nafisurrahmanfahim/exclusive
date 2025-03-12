import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'

const OurProduct = () => {

    let [info, setInfo] = useState([])
    let getdata = () => {
        axios.get("https://dummyjson.com/products?sortBy=title&order=asc").then((response) => {
            setInfo(response.data.products);
        })
    }


    useEffect(() => {
        getdata()
    }, [])

    return (
        <section className='pt-[81px] pb-[140px]'>
            <Container>
                <div className="">
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
                        <h3 className='font-semibold font-poppins text-[16px] text-[#DB4444]'>Our Products</h3>
                    </div>
                    <div className="pt-[20px] pb-[60px]">
                        <h3 className="font-inter font-semibold text-[36px] text-[#000000]">Explore Our Products</h3>
                    </div>
                    <div className="flex justify-between flex-wrap">
                        {info.slice(15, 23).map((item) => (
                            <div className="w-[24%] group cursor-pointer pt-[40px] pb-[60px]">
                                <div className="relative">
                                    <div className="flex justify-center">
                                        <img src={item.thumbnail} alt="" />
                                    </div>
                                    <div className="absolute top-0 left-0">
                                        <h3 className='py-[4px] px-[12px] bg-[#DB4444] inline-block font-poppins font-normal text-[12px] text-[#FAFAFA] rounded-[4px]'>{item.discountPercentage} %</h3>
                                        <div className=""></div>
                                    </div>

                                    <div className="bg-[#000000] absolute bottom-[70px] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-[40px] duration-200 ease-in-out">
                                        <h3 className="py-[8px] text-[#FFFFFF] text-center font-poppins font-medium text-[16px]">Add To Cart</h3>
                                    </div>

                                    <div className="pt-[10px]">
                                        <h3 className="font-poppins font-medium text-[16px] text-[#000000]">{item.title}</h3>
                                        <p className="font-poppins font-medium text-[16px] text-[#DB4444] py-[8px]">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <h3 className="font-poppins font-medium text-[16px] py-[16px] px-[48px] bg-[#DB4444] inline-block text-[#FAFAFA] rounded-[4px]">View All Products</h3>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurProduct