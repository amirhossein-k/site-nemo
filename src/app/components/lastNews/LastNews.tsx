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
import Link from "next/link";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const lastnews = [
  {
    image:
      "https://uploads.storage.iran.liara.space/slider-hokm-entesab-AFSHIN.jpg",
    title: "معاون علمی، فناوری و اقتصاد دانش بنیان رئیس جمهور منصوب شد",
    tarikh: "2ابان",
  },
  {
    image: "https://uploads.storage.iran.liara.space/700-x-1000.jpg",
    title: "برنامه جامع «تامین مالی جمعی طرح های حوزه خلاق و فرهنگی",
    tarikh: "5مهر",
  },
  {
    image:
      "https://uploads.storage.iran.liara.space/66b85e06b3431-photo-2024-08-11-10-14-11.jpg",
    title: "مهلت شرکت در امریه‌ سربازی وزارت علوم تا ۲۴ مرداد تمدید شد",
    tarikh: "11مرداد",
  },
  {
    image:
      "https://uploads.storage.iran.liara.space/science-based-quota-to-use-military--768x512.webp",
    title: "امریه سربازی در شرکت‌های دانش‌بنیان چه شرایطی دارد؟",
    tarikh: "22مرداد",
  },
  {
    image:
      "https://uploads.storage.iran.liara.space/IMG_20240804_110510-768x432.jpg",
    title: "رونمایی از اپلیکیشن پُل",
    tarikh: "22مرداد",
  },
  {
    image:
      "https://uploads.storage.iran.liara.space/IMG_20240804_105050-5-768x432.jpg",
    title: "دومین جلسه هم‌اندیشی مدیران واحدهای فناور مرکز رشد دزفول برگزار شد",
    tarikh: "22مرداد",
  },
];

const LastNews = () => {
  const swiperReff = useRef<SwiperRef>();

  const [swiperRef, setSwiperRef] = useState<number>(0);
  return (
    <div className=" w-full   bg-[#ffffff80]">
      <div className="header flex flex-row justify-between py-3 px-5" dir="rtl">
        <div className="right  text-black text-lg font-bold">اخرین خبرها</div>
        <Link
          href={""}
          className="left  bg-[#b1b2b3] px-3 py-2 rounded-md text-black text-sm"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="main h-[330px] w-full px-2 flex justify-center items-center">
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
          {lastnews.map((itemNews) => {
            return (
              <SwiperSlide
                className="bg-white rounded-md overflow-hidden shadow-xl  flex flex-col h-full p-1 "
                key={itemNews.title}
                dir="rtl"
              >
                <div className="image w-full h-[200px] relative">
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

export default LastNews;
