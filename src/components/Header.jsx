import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <header className="py-[15px] bg-[#000000]">
      <Container>
        <div className="flex items-center gap-[8px]">
          <h3 className="mx-auto text-[#FAFAFA] font-normal font-poppins text-[14px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-bold text-[14px] text-[#FAFAFA]'>ShopNow</span></h3>
            <h3 className="text-end text-[#fff]">
              <select className='bg-transparent w-[78px]'>
                <option className='bg-[#000000]'>English</option>
                <option className='bg-[#000000]'>Bangla</option>
                <option className='bg-[#000000]'>spanish</option>
              </select>
            </h3>
        </div>
      </Container>
    </header>
  )
}

export default Header