import React from 'react';
import style from "./About.module.css"

// import contact data
import { contact } from '../data';


const Contact = () => {
  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
          Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, give me a call 🇮🇳  or send me an  email
          </p>
        </div>
        <h3 style={{fontSize:"30px",textAlign:"center"}}>Let's Cnnect:</h3>
           <br/>
           {/* <div style={{color:" aqua"}} className={style.sociallinks}>
           <div style={{display:"flex",gap:"20px",alignItems:"center"}}>
            <img style={{height:"30px",width:"30px"}} src="https://www.logolynx.com/images/logolynx/c7/c7076127e9f68296f973bd84b0a31bd8.png"/>
             <p>princesahil0065@gmail.com</p>
            </div>
            
            <div style={{display:"flex",gap:"20px",alignItems:"center",marginTop:"10px"}}>
            <img style={{height:"30px",width:"30px"}} src="https://th.bing.com/th/id/R.6e154f80072e0f134105ec35599d74a6?rik=p3KpmJrvVX6JGQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2flinkedin-blue-style-logo-png-0.png&ehk=wvZF1KWydRWToX1l0QPiWyvaz71uLa5pE71lsVfQKbE%3d&risl=&pid=ImgRaw&r=0"/>
             <p>https://www.linkedin.com/in/muskan2507/</p>
            </div>
            <div style={{display:"flex",gap:"20px",alignItems:"center",marginTop:"10px"}}>
            <img style={{height:"30px",width:"30px"}} src="https://th.bing.com/th/id/R.c963626c145ea660ba7ceee666789c0a?rik=%2b8pQxk8WvGd0Fw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG28.png&ehk=SD294NKjXG3JppRn7fPyo6czUcyiLUWeIci5Y0RO%2fbk%3d&risl=&pid=ImgRaw&r=0"/>
             <p>https://github.com/muskan2507</p>
            </div>
            <div style={{display:"flex",gap:"20px",alignItems:"center",marginTop:"10px"}}>
            <img style={{height:"30px",width:"30px"}} src="https://www.apemockups.com/wp-content/uploads/edd/2017/09/medium-icon-white-on-black.png"/>
             <p>https://medium.com/@princesahil0065</p>
            </div>
           </div> */}
           <br/><br/>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' />
              <input className='input' type='email' placeholder='Your email' />
            </div>
            <input className='input' type='text' placeholder='Subject' />
            <textarea
              className='textarea'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
