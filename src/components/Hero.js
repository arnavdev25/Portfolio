import React from 'react';


const Hero = () => {
  return (
    <section
      id='home'
      style={{paddingTop:"50px"}}
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Muskan! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            I am a passionate Full Stack Web Developer who focuses on writing clean
and user-friendly applications using
MERN
and some other cool libraries and frameworks.
            </p>
            <a style={{marginTop:"-20px"}} target="_blank" href="https://drive.google.com/file/d/1p2y7YCALzFwYGGqkLvXbjHqY-VYECQIp/view?usp=sharing" className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all' rel="noreferrer">
              Resume
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-center h-full' style={{marginTop:"0px"}}>
            <img 
            style={{borderRadius:"50%",height:"350px"}}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHMpkkw35Desg/profile-displayphoto-shrink_400_400/0/1653725262727?e=1658966400&v=beta&t=zxdjBGsLEGFxEVa_pDAJp5wK0t3jBm0uPAsVpl-tSxQ" alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
