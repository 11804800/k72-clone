import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/Projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import FooterComponent from "../Components/Navigation/FooterComponent";
import Navbar from "../Components/Navigation/Navbar";

const ImageData = [
  {
    id: 1,
    item1: {
      name: "Jean Coutu",
      title: "La pharmacie de tout le monde",
      year: 2024,
      image: "../image1.jpg",
    },
    item2: {
      name: "Widescape",
      title: "Widescape",
      year: 2022,
      image: "../image2.jpg",
    },
  },
  {
    id: 2,
    item1: {
      name: "OKA",
      title: "OKA",
      year: 2022,
      image: "../image3.jpg",
    },
    item2: {
      name: "Opto-Reseau",
      title: "Opto-Reseau",
      year: 2021,
      image: "../image4.jpg",
    },
  },
  {
    id: 3,
    item1: {
      name: "Coup Fumant",
      title: "Coup Fumant",
      year: 2021,
      image: "../image5.jpg",
    },
    item2: {
      name: "Biererie Shelton",
      title: "Shelton",
      year: 2020,
      image: "../image6.jpg",
    },
  },
  {
    id: 4,
    item1: {
      name: "Gardaworld",
      title: "Best",
      year: 2021,
      image: "../image7.jpg",
    },
    item2: {
      name: "La Fondation BAnQ",
      title: "A table avec I'histoire",
      year: 2021,
      image: "../image8.jpg",
    },
  },
  {
    id: 5,
    item1: {
      name: "Sollio",
      title: "La Coop federee devient sollio Groupe C..",
      year: 2019,
      image: "../image9.jpg",
    },
    item2: {
      name: "Lamajeure",
      title: "Lamajeure",
      year: 2019,
      image: "../image10.jpg",
    },
  },
  {
    id: 6,
    item1: {
      name: "Orchestre Symhphonique de Montreal",
      title: "Synthesie",
      year: 2019,
      image: "../image11.jpg",
    },
    item2: {
      name: "La Fondation BAnQ",
      title: "100 Temps",
      year: 2020,
      image: "../image12.jpg",
    },
  },
  {
    id: 7,
    item1: {
      name: "Gardaworld",
      title: "Crisis24",
      year: 2021,
      image: "../image13.jpg",
    },
    item2: {
      name: "Opto-Reseau",
      title: "On vous voit comme personne",
      year: 2020,
      image: "../image14.jpg",
    },
  },
  {
    id: 8,
    item1: {
      name: "PME MTL",
      title: "Ouvert",
      year: 2020,
      image: "../image15.jpg",
    },
    item2: {
      name: "Lassonde",
      title: "fruite",
      year: 2019,
      image: "../image16.jpg",
    },
  },
];

function Projects() {
  useEffect(() => {
    function SetTitle() {
      document.title = "Projets — Agence k72";
    }
    SetTitle();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project_scroller",
        start: "top 80%",
        end: "bottom -350%",
        scrub: true,
      },
    });
    tl.from(".Project_div1", { height: "150px", duration: 1 });
    for (let i = 2; i <= 8; i++) {
      tl.from(`.Project_div${i}`, { height: "100px", duration: 1 }, "+=0.2");
    }
  });

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="app-div mt-[400px] sm:mt-[350px] md:mt-[320px]  lg:mt-[280px] xl:mt-[230px]  pt-[10vw]">
          <h1 className="font-[font2] text-[13vw] flex items-start leading-[0.8] uppercase">
            Projets<small className="text-3xl md:text-4xl -mt-1">16</small>
          </h1>
        </div>
        <div className="project_scroller  flex flex-col gap-2 w-full h-full">
          {ImageData.map((item) => {
            return (
              <div
                className={`w-full h-[850px] md:h-[500px] overflow-hidden flex flex-col md:flex-row gap-2 Project_div${item.id}`}
                key={item.id}
              >
                <ProjectCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Projects;
