import Image from "next/image";
import Header from "./components/header/Header";
import Link from "next/link";
import SwiperMain from "./components/swiper/SwiperMain";
import dataSlider from "./_data/slider-data.json";
import RequestTable from "./components/requestForms/RequestTable";
export default function Home() {
  return (
    <main className=" min-h-screen ">
      <Header />
      <SwiperMain data={dataSlider} />
      <RequestTable />
    </main>
  );
}
