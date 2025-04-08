import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Slider from "react-slick";
import banner from "../assets/banner.jpg"
import axios from 'axios';
import { ApiData } from './ContextApi';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    let [category, setCategory] = useState([])
    let [categoryShow, setCategoryShow] = useState(false)
    let [info, setInfo] = useState([])

    let getData = () => {
        axios.get("https://dummyjson.com/products").then((response) => {
            setInfo(response.data.products);
        })
    }

    useEffect(() => {
        setCategory([...new Set(info.map((item) => item.category))])
        getData()
    }, [info])



    return (
        <section>
            <Container>
                <div className="flex justify-between">
                    <div className="py-[40px] w-[25%]">
                        <div className="">
                            <p onClick={() => setCategoryShow(!categoryShow)} className='flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]'>Woman’s Fashion <span className='ml-[50px]'>{categoryShow == true ? <FaAngleDown /> : <FaAngleRight />}</span></p>
                            {categoryShow &&
                                <ul>
                                    {category.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            }
                        </div>

                        <div className="pt-[16px]">
                            <p className="flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]">Men’s Fashion</p>
                        </div>

                        <div className="pt-[16px]">
                            <p className="flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]">Electronics</p>
                        </div>

                        <div className="pt-[16px]">
                            <p className="flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]">Home & Lifestyle</p>
                        </div>

                        <div className="pt-[16px]">
                            <p className="flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]">Sports & Outdoor</p>
                        </div>

                        <div className="pt-[16px]">
                            <p className="flex items-center cursor-pointer font-poppins font-normal text-[16px] text-[#000000]">Groceries & Pets</p>
                        </div>
                    </div>

                    <div className="w-[75%]">
                        <Slider {...settings}>
                            <div className="">
                                <a href="#">
                                    <img className='w-full' src={banner} alt="" />
                                </a>
                            </div>

                            <div className="">
                                <a href="#">
                                    <img className='w-full' src={banner} alt="" />
                                </a>
                            </div>

                            <div className="">
                                <a href="#">
                                    <img className='w-full' src={banner} alt="" />
                                </a>
                            </div>

                            <div className="">
                                <a href="#">
                                    <img className='w-full' src={banner} alt="" />
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner