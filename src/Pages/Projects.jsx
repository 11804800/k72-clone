import React, { useState } from 'react'
import ProjectCard from '../Components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ImageData=[
{
      id:1,
    item1:{
      image:"../image1.jpg"
    },
    item2:{
      "image":"../image2.jpg"
    }
},
{
      id:2,
    item1:{
      image:"../image3.jpg"
    },
    item2:{
      "image":"../image4.jpg"
    }
},
{
      id:3,
    item1:{
      image:"../image5.jpg"
    },
    item2:{
      "image":"../image6.jpg"
    }
},
{
      id:4,
    item1:{
      image:"../image7.jpg"
    },
    item2:{
      "image":"../image8.jpg"
    }
},
{
      id:5,
    item1:{
      image:"../image9.jpg"
    },
    item2:{
      "image":"../image10.jpg"
    }
},
{
      id:6,
    item1:{
      image:"../image11.jpg"
    },
    item2:{
      "image":"../image12.jpg"
    }
},
{
      id:7,
    item1:{
      image:"../image13.jpg"
    },
    item2:{
      "image":"../image14.jpg"
    }
},
{
      id:8,
    item1:{
      image:"../image15.jpg"
    },
    item2:{
      "image":"../image16.jpg"
    }
},
]

function Projects() {

  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:".project_scroller",
        start: "top 60%",
        end: "bottom -350%",
        scrub: true,
      }
    });
    tl.from(".Project_div1",{height:"100px",duration:1})
    for(let i=2;i<=8;i++){
      tl.from(`.Project_div${i}`,{height:"100px",duration:1},"+=0.2")
    }
  });
 
  const [selected,SetSelected]=useState(null);
  return (
   <div className='p-4'>
    <div className='mt-[20vw]'>
      <h1 className='font-[font2] text-[9.5vw] flex items-start leading-[0.8]'>Projets<small className='text-3xl'>16</small></h1>
    </div>
    <div className='project_scroller mt-8 flex flex-col gap-2 w-full h-full'>
      {
        ImageData.map((item)=>{
          return (
            <div className={`w-full h-[500px] overflow-hidden flex gap-2 Project_div${item.id}`} key={item.id}>
              <ProjectCard item={item} SetSelected={SetSelected}/>
            </div>
          )
        })
      }
    </div>
       <div className="h-[600px] bg-black mt-24"></div>
   </div>
  )
}

export default Projects