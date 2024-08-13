"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SwiperCore from "swiper";
import { useState, useRef } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { type Swiper as SwiperRef } from "swiper";
import Image from "next/image";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const lastnews = [
  {
    image: "https://uploads.storage.iran.liara.space/Flower-girls-day-1.jpg",
    title: "معاون علمی، فناوری و اقتصاد دانش بنیان رئیس جمهور منصوب شد",
    tarikh: "2ابان",
  },
  {
    image: "https://uploads.storage.iran.liara.space/Flower-girls-day-1.jpg",
    title: "زیس1",
    tarikh: "5مهر",
  },
  {
    image: "https://uploads.storage.iran.liara.space/Flower-girls-day-1.jpg",
    title: "امسر",
    tarikh: "11مرداد",
  },
  {
    image: "https://uploads.storage.iran.liara.space/Flower-girls-day-1.jpg",
    title: "زهرا",
    tarikh: "22مرداد",
  },
  {
    image: "https://uploads.storage.iran.liara.space/Flower-girls-day-1.jpg",
    title: "زهرا",
    tarikh: "22مرداد",
  },
  {
    image: "https://uploads.storage.iran.liara.space/Flower-girls-day-1.jpg",
    title: "زهرا",
    tarikh: "22مرداد",
  },
];

const LastNews = () => {
  const swiperReff = useRef<SwiperRef>();

  const [swiperRef, setSwiperRef] = useState<number>(0);
  return (
    <div className=" w-full">
      <div className="header flex flex-row justify-between py-3 px-5" dir="rtl">
        <div className="right  text-black text-lg font-bold">اخرین خبرها</div>
        <div className="left  bg-gray-400 px-3 py-2 rounded-md text-black text-sm">
          مشاهده همه
        </div>
      </div>
      <div className="main h-[330px]  px-2 flex justify-center items-center">
        {/* <div className="image">image</div>
        <div className="body">
          <div className="title">title</div>
          <div className="tarikh">20مرداد</div>
        </div> */}

        <Swiper
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          centeredSlides={true}
          spaceBetween={20}
          //   pagination={{
          //     type: "fraction",
          //   }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper  flex "
        >
          {lastnews.map((itemNews) => {
            return (
              <SwiperSlide
                className="bg-green-300  flex flex-col "
                key={itemNews.title}
                dir="rtl"
              >
                <div className="image w-full h-[200px] relative">
                  <Image alt="" src={itemNews.image} fill />
                </div>
                <div className="body  flex flex-col items-stretch relative bg-rose-300 h-[120px] gap-2">
                  <div className="title  bg-blue-300 p-2">{itemNews.title}</div>
                  <div className="tarikh bg-sky-600 absolute p-2 bottom-0 w-full ">
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

export default LastNews;
