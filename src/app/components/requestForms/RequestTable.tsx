import Link from "next/link";
import React from "react";

const RequestTable = () => {
  const formD = [
    {
      icon: "bi bi-emoji-smile-upside-down-fill",
      title: "فرم های ضروری",
      subTitle: [
        {
          title: "دوره رشد مقدماتی",
        },
        {
          title: "دوره رشد",
        },
      ],
    },
    {
      icon: "bi bi-file-earmark",
      title: "اتوماسیون اداری",
      subTitle: [
        {
          title: "راهنما",
        },
        {
          title: "ورود",
        },
      ],
    },
    {
      icon: "bi bi-person-circle",
      title: "درخواست پذیرش",
      subTitle: [
        {
          title: "اطلاعات بیشتر",
        },
        {
          title: "فرم پذیرش",
        },
      ],
    },
  ];
  const MobileMenu = [
    {
      title: "درخواست پذیرش",
    },
    {
      title: "فرم های ضروری",
    },
    {
      title: "اتوماسیون اداری",
    },
    {
      title: "سوالات متداول",
    },
  ];
  return (
    <div className=" h-[220px] w-[96%] mx-auto flex gap-3  mt-12 bg-emerald-200">
      {formD.map((itemForm) => {
        return (
          <div
            className={`flex-1   relative hidden md:block`}
            key={itemForm.title}
          >
            <span className="z-50 h-[50px] w-[50px]  bg-[#99fff7] p-3 mx-auto rounded-md flex justify-center items-center">
              <i
                className={`${itemForm.icon} text-3xl font-extrabold text-[#0a47c9]`}
              ></i>
            </span>
            <div className="flex  -my-3 flex-col py-3 bg-[#0F6983] gap-2 justify-center items-center rounded-lg ">
              <h2 className="text-white ">{itemForm.title}</h2>
              <div className="border border-b-2 w-16"></div>
              <div className="flex gap-1 mt-10 ">
                {itemForm.subTitle.map((subItem) => {
                  return (
                    <div
                      key={subItem.title}
                      className="border   cursor-pointer hover:bg-slate-300 bg-white text-[#087c9c] px-3 py-2 rounded-lg"
                    >
                      {subItem.title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      {/* mobile size */}
      <div className="md:hidden flex gap-2 justify-center mx-auto  items-center h-[130px]">
        {MobileMenu.map((mobileItem) => {
          return (
            <Link
              href={""}
              className="bg-[#087c9c] text-white  h-[60px] py-2 px-3 w-full text-center flex justify-center items-center rounded-md"
              key={mobileItem.title}
            >
              {mobileItem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RequestTable;
