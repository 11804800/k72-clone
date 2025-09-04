import React, { useState } from 'react'

function ProjectCard({item,SetSelected}) {
  const [titleActive,setTitleActive]=useState(false);
  const [titleActive1,setTitleActive1]=useState(false);

  function MouseOver(item)
  {
    SetSelected(item);
    setTitleActive(true)
  }

  function MouseLeave()
  {
    SetSelected(null);
    setTitleActive(false);
  }
  function MouseOver1(item)
  {
    SetSelected(item);
    setTitleActive1(true)
  }

  function MouseLeave1()
  {
    SetSelected(null);
    setTitleActive1(false);
  }

  return (
    <>
    <div onMouseOver={()=>{MouseOver(item.item1)}} onMouseLeave={()=>{MouseLeave()}} className='relative h-full w-1/2'>
      <img src={item.item1.image} className={`w-[100%] h-full ${titleActive && "rounded-[40px]"} object-cover duration-400 transition-all`}/>
      <div className={`${titleActive ? 'opacity-100 bg-black/25 rounded-[40px]':'opacity-0'} transition-all duration-300 absolute top-0 w-full flex justify-center items-center h-full`}>
          <h1 className='border-2 rounded-full w-fit border-white text-white font-[font2] text-[4vw] px-5 leading-[0.8] pt-2 uppercase'>Voir Le Projet</h1>
      </div>
    </div>
    <div onMouseOver={()=>{MouseOver1(item.item2)}} onMouseLeave={()=>{MouseLeave1()}} className='relative h-full w-1/2'>
      <img src={item.item2.image} className={`w-[100%] h-full ${titleActive1 && "rounded-[40px]"} object-cover duration-400 transition-all`}/>
      <div className={`${titleActive1 ? 'opacity-100 bg-black/25 rounded-[40px]':'opacity-0'} transition-all duration-300 absolute top-0 w-full flex justify-center items-center h-full`}>
          <h1 className='border-2 rounded-full w-fit border-white text-white font-[font2] text-[4vw] px-5 leading-[0.8] pt-2 uppercase'>Voir Le Projet</h1>
      </div>
    </div>
    </>
  )
}

export default ProjectCard