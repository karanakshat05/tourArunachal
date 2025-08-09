"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"; // Added EffectCoverflow
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; 

import Image from "next/image";

const cards = [
    {
      title: "Explore Tawang Monastery",
      image: "/assets/tawang.jpeg",
    },
    {
      title: "Attend Ziro Music Festival",
      image: "/assets/ziro-music.jpg",
    },
    {
      title: "River Rafting in Siang River",
      image: "/assets/siang.jpg",
    },
    {
      title: "Wildlife Safari in Namdapha National Park",
      image: "/assets/namdapha.jpg",
    },
    {
      title: "Trek to Sela Pass",
      image: "/assets/sela.jpg",
    },
  ];
  const Carousel = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-200 p-10">
        
        {/* --- Heading Section --- */}
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-700">
        Featured Experiences
      </h2>
  
        {/* --- Carousel Section --- */}
        <div className="w-full max-w-7xl">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={3}
            loop
            navigation
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            className="mySwiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-xl transition-transform duration-700">
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-grey">
                    <h3 className="text-xl font-serif font-bold text-teal-700">{card.title}</h3>
                    <p className="text-sm font-serif text-gray-600 mt-2">Explore Now</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
        <style jsx global>{`
      .swiper-pagination {
            margin-top: 30px;
            position: relative;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color:rgb(238, 238, 238);
          } make it a little unique 


        `}</style>
      </div>
    );
  };
  
  export default Carousel;
  