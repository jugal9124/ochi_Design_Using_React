import React from 'react'
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      
      <div className='w-full flex border-t-[2px] pt-10 mt-20 border-[#a1b562] gap-5'>
        <div className="w-full h-[50vh] ">
          <h1 className='font-["Montreal"] text-[20px]'>What you can expect:</h1>
        </div>
        <div className="w-full flex gap-5">
          <div className="w-[60%] h-full gap-10">
            <div className="w-full h-[50%] ">
              <h1 className="text-[20px] w-[80%] font-['Montreal']">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1>
            </div>
            <div className="w-full h-[50%] ">
              <h1 className="text-[20px] w-[80%] font-['Montreal']">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
            </div>
          </div>
          <div className="w-[40%] h-full">
            <div className="font-['Montreal'] mt-10 flex flex-col justify-center pt-[5vh]">
              <a className='block text-xl font-light mt-5 mb-5' href="#">S:</a>
              <a className='block text-xl font-light' href="#">Facebook</a>
              <a className='block text-xl font-light' href="#">Instagram</a>
              <a className='block text-xl font-light' href="#">Twitter</a>
              <a className='block text-xl font-light' href="#">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex border-t-[2px] pt-10 mt-10 border-[#a1b562]'>
        <div className="w-1/2">
          <h1 className='text-6xl'>Our approach:</h1>
          <button className='flex uppercase gap-10 items-center justify-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
          <div className='w-2.5 h-2.5 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#8a9d46] rounded-xl overflow-hidden">
          <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About