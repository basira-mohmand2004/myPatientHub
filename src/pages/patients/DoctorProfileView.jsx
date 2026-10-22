import React from "react";
import { Rocket, Info, Award, MapPin, Wallet,  } from "lucide-react";
import MapWidget from "./MapWidget"; // فراخوانی کامپوننت نقشه گوگل که در مراحل قبل ساختیم

export default function DoctorProfileView({ doctor,onStartBooking }) {
  // ساخت رفرنس‌های متصل به بخش‌های مختلف صفحه برای اسکرول هوشمند و نرم دقیقاً مطابق با کدهای ارسالی شما


  const menu = [
    { k: "profile", l: "Profile", i: Rocket }, 
    { k: "basic", l: "Basic Info", i: Info }, 
    { k: "cred", l: "Credential", i: Award },
    { k: "loc", l: "Location And Appointment", i: MapPin }, 
    { k: "ins", l: "Insurance Plans Accepted", i: Wallet },
  ];

  const cardStyle = "rounded-xl bg-white p-6 border border-gray-100 shadow-md text-xs text-gray-400 font-medium scroll-mt-6 text-left space-y-3";
  const btnStyle = "rounded-sm bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600  px-6 py-2.5 text-[10px] font-black tracking-wider text-white transition-all cursor-pointer shadow-md inline-block mt-2";

  return (
    <div className="w-full p-4 max-w-[1600px] mx-auto text-left space-y-4">
    

      {/* ✨ سربرگ شیشه‌ای مشخصات پزشک که به زیبایی روی لبه بنر لایوت شما شناور (Float) شده است */}
      <div className="relative z-20 -mt-20 md:-mt-24 mb-6 bg-white/80 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4 border border-white/50 shadow-xl  ml-4">
        <div className="w-16 h-17 rounded-xl overflow-hidden border shadow-inner flex-shrink-0 bg-gray-50">
          <img src={doctor?.photo || doctor?.img} alt={doctor?.name} className="w-full h-full object-cover object-top" />
        </div>
        <div className="text-left space-y-0.5">
          <h1 className="text-base  text-[#344767]  leading-tight">
            {doctor?.name || "DR. Muhammad Shamsir Bin Mohd Aris"}
          </h1>
          <p className="text-xs font-bold text-gray-500">
            {doctor?.specialty || "Obstetrics and Gynaecology"}
          </p>
        </div>
      </div>

      {/* گریدبندی دو ستونه اصلی صفحه سوم زیر کارت شناور */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start w-full relative z-10 pt-2">
        
        {/* منوی دسترسی سریع عمودی سمت چپ با دکمه‌های آیکونیک لایوبل */}
        <aside className=" w-[250px] self-start rounded-xl bg-white p-2 border border-gray-100 shadow-sm md:sticky md:top-6 space-y-0.5">
          {menu.map(({ k, l, i: Icon }) => (
            <button 
              key={k} 
              type="button"
              onClick={() => refs[k].current?.scrollIntoView({ behavior: "smooth" })} 
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-xs  text-gray-500 hover:bg-gray-200 hover:text-gray-500 transition-all text-left cursor-pointer"
            >
              <Icon size={16} className="text-gray-900  flex-shrink-0" />
              <span>{l}</span>
            </button>
          ))}
        </aside>
        {/* ستون سمت راست: باکس‌های مجزا و بزرگ رزومه پزشک کاملاً منطبق با اسکرین‌شات‌ها */}
        <div className="space-y-4">
          
          {/* کارت ۱: درباره من و اطلاعات تماس */}
          <div className={cardStyle}>
            <h3 className="text-xl  text-[#344767]  pb-2">About Me</h3>
            <p className="leading-relaxed text-gray-500 font-medium text-sm">
              {doctor?.name || "DR. Muhammad Shamsir Bin Mohd Aris"} provides healthcare services in {doctor?.specialty || "Obstetrics and Gynaecology"}...
            </p>
            <div  className="space-y-1.5 pt-3 font-semibold text-slate-600">
              <p><span className="text-[#344767] text-sm">Address:</span> {doctor?.address || "Lot 193, 194 Bandar Baru, Malaysia"}</p>
              <p><span className="text-[#344767] text-sm">Phone:</span> {doctor?.phone || "+606-0452 454"}</p>
              <p><span className="text-[#344767] text-sm">Social:</span> <span className="text-[#344767] text-sm cursor-pointer hover:underline">More Details</span></p>
            </div>
          </div>

          {/* کارت ۲: سوابق و مدارک تخصص‌ها */}
          <div className={cardStyle}>
            <h3 className="text-sm text-[#344767] text-xl pb-2">Credential</h3>
            <p className="text-xl text-[#344767] mt-1">Qualifications</p>
            <div className="text-gray-400 font-semibold text-sm space-y-4  pt-1 leading-relaxed">
              <p> cervical(cone) Biopsy</p>
              <p>Colposcopy</p>
              <p> Dilation and curettage</p>
            </div>
          </div>

          {/* کارت ۳: نوبت‌دهی آنلاین و حضوری تفکیک‌شده */}
          <div  className={cardStyle} >
            <h3 className="text-xl text-[#344767]  pb-2">Locations and Appointment</h3>
            
            {/* ویزیت آنلاین */}
            <div className=" pb-4 border-gray-100 ">
              <p className=" text-gray-500 text-xl">Video Visit</p>
              <p className="text-gray-400 leading-relaxed font-medium">See Doctor from your mobile device instead of an in-person appointment Learn about video visits.</p>
              <button type="button" onClick={() => onStartBooking()} className={btnStyle} >SCHEDULE A VIDEO VISIT</button>
            </div>
            </div>
            {/* ویزیت حضوری به همراه نقشه گوگل واقعی دو تکه */}
            <div className={cardStyle} >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 pt-9">
              <div className="space-y-1.5 flex-1">
                <p className=" text-[#344767] text-xl">Office Visits</p>
                <p className="text-gray-400 leading-relaxed font-medium max-w-md">{doctor?.address || "Lot 193, 194 jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan, Malaysia"}</p>
                <p className="text-slate-600 font-semibold text-xs pt-1">Phone: {doctor?.phone || "+606 8500 999"}</p>
                <button type="button" onClick={() => onStartBooking()} className={btnStyle}>SCHEDULE AN OFFICE VISIT</button>
              </div>
              
              {/* کامپوننت نقشه گوگل واقعی به صورت یک مینی‌کادر کشیده روبروی متن حضوری بر اساس اسکرین‌شات اول شما */}
              <div className="w-full lg:w-72 h-36 rounded-2xl overflow-hidden border shadow-inner flex-shrink-0 z-10 relative">
                <MapWidget list={[doctor]} onOpenProfile={() => {}} />
              </div>
            </div>
          
            </div>
          {/* کارت ۴: لیست بیمه‌های پذیرفته شده */}
          <div  className={cardStyle}>
            <h3 className="text-xl text-[#344767]  pb-2">Insurance Plans Accepted</h3>
            <p className="text-gray-400 text-sm">This Provider Accepts the following insurance plans.</p>
            <div className="space-y-1.5 font-black text-gray-500 pt-2 pl-1 ">
              <p>AXA EMedic Plus</p>
              <p>Allianz Diabetic</p>
              <p>Manulife Medical Insurance</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
