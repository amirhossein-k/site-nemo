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
  return (
    <div className=" h-[180px] w-[96%] mx-auto flex gap-3  mt-12">
      {/*  */}
      {formD.map((itemForm) => {
        return (
          <div className="flex-1   relative " key={itemForm.title}>
            <span className="z-10 absolute -top-10 bg-[#b7edfcf1] p-3 left-[95px] rounded-md flex justify-center items-center">
              <i className={`${itemForm.icon} text-3xl font-extrabold `}></i>
            </span>
            <div className="flex flex-col bg-[#087c9c] gap-2 justify-center items-center rounded-lg h-full">
              <h2 className="text-white ">{itemForm.title}</h2>
              <div className="border border-b-2 w-16"></div>
              <div className="flex gap-2 mt-10 ">
                {itemForm.subTitle.map((subItem) => {
                  return (
                    <div
                      key={subItem.title}
                      className="border cursor-pointer hover:bg-slate-300 bg-white text-[#087c9c] px-3 py-2 rounded-lg"
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
      {/*  */}
      {/* <div className="form-2"></div>
      <div className="form-3"></div> */}
    </div>
  );
};

export default RequestTable;
