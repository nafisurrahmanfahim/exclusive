import React from 'react'
import Container from './Container'
import banner from '../assets/music.png'

const BannerMusic = () => {
  return (
    <section className="pt-[80px]">
        <Container>
            <div className="">
                <img className='w-[100%]' src={banner} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default BannerMusic