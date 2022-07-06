import React from 'react';
const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
         
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 style={{color:"rgb(255,255,255"}} className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Muskan Shaw
              </h2>
              <p className='mb-4 text-accent'>
                 Full Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Hello stranger! 👋, my name is Muskan and I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people.<br/><br/>

I love to work on exciting projects that test what I've learnt, whilst being exposed to the power and potential of the ever-evolving technologies around us. I'm always looking for better, and more importantly, ethical and accessible ways to solve the common problems we are faced with day-to-day.
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
