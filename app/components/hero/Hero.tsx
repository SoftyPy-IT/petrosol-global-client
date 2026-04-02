"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function Hero() {

  const slides = [
    {
      title: "Powering the Future of",
      highlight: "Sustainable Energy",
      desc: "We deliver innovative solar and renewable energy solutions that drive sustainability and long-term global impact.",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    },
    {
      title: "Building World-Class",
      highlight: "Infrastructure",
      desc: "From concept to execution, we develop modern infrastructure that supports economic growth and global connectivity.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      title: "Driving Innovation in",
      highlight: "Logistics & Operations",
      desc: "Smart logistics systems and efficient operations ensuring seamless supply chains across international markets.",
      img: "https://images.unsplash.com/photo-1413882353314-73389f63b6fd",
    },
  ];

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh]">

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        speed={1000}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            {/* Background Image */}
            <div className="relative w-full h-full">

              <Image
                src={slide.img}
                alt="Hero"
                fill
                className="absolute w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">

                <div className="max-w-xl text-white">

                  <p className="text-(--primary-light) font-semibold mb-3">
                    Energy • Infrastructure • Global Solutions
                  </p>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-(--font-heading)">
                    {slide.title} <br />
                    <span className="text-(--primary-light)">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="mt-6 text-white/80 text-sm sm:text-base leading-7">
                    {slide.desc}
                  </p>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">

                    <a
                      href="/activities"
                      className="bg-(--primary) text-white px-6 py-3 rounded-lg hover:bg-(--primary-dark) transition"
                    >
                      Explore Projects
                    </a>

                    <a
                      href="/contact"
                      className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
                    >
                      Contact Us
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
