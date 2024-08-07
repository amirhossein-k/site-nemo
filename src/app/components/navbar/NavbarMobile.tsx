"use client";
import Link from "next/link";

const NavbarMobile = () => {
  const menu = [
    {
      menuName: "صفحه اصلی",
      url: "/",
      submenu: [],
    },
    {
      menuName: "  اشنایی با مرکز",
      url: "/asa",
      submenu: [
        {
          menuName: "معرفی مرکز رشد واحدهای فناور دزفول ",
          url: "/eeq",
        },
        {
          menuName: "تعاریف و تاریخچه",
          url: "/qqq",
        },
      ],
    },
    {
      menuName: "  جذب و پذیرش",
      url: "",
      submenu: [
        {
          menuName: "درخواست عضویت",
          url: "",
        },
        {
          menuName: "نمودار فرایند جذب",
          url: "",
        },
        {
          menuName: "نحوه جذب",
          url: "",
        },
      ],
    },
    {
      menuName: "  اخبار",
      url: "",
      submenu: [],
    },
    {
      menuName: " گزارش فعالیت",
      url: "",
      submenu: [],
    },
    {
      menuName: " ارتباط با ما",
      url: "",
      submenu: [],
    },
  ];
  return (
    <nav className=" navbar w-[90%] min-w-full  bg-[#f7f7f7]   flex-row  gap-9    rounded-md md:w-[90%] ">
      <div className="w-[99%]   items-start p-1 flex flex-col">
        <i className="bi bi-x  bg-[#0F6983] rounded-md p-1 flex justify-center  text-2xl cursor-pointer"></i>
        {menu.map((menuItem) => {
          return (
            <div
              key={menuItem.url}
              className=" parent-home w-full  py-2 dropdown dropdown-hover flex flex-row gap-2 justify-center items-center text-black text-sm font-medium  px-2  cursor-pointer"
            >
              <div className=" group w-full   flex ">
                <div
                  tabIndex={0}
                  role="menuitem"
                  className="flex w-full items-start  flex-col m-1   rounded-md gap-2"
                >
                  <div className="flex flex-row group-hover:bg-slate-200 w-full p-2 rounded-md items-center gap-2">
                    <Link
                      href={menuItem.url}
                      className="sm:text-base  text-[14px]"
                    >
                      {menuItem.menuName}
                    </Link>
                    {menuItem.submenu.length > 0 && (
                      <i className="bi bi-caret-down"></i>
                    )}
                  </div>

                  {menuItem.submenu.map((subItem) => {
                    return (
                      <li
                        key={subItem.menuName}
                        className="hover:bg-[#0F6983] shadow-sm  backdrop-filter group-hover:flex hidden hover:text-white w-full h-full p-2 py-3 rounded-md"
                      >
                        <Link href={subItem.url}>{subItem.menuName}</Link>
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarMobile;
