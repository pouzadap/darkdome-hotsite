"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import CarouselImg01 from "@/public/images/carousel-icon-01.svg";
import CarouselImg02 from "@/public/images/carousel-icon-02.svg";
import CarouselImg03 from "@/public/images/carousel-icon-03.svg";
import CarouselImg04 from "@/public/images/carousel-icon-04.svg";
import CarouselImg05 from "@/public/images/carousel-icon-05.svg";

// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Navigation]);

export default function TestimonialsCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper(".stellar-carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section id="benefits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-200 pb-3">
                Centralize. Analyze. Protect.
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              The Benefits
            </h2>
            <p className="text-lg text-slate-400">
              Discover the benefits of Darkdome —centralized alerts, AI-driven
              analysis and automated protection— all designed to strengthen your
              security and simplify your cybersecurity operations.
            </p>
          </div>

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-linear-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-linear-to-r after:from-transparent after:to-slate-900 after:to-20%">
            <div className="stellar-carousel swiper-container group">
              <Highlighter
                className="swiper-wrapper w-fit"
                refresh={swiperInitialized}
              >
                {/* Carousel items */}
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg01}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Reduce Alert Fatigue
                        </div>
                        <div className="text-slate-400 mb-3">
                          Filter out noise and focus only on critical threats
                          with intelligent, AI-powered alert prioritization.
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg02}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Faster Incident Response
                        </div>
                        <div className="text-slate-400 mb-3">
                          Accelerate your response with recommended actions
                          delivered in real time.
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg03}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Improved Visibility
                        </div>
                        <div className="text-slate-400 mb-3">
                          Gain a unified, real-time view of your entire security
                          landscape across all integrated systems.
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg04}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Vendor-Agnostic Integration
                        </div>
                        <div className="text-slate-400 mb-3">
                          Connect and manage alerts from any security vendor
                          seamlessly in one centralized platform.
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-blue-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg05}
                        width={56}
                        height={56}
                        alt="Icon 05"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Automated Enhancements
                        </div>
                        <div className="text-slate-400 mb-3">
                          Instantly acti targeted defenses to protect your
                          environment the moment a threat is detected.
                        </div>
                      </div>
                      <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0"
                        >
                          Learn More{" "}
                          <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-blue-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-blue-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
