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
import SwiperTemp from "../swiperTemp/SwiperTemp";

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
    <SwiperTemp
      list={lastnews}
      header="اخرین اخبار"
      heightParent="330px"
      heightImage="200px"
    />
  );
};

export default LastNews;
