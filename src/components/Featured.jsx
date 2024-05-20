import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 p-10 ">
        <h1 className='text-6xl font-["Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="w-full px-10">
        <div className="cards w-full flex gap-5 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer p-5 relative w-1/2 h-[85vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              {/* <div className="flex items-center gap-3 pb-3">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                <h1>FYDE</h1>
              </div> */}
              <div className="absolute text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-[Grotesk]">
                <h1 className="absolute flex text-[#cdea68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 ">
                  {"FYDE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
              </div>
              <div className="card w-full h-[67vh] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
              {/* <div className='flex gap-5 p-5 font-["Montreal"] uppercase font-[2vw] py-2'>
                  {['audit', 'copywriting', 'sales deck', 'slides design'].map((item, index) => <h1 className='border-2 p-2 rounded-full'>{item}</h1>)}
              </div> */}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer p-5 relative w-1/2 h-[85vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden">
              {/* <div className="flex items-center gap-3 pb-3">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                <h1>VISE</h1>
              </div> */}
              <div className="absolute text-[#cdea68] right-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-[Grotesk]">
                <h1 className="absolute flex text-[#cdea68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 ">
                  {"VISE".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
              </div>
              <div className="card w-full h-[67vh] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
              {/* <div className='flex gap-5 p-5 font-["Montreal"] uppercase font-[2vw] py-2'>
                {['agency', 'company presentation'].map((item, index) => <h1 className='border-2 p-2 rounded-full'>{item}</h1>)}
              </div> */}
            </div>
          </motion.div>
        </div>
        {/* <div className="cards w-full flex gap-5 mt-10">
          <div className="cardcontainer p-5 relative w-1/2 h-[85vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 pb-3">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                <h1>FYDE</h1>
              </div>
              <h1 className="absolute text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-[Grotesk]">
                {"FYDE".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </h1>
              <div className="card w-full h-[67vh] rounded-xl overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
              <div className='flex gap-5 p-5 font-["Montreal"] uppercase font-[2vw] py-2'>
                  {['audit', 'copywriting', 'sales deck', 'slides design'].map((item, index) => <h1 className='border-2 p-2 rounded-full'>{item}</h1>)}
                </div>
            </div>
          </div>
          <div className="cardcontainer p-5 relative w-1/2 h-[85vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 pb-3">
                <div className="w-[12px] h-[12px] rounded-full bg-white"></div>
                <h1>VISE</h1>
              </div>
              <h1 className="absolute text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-[Grotesk]">
                {"VISE".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </h1>
              <div className="card w-full h-[67vh] rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
              <div className='flex gap-5 p-5 font-["Montreal"] uppercase font-[2vw] py-2'>
                {['agency', 'company presentation'].map((item, index) => <h1 className='border-2 p-2 rounded-full'>{item}</h1>)}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className='botton w-full h-[30vh] flex items-center justify-center '>
        <div className='w-[18vw] border flex items-center justify-between px-10 rounded-full font-["Montreal"]  h-[8vh]'>
          <button>
            <h1 className='uppercase'>view all case studies</h1>
          </button>
          <div className='w-[12px] h-[12px] rounded-full bg-white'></div>
        </div>
      </div> */}
    </div>
  );
};

export default Featured;
