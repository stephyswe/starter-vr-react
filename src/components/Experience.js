import React from 'react'

// import images
import Img1 from '../assets/img/exp-img1.png'
import Img2 from '../assets/img/exp-img2.png'

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex items-center flex-1 space-x-6 lg:space-x-12">
            {/* images */}
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offset="400"
              data-aos-once="true"
            >
              <img src={Img1} alt="" />
            </div>
            <div className="self-end" data-aos="fade-up" data-aos-once="true">
              <img src={Img2} alt="" />
            </div>
          </div>
          {/* text */}
          <div
            className="flex flex-col items-start justify-center flex-1 mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-once="true"
          >
            <h2 className="mb-6 text-3xl font-bold">
              New Experience In Playing Games
            </h2>
            <p className="mb-6 font-secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              illum minus asperiores aliquid dolore deserunt maiores ipsa iure.
              Hic, nam!
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
