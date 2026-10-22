import React from "react";
import { mainMenu } from "../../../config/Config";
import MenuItem from "./MenuItem";

const Sidebar = ({ collapsed, isMobile, setIsMobile }) => {
  const [isHover, setIsHover] = React.useState(false);
  const isMinimize = !collapsed || isHover;
  return (
    <>
      {isMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setIsMobile(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={` fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-gray-200 px-4 pt-6 transition-all duration-300 ease-in-out  lg:sticky lg:z-20
          ${isMinimize ? "w-64" : "w-[72px]"}
           ${isMobile ? "translate-x-0 bg-white m-1.5 rounded-3xl" : "-translate-x-full "}
          lg:translate-x-0
        `}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >

        {/* logo */}
        <div className="flex gap-1.5 ml-3 items-center h-16">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          {isMinimize ? <span className="text-sm font-normal text-gray-900">
            MyPatientHUB
          </span> : ""
          }
        </div>
        <hr className="shrink-0 border-0 border-solid border-black/10 bg-transparent bg-linear-to-r from-transparent via-[#344767]/50 to-transparent h-px y-4 opacity-25 my-2.5" />

        {/* Navigation */}
        {/* افزودن همرنگ شدن با اسکرول بار و افزایش پدینگ پایینی برای حرکت روان‌تر */}
        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto pb-12 pr-1 custom-scrollbar">
          {mainMenu.map((item, index) => (
            <MenuItem
              key={index}
              path={item.path}
              collapsed={isMinimize}
              title={item.title}
              icon={item.icon}
            />
          ))}
          
          {/* باکس دانلود با مارجین تاپ مناسب برای اسکرول سریع‌تر و نمایش کامل */}
          <div className="bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white p-4 rounded-2xl relative overflow-hidden shadow-md mt-6 mb-4 shrink-0">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
            <span className="text-xl">❓</span>
            <h4 className="font-extrabold text-sm mt-2">Download</h4>
            <p className="text-[10px] text-white/80 mt-1 mb-3">MyFHUB Mobile App</p>
            <div className="flex space-x-2">
              <button className="bg-white/20 hover:bg-white/30 text-white rounded-lg p-2 text-center flex-1 text-[10px] font-bold">App Store</button>
              <button className="bg-white/20 hover:bg-white/30 text-white rounded-lg p-2 text-center flex-1 text-[10px] font-bold">Google Play</button>
            </div>
          </div>
        </nav>

        {/* footer */}
      </div>

    </>
  );
};

export default Sidebar;