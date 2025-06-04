'use client';

import Cpu from '@/public/Cpu.svg';
import GraphicCard from '@/public/GraphicCard.svg';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';
import React from 'react';

const Hero = () => {
  const cardref = React.useRef<HTMLDivElement>(null);
  const GraphicCardref = React.useRef<HTMLImageElement>(null);
  const cpuRef = React.useRef<HTMLImageElement>(null);
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  useGSAP(() => {
    // Card Animation
    gsap.to(cardref.current, {
      scrollTrigger: {
        scrub: true,
        pin: true,
        end: '+=1000',
      },
      y: '70vh',
      width: '476px',
      height: '390px',
    });
    // Graphic Card Image Animation
    gsap.to(GraphicCardref.current, {
      rotate: -25,
      duration: 0.5,
      opacity: 1,
      y: '-150px',
      x: '50px',
    });
    // Graphic Card Image Animation
    gsap.to(cpuRef.current, {
      duration: 0.5,
      opacity: 1,
      rotate: 10,
      y: '150px',
      x: '50px',
    });
  });

  return (
    <header className="w-screen h-screen flex justify-center items-center flex-wrap gap-[300px] mb-[calc(20vh-196px)]">
      <div className="relative">
        <Image
          src={GraphicCard}
          alt="Graphic Card"
          width={200}
          className="absolute right-[50px] top-[100px] opacity-[0]"
          ref={GraphicCardref}
        />
        <Image
          src={Cpu}
          alt="cpu"
          ref={cpuRef}
          width={150}
          className="absolute opacity-[0] top-[200px] right-[50px]"
        />
        <p className="w-[475px] text-wrap text-[96px] font-medium ">
          Your Technology News
        </p>
      </div>
      <div
        className="relative w-[625px] h-[233px]  flex flex-col gap-[20px] pt-[30px] pb-[30px] pl-[40px] pr-[40px]  text-[#FFFFFF] bg-[#0022FF] rounded-[8px]"
        ref={cardref}
      >
        <h2 className="text-[40px] font-medium">Nvidia relesed new RTX 5060</h2>
        <p className="leading-[35px] text-[20px] font-medium">
          On monday nvida released new RTX 5060 is said it is new area of
          graphics cards. On the other hand pepole say that optimal peroformes
          it is only aches with dells 4.0{' '}
          <b className="font-semibold underline cursor-pointer">Read More</b>
        </p>
        <p className="text-[#0022FF] absolute top-[-30px] text-[20px] left-[0] font-medium">
          HOT TOPIC
        </p>
      </div>
    </header>
  );
};

export default Hero;
