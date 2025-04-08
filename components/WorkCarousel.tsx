"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { works } from "@/data";

const WorkCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 520; // Adjust based on card width + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 cursor-pointer"
      >
        <BiLeftArrowAlt size={24} />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 cursor-pointer"
      >
        <BiRightArrowAlt size={24} />
      </button>

      {/* Scrollable container */}
      <div
        ref={carouselRef}
        className="flex gap-5 p-10 overflow-x-hidden scroll-smooth scrollbar-hide"
      >
        {/* Each Card */}
        {works.map((card, index) => (
          <a href={card.href} target="_blank" key={index}>
            <Card className="w-[500px] h-[400px] py-4 shadow-sm cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg p-5 rounded-xl">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-xl uppercase font-bold">{card.title}</p>
                {card.desc && <p className="text-sm opacity-50">{card.desc}</p>}
              </CardHeader>
              {card.img && (
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt={card.title}
                    className="object-cover rounded-xl mt-5"
                    src={card.img}
                    width={500}
                    height={200}
                  />
                </CardBody>
              )}
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkCarousel;
