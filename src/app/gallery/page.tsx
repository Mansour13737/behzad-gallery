"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Image from "next/image";

const gold = [
  { id: 1, src: "/gallery/1.png" },
  { id: 2, src: "/gallery/2.png" },
  { id: 3, src: "/gallery/3.png" },
  { id: 4, src: "/gallery/4.png" },
  { id: 5, src: "/gallery/5.png" },
  { id: 6, src: "/gallery/6.png" },
  { id: 7, src: "/gallery/7.png" },
  { id: 8, src: "/gallery/8.png" },
  { id: 9, src: "/gallery/9.png" },
  { id: 10, src: "/gallery/10.png" },
];

const watch = [
  { id: 11, src: "/gallery/11.png" },
  { id: 12, src: "/gallery/12.png" },
  { id: 13, src: "/gallery/13.png" },
  { id: 14, src: "/gallery/14.png" },
  { id: 15, src: "/gallery/15.png" },
  { id: 16, src: "/gallery/16.png" },
];

const arch = [
  { id: 17, src: "/gallery/17.png" },
  { id: 18, src: "/gallery/18.png" },
  { id: 19, src: "/gallery/19.png" },
  { id: 20, src: "/gallery/20.png" },
];

const other = [
  { id: 21, src: "/gallery/21.png" },
  { id: 22, src: "/gallery/22.png" },
  { id: 23, src: "/gallery/23.png" },
];

// ⬇️ هوک برای تشخیص sticky شدن
function useSticky(ref: React.RefObject<HTMLElement | null>) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: "-1px 0px 0px 0px" }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [ref]);

  return isSticky;
}

export default function Gallery() {
  const goldRef = useRef<HTMLDivElement | null>(null);
  const watchRef = useRef<HTMLDivElement | null>(null);
  const archRef = useRef<HTMLDivElement | null>(null);
  const otherRef = useRef<HTMLDivElement | null>(null);

  const goldSticky = useSticky(goldRef);
  const watchSticky = useSticky(watchRef);
  const archSticky = useSticky(archRef);
  const otherSticky = useSticky(otherRef);

  return (
    <div className="flex flex-col w-full">
      {/* GOLD */}
      <div
        id="gold"
        ref={goldRef}
        className={`sticky top-0 z-10 w-full bg-gray-700 text-[#be9858] font-display text-center font-light transition-all duration-300 ${goldSticky ? "py-3 text-[24px] shadow-lg backdrop-blur" : "py-6 text-[30px]"
          }`}
      >
        <span>GOLD & JEWELRY</span>
      </div>
      <ul className="flex flex-col">
        {gold.map((item) => (
          <li key={item.id}>
            <Image
              src={item.src}
              width={2888}
              height={1626}
              alt="Pic"
              className="w-full"
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      {/* WATCH */}
      <div
        id="watch"
        ref={watchRef}
        className={`sticky top-0 z-10 w-full bg-gray-700 text-[#be9858] font-display text-center font-light transition-all duration-300 ${watchSticky ? "py-3 text-[24px] shadow-lg backdrop-blur" : "py-6 text-[30px]"
          }`}
      >
        <span>WATCH</span>
      </div>
      <ul className="flex flex-col">
        {watch.map((item) => (
          <li key={item.id}>
            <Image
              src={item.src}
              width={2888}
              height={1626}
              alt="Pic"
              className="w-full"
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      {/* ARCHITECTURE */}
      <div
        id="architecture"
        ref={archRef}
        className={`sticky top-0 z-10 w-full bg-gray-700 text-[#be9858] font-display text-center font-light transition-all duration-300 ${archSticky ? "py-3 text-[24px] shadow-lg backdrop-blur" : "py-6 text-[30px]"
          }`}
      >
        <span>ARCHITECTURE</span>
      </div>
      <ul className="flex flex-col">
        {arch.map((item) => (
          <li key={item.id}>
            <Image
              src={item.src}
              width={2888}
              height={1626}
              alt="Pic"
              className="w-full"
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      {/* OTHER */}
      <div
        id="other"
        ref={otherRef}
        className={`sticky top-0 z-10 w-full bg-gray-700 text-[#be9858] font-display text-center font-light transition-all duration-300 ${otherSticky ? "py-3 text-[24px] shadow-lg backdrop-blur" : "py-6 text-[30px]"
          }`}
      >
        <span>OTHER</span>
      </div>
      <ul className="flex flex-col">
        {other.map((item) => (
          <li key={item.id}>
            <Image
              src={item.src}
              width={2888}
              height={1626}
              alt="Pic"
              className="w-full"
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      {/* BACK BUTTON */}
      <Button
        hrf="/"
        cls="border-[0.5px] fixed border-black/80 text-black/90 bottom-2 right-[50%] translate-x-[50%] w-fit py-1 px-7 font-display tracking-widest rounded-[3px] text-[14px] backdrop-blur-[1.5px]"
      >
        BACK
      </Button>
    </div>
  );
}