import React from "react";

const hema = [
  {
    icon: "bi bi-1-circle",
    title: "مالکیت معنوی",
    icone: "bi bi-app",
    subtitle: "ورود به سامانه",
  },
  {
    icon: "bi bi-2-circle",
    title: "ثبت نام شرکت‌های دانش‌بنیان",
    icone: "bi bi-app",
    subtitle: "ورود به سامانه",
  },
  {
    icon: "bi bi-3-circle",
    title: "سامانه جریان اقتصادی نوین (جان)",
    icone: "bi bi-app",
    subtitle: "ورود به سامانه",
  },
  {
    icon: "bi bi-4-circle",
    title: "صنایع خلاق",
    icone: "bi bi-app",
    subtitle: "ورود به سامانه",
  },
];
const Hemayat = () => {
  return (
    <div className=" md:w-[80%]  mx-auto grid text-black  grid-cols-2 lg:grid-cols-4 gap-2 p-1 my-2 h-[300px] lg:h-[200px]">
      {hema.map((item) => {
        return (
          <div className="row-span-2 shadow-md rounded-lg flex flex-col justify-center items-center gap-2 bg-[#ffffff]">
            <div className="icon">
              <i className={`${item.icon} text-[#0F6983]`}></i>
            </div>
            <div className="title md:text-lg text-sm font-bold ">
              {item.title}
            </div>
            <div className="icone">
              <i className={`${item.icone} text-[#0F6983]`}></i>
            </div>
            <div className="subtitle text-[12px] ">{item.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Hemayat;
