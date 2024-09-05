import React from "react";
import SwiperTemp from "../swiperTemp/SwiperTemp";

import list_Inform from "@/app/_data/Inform.json";
const Inform = () => {
  return (
    <SwiperTemp
      list={list_Inform}
      header="اطلاعات"
      heightParent="530px"
      heightImage="350px"
    />
  );
};

export default Inform;
