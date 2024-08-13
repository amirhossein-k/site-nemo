"use client";

import Link from "next/link";

const Navbar = () => {
  const menu = [
    {
      menuName: "صفحه اصلی",
      url: "/",
      submenu: [],
    },
    {
      menuName: "  اشنایی با مرکز",
      url: "",
      submenu: [
        {
          menuName: "معرفی مرکز رشد واحدهای فناور دزفول ",
          url: "",
        },
        {
          menuName: "تعاریف و تاریخچه",
          url: "",
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
    <nav className=" navbar hidden md:flex z-20  bg-[#0F6983]   flex-row justify-center gap-9   border rounded-md md:w-[90%] ">
      {menu.map((menuItem) => {
        return (
          <div
            key={menuItem.url}
            className=" parent-home  dropdown dropdown-hover  flex flex-row gap-2 justify-center items-center text-white text-sm font-medium  border-l-2 last:border-l-0 px-2  cursor-pointer"
          >
            <div className="">
              <div
                tabIndex={0}
                role="menuitem"
                className="flex w-full items-center  gap-2 flex-row m-1"
              >
                <div className="sm:text-[14px]  text-[14px]">
                  {menuItem.menuName}
                </div>
                {menuItem.submenu.length > 0 && (
                  <i className="bi bi-caret-down"></i>
                )}
              </div>
            </div>
            {menuItem.submenu.length > 0 ? (
              <ul
                key={menuItem.menuName}
                tabIndex={0}
                className=" dropdown-content  flex flex-col gap-4 top-8  bg-[#ffffff] rounded-box text-black z-[1] w-[250px]  p-2 shadow"
              >
                {menuItem.submenu.map((subItem) => {
                  return (
                    <li
                      key={subItem.menuName}
                      className="hover:bg-[#0F6983]  hover:text-white w-full h-full p-2 py-3 rounded-md"
                    >
                      <Link href={"/aa"}>{subItem.menuName}</Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
