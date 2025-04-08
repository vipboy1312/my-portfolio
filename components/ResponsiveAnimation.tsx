"use client";
import React, { useEffect, useState } from "react";

const ResponsiveAnimation = () => {
  const animations = [
    // Animation 1
    <>
      <div className="col-span-5 bg-sky-300 h-[100px] rounded-lg"></div>
      <div className="col-span-5 row-span-4 bg-sky-200 rounded-lg"></div>
    </>,
    // Animation 2
    <>
      <div className="col-span-5 bg-red-300 h-[100px] rounded-lg"></div>
      <div className="col-span-2 row-span-4 bg-red-200 rounded-lg"></div>
      <div className="col-span-3 row-span-4 bg-red-100 rounded-lg"></div>
    </>,
    // Animation 3
    <>
      <div className="col-span-3 bg-teal-300 h-[100px] rounded-lg"></div>
      <div className="col-span-2 bg-teal-200 h-[100px] rounded-lg"></div>
      <div className="col-span-5 row-span-4 bg-teal-100 rounded-lg"></div>
    </>,
    // Animation 4
    <>
      <div className="col-span-5 bg-amber-300 h-[100px] rounded-lg"></div>
      <div className="col-span-2 row-span-3 bg-amber-100 rounded-lg"></div>
      <div className="col-span-3 row-span-3 bg-amber-100 rounded-lg"></div>
      <div className="col-span-5 bg-amber-200 rounded-lg h-[100px]"></div>
    </>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % animations.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [animations.length]);

  return (
    <div className="w-full transition-all duration-500">
      <div className="grid grid-cols-5 grid-rows-5 w-3xl m-auto gap-3">
        {animations[index]}
      </div>
    </div>
  );
};

export default ResponsiveAnimation;
