"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { type Swiper as SwiperRef } from "swiper";
import Image from "next/image";
import Link from "next/link";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

interface lists {
  image: string;
  title: string;
  tarikh: string;
}

const SwiperTemp = ({
  list,
  header,
  heightParent,
  heightImage,
}: {
  list: Array<lists>;
  header: string;
  heightParent: string;
  heightImage: string;
}) => {
  const swiperReff = useRef<SwiperRef>();
  return (
    <div className=" w-full   bg-[#ffffff80]">
      <div className="header flex flex-row justify-between py-3 px-5" dir="rtl">
        <div className="right  text-black text-lg font-bold">{header}</div>
        <Link
          href={""}
          className="left  bg-[#b1b2b3] px-3 py-2 rounded-md text-black text-sm"
        >
          مشاهده همه
        </Link>
      </div>
      <div
        className={`main h-[${heightParent}] w-full px-2 flex justify-center items-center`}
      >
        {/* <div className="image">image</div>
    <div className="body">
      <div className="title">title</div>
      <div className="tarikh">20مرداد</div>
    </div> */}

        <Swiper
          // dir="rtl"
          //   onSwiper={setSwiperRef}
          onSwiper={(swiper) => {
            swiperReff.current = swiper;
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1224: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          // centeredSlides={true}
          // spaceBetween={20}
          //   pagination={{
          //     type: "fraction",
          //   }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper  flex h-full"
        >
          {list &&
            list.map((itemNews) => {
              return (
                <SwiperSlide
                  className="bg-white rounded-md overflow-hidden shadow-xl  flex flex-col h-full p-1 "
                  key={itemNews.title}
                  dir="rtl"
                >
                  <div className={`image w-full h-[${heightImage}] relative`}>
                    <Image alt="" src={itemNews.image} fill />
                  </div>
                  <div className="body text-black flex flex-col items-stretch relative  h-[120px] ">
                    <div className="title   p-2">{itemNews.title}</div>
                    <div className="tarikh  absolute flex gap-2 p-2 bottom-0 w-full ">
                      <i className="bi bi-calendar"></i>
                      {itemNews.tarikh}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperTemp;
