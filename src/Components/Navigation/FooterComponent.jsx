import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

function FooterComponent() {
  useGSAP(()=>{
    gsap.to(".footer",{
      scrollTrigger:{
        trigger:".footer",
        start:"top 50%",
        end:"top bottom",
        pin:true,
        scrub:true,
      }
    })
  })
  return (
    <div className="mt-[5vw] text-white ">
      <div className="w-full  uppercase font-[font2] pb-4 footer bg-black">
        <div className="flex flex-col sm:flex-row w-full justify-between p-4 ">
          <div className="flex gap-3 text-[5vw] items-center">
            <a className="hover:text-[#d3fd50] border-2 rounded-full px-5 leading-[1] pt-1" href="" > fb </a>
            <a className="hover:text-[#d3fd50] border-2 rounded-full px-5 leading-[1] pt-1" href=""> ig </a>
            <a className="hover:text-[#d3fd50] border-2 rounded-full px-5 leading-[1] pt-1" href=""> in </a>
            <a className="hover:text-[#d3fd50] border-2 rounded-full px-5 leading-[1]  pt-1" href=""> be </a>
          </div>
          <div className="sm:mt-0 mt-[350px] pb-4 md:pb-0">
            <h2 className=" hover:text-[#d3fd50] border-2 rounded-full px-4 sm:px-8 text-[17vw] sm:text-[5vw] leading-[1] pt-2 sm:pt-1">
              Contact
            </h2>
          </div>
        </div>
        <div className="sm:mt-[350px] flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center px-4">
          <div className="flex flex-col sm:flex-row justify-between gap-2 md:gap-12 lg:gap-0 text-[13px]  lg:text-[1.1vw] w-full md:w-[70%] cursor-pointer">
            <p className="hover:text-[#d3fd50]">Politique de confidentialité</p>
            <p className="hover:text-[#d3fd50]">Avis de confidentialité</p>
            <p className="hover:text-[#d3fd50]">Rapport éthique</p>
            <p className="hover:text-[#d3fd50]">Options de consentement</p>
          </div>
          <button className="uppercase self-center md:self-auto text-nowrap hover:text-[#d3fd50] active:text-white w-fit text-[15px] md:text-[1.7vw]">
            Retour en haut
          </button>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
