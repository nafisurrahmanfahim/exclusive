import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <section className="">
      <Container>
        <nav class="flex pt-[90px] pb-[50px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link to="/" href="#" class="inline-flex items-center text-[18px] font-medium text-[#767676]">
                Home
              </Link>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <Link to="/shop" href="#" class="ms-1 text-[18px] font-medium text-[#767676]">Products</Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="font-poppins">
            <p className='font-bold text-[20px] text-[#262626] pb-[15px]'>Shop by Category</p>
            <ul>
              <li></li>
            </ul>
        </div>
      </Container>
    </section>
  )
}

export default ProductPage