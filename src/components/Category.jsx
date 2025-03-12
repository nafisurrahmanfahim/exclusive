import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
import Slider from "react-slick";
import { MdCategory } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, cursor: "pointer", display: "block", position: "absolute", top: "0", right: "0" }}
            onClick={onClick}
        ><FaArrowRight /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, cursor: "pointer", display: "block", zIndex: "10", position: "absolute", top: "0", right: "40px" }}
            onClick={onClick}
        ><FaArrowLeft /></div>
    );
}


const Category = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    let [info, setInfo] = useState([])
    let [category, setCategory] = useState([])

    let getData = () => {
        axios.get("https://dummyjson.com/products?sortBy=title&order=asc").then((response) => {
            setInfo(response.data.products);
        })
    }



    useEffect(() => {
        getData()
        setCategory([...new Set(info.map((item) => item.category))])
    }, [info])



    return (
        <section className="pt-[80px]">
            <Container>
                <div className="border-b-[1px] border-[#c2bfbf] pb-[70px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
                        <h3 className='font-semibold font-poppins text-[16px] text-[#DB4444]'>Categories</h3>
                    </div>
                    <div className="pt-[20px]">
                        <h3 className="font-inter font-semibold text-[36px] text-[#000000]">Browse By Category</h3>
                    </div>

                    <Slider {...settings} className='pt-[60px]'>
                        {category.map((item) => (
                            <div className="cursor-pointer border-[#c0bebe] w-[40px] border-[1px] hover:bg-[#DB4444] hover:text-[#FFFFFF] group duration-200 ease-in-out">
                                <div className="flex justify-center pt-[50px] text-[50px] text-[#3b3838] group-hover:text-[#FFFFFF]">
                                    <MdCategory />
                                </div>
                                <div className="h-[100px] flex justify-center border-[1px] capitalize">
                                    <h3 className='group-hover:text-[#FFFFFF] font-normal pt-[15px] font-poppins text-[16px] text-[#000000]'>{item}</h3>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Category