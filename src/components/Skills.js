import React from 'react';
import style from "./About.module.css"

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className='bg-secondary py-12'>
      <div className='container mx-auto'>
      <h1 style={{textAlign:"center",fontSize:"35px",color:"white"}}>SKILLS</h1><br/><br/>
        <div
          className={style.grid}
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex flex-col items-center justify-center'
                key={index}
              >
                <img className='lg:h-20 ' src={skill.image} alt='' />
                <h4>{skill.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
