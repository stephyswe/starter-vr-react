import React from 'react';

// import components
import Users from '../components/Users';

// import image
import Img from '../assets/img/banner-img.png';

const Banner = () => {
  return (
    <section className='pt-24 pb-12 text-center lg:pt-48 lg:pb-0 lg:text-left'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div>
            <h1
              className='mb-8 text-3xl font-bold lg:text-5xl lg:leading-snug'
              data-aos='fade-down'
              data-aos-delay='500'
              data-aos-once="true"
            >
              Let's Explore <br /> Three-Dimensional Visually.
            </h1>
            <p
              className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'
              data-aos='fade-down'
              data-aos-delay='600'
              data-aos-once="true"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              doloribus inventore harum cumque blanditiis minima.
            </p>
            {/* btns */}
            <div
              className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'
              data-aos='fade-down'
              data-aos-delay='700'
              data-aos-once="true"
            >
              <button className='btn'>Get it now</button>
              <a
                className='transition ease-out border-b-2 border-transparent hover:border-white'
                href='#t'
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          {/* image */}
          <div data-aos='fade-up' data-aos-delay='800' data-aos-once="true">
            <img src={Img} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;