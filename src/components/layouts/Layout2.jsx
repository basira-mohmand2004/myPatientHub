import React, { useState } from "react";
import { Home, LogOut, Settings, Bell, Menu } from "lucide-react"; 
import Footer from "./Footer";
import Sidebar from "./sidebar/Sidebar";
import SearchInput from "../ui/SearchInput"; 

// امپورت تصویر پس‌زمینه 
import headerbg from "../../assets/curved0.d146ec6e9401aa9d52c5.jpg";

const Layout2 = ({ children, crumb, activeStep }) => {
    // حفظ استیت‌های سایدبار اصلی
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobilSidebar = () => setIsMobile(!isMobile);
    const toggleSidebar = () => setCollapsed(!collapsed);

    // بررسی وضعیت صفحات برای رندر فرم جستجو
    const showSearchBanner = crumb === "Find Doctor" || crumb === "Search Results" || !crumb || activeStep === 1;
    const isBookingStep = crumb === "Appointment Details" || crumb === "Patient Information" || crumb === "Appointment Scheduled" || crumb === "Make Appointment" || activeStep >= 4;

    return (
        <div className="flex min-h-screen w-full bg-gray-100 text-left font-sans">
            {/* سایدبار */}
            <Sidebar collapsed={collapsed} isMobile={isMobile} setIsMobile={setIsMobile} />
            
            {/* 📌 کاهش پدینگ کلی محیط اصلی از p-4 md:p-6 به p-3 md:p-4 و حذف space-y-6 برای کنترل دستی فواصل */}
            <main className="flex-1 p-3 md:p-4 min-w-0 flex flex-col gap-4">
                
                {/* بنر اصلی هدر */}
                <header 
                  className="w-full rounded-xl bg-cover bg-center relative px-4 md:px-10 py-1 shadow-md flex flex-col justify-between min-h-[280px] md:min-h-[300px] h-auto gap-1 pb-10 shrink-0"  
                  style={{ backgroundImage: `url(${headerbg})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-900/85 via-fuchsia-600/85 to-blue-500/100 rounded-xl pointer-events-none mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-pink-500/50 mix-blend-screen rounded-xl pointer-events-none"></div>

                  {/* بخش آدرس خطی فوقانی و کنترل سایدبارها */}
                  <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 items-start sm:items-center justify-between relative z-10 py-1 mb-2">
                    <div className="flex items-center gap-2 md:gap-3 text-white select-none">
                      <button 
                        type="button" 
                        onClick={toggleMobilSidebar} 
                        className="block lg:hidden text-white cursor-pointer p-1.5 hover:bg-white/10 rounded-lg transition-all"
                      >
                        <Menu size={20} />
                      </button>
                      <button 
                        type="button" 
                        onClick={toggleSidebar} 
                        className="hidden lg:block text-white cursor-pointer p-1.5 hover:bg-white/10 rounded-lg transition-all mr-1"
                      >
                        <Menu size={20} />
                      </button>
                      <div className="flex flex-col items-start text-[11px] font-bold">
                        <div className="flex items-center gap-1.5 opacity-80">
                          <Home size={13} /> / <span className="capitalize">{crumb || "Find Doctor"}</span>
                        </div>
                        <p className="text-sm font-black text-white mt-1 tracking-wide capitalize">
                          {crumb || "Find Doctor"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 md:gap-4 relative z-30">
                      <SearchInput />
                      <div className="flex items-center gap-1 text-white font-bold text-xs cursor-pointer hover:opacity-80 transition-all whitespace-nowrap">
                        <LogOut size={15} /> <span>Log out</span>
                      </div>
                      <Settings size={16} className="text-white cursor-pointer hover:scale-105 transition-transform" />
                      <Bell size={16} className="text-white cursor-pointer hover:scale-105 transition-transform" />
                    </div>
                  </div>

                  {/* عناوین بزرگ مرکزی هدر */}
                  <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full my-2 text-center">
                    {showSearchBanner && (
                      <div className="text-center text-white mb-2 flex flex-col gap-1.5 px-2">
                        <h1 className="text-xl md:text-3xl font-bold tracking-tight">Find a Doctor</h1>
                        <p className="text-[11px] md:text-sm text-white/90 font-bold tracking-wide">Search Doctors and schedule an appointment</p>
                      </div>
                    )}
                    {isBookingStep && (
                      <div className="text-center text-white mb-2 px-2">
                        <h1 className="text-xl md:text-3xl font-black tracking-wide">Schedule Appointment</h1>
                      </div>
                    )}
                  </div>

                  {/* فرم جستجو */}
                  {showSearchBanner ? (
                    <div className="relative z-20 mx-auto flex flex-col md:flex-row items-center gap-2 p-3 md:p-4 w-[98%] max-w-5xl mt-2">
                      <div className="w-full md:flex-1 bg-white rounded-md flex items-center px-4 shadow-sm border border-gray-100">
                        <input 
                          type="text" 
                          placeholder="Search a doctor by name, specialty" 
                          className="w-full bg-transparent py-1.5 text-[13px] text-gray-500 placeholder-gray-400  focus:outline-none" 
                        />
                      </div>
                      <div className="w-full md:w-[280px] bg-white rounded-md flex items-center px-4 shadow-sm border border-gray-100">
                        <input 
                          type="text" 
                          placeholder="Zip Code or Neighborhood" 
                          className="w-full bg-transparent py-1.5 text-[13px] text-gray-500 placeholder-gray-400  focus:outline-none" 
                        />
                      </div>
                      <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
                        <button type="button" className="flex-1 md:w-32 bg-cyan-400 hover:bg-cyan-500 text-slate-700 text-[12px] py-1.5 px-2 rounded-md transition-all shadow-md cursor-pointer tracking-wider text-center uppercase whitespace-nowrap">
                          CURRENT
                        </button>
                        <button type="submit" className="flex-1 md:w-32 bg-cyan-400 hover:bg-cyan-500 text-slate-700 text-[12px] py-1.5 px-2 rounded-md transition-all shadow-md cursor-pointer tracking-wider text-center uppercase whitespace-nowrap">
                          SEARCH
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[10px] w-full bg-transparent"></div>
                  )}

                </header>

                {/* 📌 بخش اصلی نمایش محتوای صفحات داخلی (پدینگ اضافی pt-2 حذف شد تا کامپوننت‌ها کاملاً به هدر بچسبند) */}
                <div className="w-full relative z-10 flex-1">
                    {children}
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default Layout2;
