import React, { useContext, useEffect, useState } from 'react'
import { ApiData } from '../ContextApi'
import { Link } from 'react-router-dom'

const Post = ({ categoryFilter, allPage }) => {
    let data = useContext(ApiData)
    let [showFilter, setShowFilter] = useState([])

    useEffect(() => {
        let filterSlice = categoryFilter.slice(0, 5)
        setShowFilter(filterSlice)
    }, [categoryFilter])


    return (
        <section className="">
            {showFilter.length > 0 ?
                <>
                    <div className="flex flex-wrap gap-6">
                        {showFilter.map((item) => (
                            <div className="w-[32%] group cursor-pointer pt-[40px] pb-[60px]">
                                <div className="relative">
                                    <div className="flex justify-center">
                                        <Link to={`${item.id}`}>
                                            <img src={item.thumbnail} alt="" />
                                        </Link>
                                    </div>
                                    <div className="absolute top-[12px] left-[12px]">
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
                </> :
                <>
                    <div className="flex flex-wrap justify-between">
                        {allPage.map((item) => (
                            <div className="w-[32%] group cursor-pointer pt-[40px] pb-[60px]">
                                <div className="relative">
                                    <div className="flex justify-center">
                                        <Link to={`${item.id}`}>
                                            <img src={item.thumbnail} alt="" />
                                        </Link>
                                    </div>
                                    <div className="absolute top-[12px] left-[12px]">
                                        <h3 className='py-[4px] px-[12px] bg-[#DB4444] inline-block font-poppins font-normal text-[12px] text-[#FAFAFA] rounded-[4px]'>{item.discountPercentage} %</h3>
                                        <div className=""></div>
                                    </div>

                                    <div className="bg-[#000000] absolute bottom-[70px] w-full h-0 opacity-0 group-hover:opacity-100 group-hover:h-[40px] duration-200 ease-in-out">
                                        <Link to={`${item.id}`}>
                                            <h3 className="py-[8px] text-[#FFFFFF] text-center font-poppins font-medium text-[16px]">Add To Cart</h3>
                                        </Link>
                                    </div>

                                    <div className="pt-[10px]">
                                        <h3 className="font-poppins font-medium text-[16px] text-[#000000]">{item.title}</h3>
                                        <p className="font-poppins font-medium text-[16px] text-[#DB4444] py-[8px]">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </>}
        </section>
    )
}

export default Post