import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, VideoIcon, MapPinPlusInside, Video } from "lucide-react";

// ۱. بخش اول: مینی‌کارت پزشک بالای تقویم سمت راست
export function DocMini({ doctor, visit }) {
  return (
    <div className="flex gap-4  pb-4 text-left">
      <div className="h-25 w-25 rounded-xl overflow-hidden  shadow-md shrink-0 bg-gray-50">
        <img src={doctor?.photo || doctor?.img} className="h-full w-full object-cover object-top" alt={doctor?.name} />
      </div>
      <div className="text-[11px] text-gray-400 font-medium space-y-0.5">
        <p className="font-bold text-slate-800 text-xs leading-tight">{doctor?.name}</p>
        <p>{doctor?.specialty}</p>
        <p>{doctor?.role || doctor?.type}</p>
        <p className="text-fuchsia-600 text-sm pt-0.5">
          {visit === "video" ? "Video Visit" : "Office Visit"}
        </p>
      </div>
    </div>
  );
}

// ۲. بخش دوم: کامپوننت تقویم کاملاً پویا و زنده لواتیبل منطبق بر تصویر
export function MiniCalendar({ value, onChange }) {
  const [cur, setCur] = useState(new Date(value.getFullYear(), value.getMonth(), 1));
  const start = (cur.getDay() + 6) % 7;
  const first = new Date(cur.getFullYear(), cur.getMonth(), 1 - start);
  const days = Array.from({ length: 42 }, (_, i) => new Date(first.getFullYear(), first.getMonth(), first.getDate() + i));
  const shift = (m) => setCur(new Date(cur.getFullYear(), cur.getMonth() + m, 1));
  const today = new Date(); 
  today.setHours(0, 0, 0, 0);

  return (
    <div className="border border-gray-900  p-4 text-center space-y-3 bg-white w-full">
      <div className="flex justify-between items-center px-1 font-black text-slate-700">
        <div className="flex gap-1">
          <button type="button" onClick={() => shift(-12)} className="hover:text-fuchsia-600 cursor-pointer"><ChevronsLeft size={14} /></button>
          <button type="button" onClick={() => shift(-1)} className="hover:text-fuchsia-600 cursor-pointer"><ChevronLeft size={14} /></button>
        </div>
        <span className="text-xs tracking-wide">{cur.toLocaleString("en", { month: "long", year: "numeric" })}</span>
        <div className="flex gap-1">
          <button type="button" onClick={() => shift(1)} className="hover:text-fuchsia-600 cursor-pointer"><ChevronRight size={14} /></button>
          <button type="button" onClick={() => shift(12)} className="hover:text-fuchsia-600 cursor-pointer"><ChevronsRight size={14} /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-[13px] font-black text-gray-800">
        {["MO", "TUE", "WE", "THU", "FRI", "SAT", "SUN"].map((w) => <span key={w} className="py-1">{w}</span>)}
        {days.map((d, i) => {
          const isSelected = d.toDateString() === value.toDateString();
          const isOut = d.getMonth() !== cur.getMonth();
          const isPast = d < today;
          return (
            <button 
              key={i} 
              disabled={isPast} 
              type="button"
              onClick={() => onChange(d)}
              className={`p-1.5  text-center text-[13px] transition-all ${
                
                isSelected ? "bg-blue-600 text-white  shadow-md" : 
                isOut ? "opacity-40 hover:bg-gray-100" : "hover:bg-gray-200 text-slate-700 cursor-pointer"
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ۳. بخش سوم: کامپوننت اصلی مدیریت صفحه چهارم
export default function AppointmentDetails({ doctor, onBack, onNext }) {
  const [booking, setBooking] = useState({ visit: "video", date: new Date(2026, 9, 19), newPatient: "Yes" });

  return (
    <div className="w-full p-4 max-w-[1600px] mx-auto text-left relative z-50 space-y-8">
      
   
      {/* 📍 استپر خطی افقی کاملاً مطابق با اسکرین‌شات اول */}
      <div className="relative w-full max-w-4xl mx-auto py-4">
        <div className="absolute top-6 left-[15%] right-[15%] h-px bg-gray-200 z-0"></div>
        <div className="relative z-10 flex justify-between items-start w-full">
          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-4 h-4 rounded-full bg-[#344767] border-4 border-[#344767] shadow-sm mb-2"></div>
            <span className="text-[15px]  text-[#344767]">Appointment Details</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center opacity-30">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 mb-2"></div>
            <span className="text-[15px] font-medium text-gray-400">Patient Information</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center opacity-30">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 mb-2"></div>
            <span className="text-[15px] font-medium text-gray-400">Finalize Appointment</span>
          </div>
        </div>
      </div>
      {/* گریدبندی ستون چپ و راست */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xl space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start w-full pt-2">
        
        {/* باکس تنظیمات ویزیت سمت چپ */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-gray-100 shadow-xl  min-h-[350px] w-full">
          <h2 className="text-xl font-bold text-[#CB0C9F]">Schedual an Appointment</h2>
          
          <div className="space-y-2 text-xs">
            <p className=" text-xl">Are you new to this doctor</p><br></br>
            <div className="flex space-x-6 font-bold text-gray-400">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="new" checked={booking.newPatient === "Yes"} onChange={() => setBooking({ ...booking, newPatient: "Yes" })} className="text-fuchsia-600 focus:ring-fuchsia-500" />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="new" checked={booking.newPatient === "No"} onChange={() => setBooking({ ...booking, newPatient: "No" })} className="text-fuchsia-600 focus:ring-fuchsia-500" />
                <span className="text-gray-700">No, I have visited before</span>
              </label>
            </div>
          </div>

          {/* کلیدهای مثبت‌دار کپسولی نوع ویزیت */}
          <div className="space-y-2 pt-2">
            <p className="text-2xl font-bold text-[#CB0C9F]">Type of Appointment ?</p><br></br>
            <div className="flex space-x-3 pt-1 bg-gray-100 rounded-xl ">
              <button 
                type="button" 
                onClick={() => setBooking({ ...booking, visit: "video" })}
                className={`flex items-center gap-2 px-10 py-2.5 rounded-xl text-xl transition-all cursor-pointer ${booking.visit === "video" ? "bg-white  text-slate-800 shadow-sm" : "bg-none"}`}
              >
                <VideoIcon/> Video Visit
              </button>
              <button 
                type="button" 
                onClick={() => setBooking({ ...booking, visit: "office" })}
                className={`flex items-center gap-2 px-10 py-2.5 rounded-xl text-xl   transition-all cursor-pointer ${booking.visit === "office" ? "bg-white  text-slate-800 shadow-sm" : "bg-none"}`}
              >
               <MapPinPlusInside /> Office Visit
              </button>
            </div>
          </div>

          {/* بخش متون متغیر منطبق بر اسکرین‌شات دوم و سوم شما */}
          <div className="pt-6 border-t border-gray-100 space-y-1">
            <h3 className=" text-gray-500 text-xl font-bold  capitalize flex items-center gap-2">
              {booking.visit === "video" ? "Video Visit" : "Office Visit"}
              <span className="text-fuchsia-600">{booking.visit === "video" ? <Video /> : <MapPinPlusInside />}</span>
            </h3>
            <p className="text-sm text-gray-500font-medium leading-relaxed pt-4">
              {booking.visit === "video" 
                ? "Video visit let you see a doctor from your mobile device instead of in-person" 
                : doctor?.address || "Nilai, Negeri Sembilan, Malaysia"}
            </p>
            <p className="text-sm text-[#CB0C9F] font-bold pt-4">
              {booking.visit === "video" ? "Next Available: Tuesday, March 22" : "Appointment Available next: Monday"}
            </p>
          </div>
        </div>

        {/* ستون سمت راست: مشخصات خلاصه پزشک و مینی تقویم زنده لواتیبل */}
        <div className="lg:col-span-1 w-full">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xl space-y-5 w-full">
            <DocMini doctor={doctor} visit={booking.visit} />
            <MiniCalendar value={booking.date} onChange={(date) => setBooking({ ...booking, date }) }/>
            
            {/* دکمه سرمه‌ای رنگ NEXT هماهنگ با عکس دوم */}
            <div className="pt-2 flex justify-end">
              <button 
                type="button" 
                onClick={() => onNext(booking)} 
                className="bg-[#1e293b] hover:bg-slate-800 text-white font-black py-2.5 px-6 rounded-sm transition-all shadow-md text-xs tracking-wider cursor-pointer"
              >
                NEXT
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
   </div>
  );
}
