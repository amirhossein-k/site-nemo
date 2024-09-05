"use server";

import Image from "next/image";
import Header from "./components/header/Header";
import Link from "next/link";
import SwiperMain from "./components/swiper/SwiperMain";
import dataSlider from "./_data/slider-data.json";
import RequestTable from "./components/requestForms/RequestTable";
import LastNews from "./components/lastNews/LastNews";
import Hemayat from "./components/hemayat/Hemayat";
import SwiperTemp from "./components/swiperTemp/SwiperTemp";
import Inform from "./components/inform/Inform";
import Why from "./components/why/Why";
import Information from "./components/information/Information";

export default async function Home() {
  return (
    <main className=" min-h-screen ">
      <Header />
      <SwiperMain data={dataSlider} />
      <RequestTable />
      <LastNews />
      <Hemayat />
      <Inform />
      <Why />
      <Information />
    </main>
  );
}
