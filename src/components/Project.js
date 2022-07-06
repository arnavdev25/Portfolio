/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import style from "./About.module.css"
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col ' >
      <div className='mb-8'>
        <img className='rounded-2xl' style={{height:"250px"}} src={item.image} alt='' />
      </div>
     
      <h3 className='text-2xl font-semibold capitalize mb-5'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.desc}
      </p><br/>
      <p className='capitalize text-accent text-sm mb-3'>Created using {item.category}</p>
      <div style={{display:"flex",gap:"20px"}}>
      <a style={{display:"flex", gap:"5px",alignItems:"center",width:"170px",background:"chocolate",padding:"5px 20px",marginTop:"10px",color:"aqua"}} href={item.git} target="_blank">Source Code <FiGithub/> </a>
      <a style={{display:"flex", gap:"5px",alignItems:"center",width:"130px",background:"red",padding:"5px 20px",marginTop:"10px",color:"aqua"}} href={item.dep} target="_blank">Website <FiDribbble/> </a>

      </div>
    </div>
  );
};

export default Project;
