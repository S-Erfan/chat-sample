import Image from "next/image";
import React from "react";

const navList = [
  { id: 1, name: "معامله P2P", path: "/" },
  { id: 2, name: "معامله سریع", path: "/" },
  { id: 3, name: "ثبت درخواست معامله", path: "/" },
  { id: 4, name: "درباره‌ما", path: "/" },
  { id: 5, name: "تماس با ما", path: "/" },
  { id: 6, name: "وبلاگ", path: "/" },
];

const Header = () => {
  return (
    <>
      <header className="container relative">
        <nav className="flex justify-between items-center my-2">
          <div className="flex justify-start items-center gap-8">
            <Image
              src={"/logo.png"}
              alt="logo"
              className="w-[50px] h-[50px] object-cover"
              width={1000}
              height={1000}
            />
            <ul className="flex justify-start items-center gap-8">
              {navList.map((item) => (
                <li
                  className="w-full text-sm text-[#4F4F4F] whitespace-nowrap"
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <button className="relative group md:hidden">
            <div className="relative flex overflow-hidden items-center justify-center transform transition-all duration-200 ">
              <div className="flex flex-col justify-between w-[35px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-[#FD2F70] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                <div className="bg-[#FD2F70] h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                <div className="bg-[#FD2F70] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>

                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-[#FD2F70] h-[2px] w-7 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-[#FD2F70] h-[2px] w-7 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>

          <div className={"flex "} >

          </div>
        </nav>
        <div
          className="w-full h-fit bg-slate-500 p-[1.5rem] md:hidden "
          dir="rtl"
        >
          <ul className="flex flex-col gap-4 justify-start items-start">
            {navList.map((item) => (
              <li className="w-full " key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
