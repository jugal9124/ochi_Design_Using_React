import { motion } from "framer-motion";
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item,index) => {
          return (
          <div className="masker">
          <div className='w-fit flex'>
            {index === 1 && (
              <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }} className='mr-[1vw] w-[9vw] h-[4.8vw] relative top-[1vw] overflow-hidden rounded-md bg-red-500'>
                <img className='w-full h-full object-cover overflow-hidden' src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80& w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </motion.div>)}
          <h1 className="flex items-center uppercase text-[7.5vw] leading-[6vw] font-['Grotesk']">
            {item}
            </h1>
          </div>
        </div>
        );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
        <div className="start flex items-center gap-5">
          <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-lg uppercase rounded-full'>Start The Project</div>
          <div className='w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center'>
            <span className='rotate-[45deg]'>
          <FaArrowUp />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage