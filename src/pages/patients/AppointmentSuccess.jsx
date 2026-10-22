import React from 'react';

export default function AppointmentSuccess({ onReset }) {
  // تعریف استایل‌های ثابت دکمه‌ها منطبق با رنگ‌بندی تصویر شما
  const backBtnStyle = "rounded-sm bg-gray-200 hover:bg-gray-300 px-6 py-2.5 text-xs font-black text-gray-600 cursor-pointer transition-all";
  const sendBtnStyle = "rounded-sm bg-[#1e293b] hover:bg-slate-800 px-6 py-2.5 text-xs font-black text-white cursor-pointer transition-all shadow-md";

  return (
    <div className="w-full p-4 max-w-[1600px] mx-auto text-left relative z-10 space-y-8">
      
      {/* 📍 استپر خطی افقی کاملاً پر شده (هر ۳ دایره تیره سرمه‌ای متصل به هم) */}
      <div className="relative w-full max-w-4xl mx-auto py-4">
        <div className="absolute top-6 left-[15%] right-[15%] h-px bg-[#344767] z-0"></div>
        <div className="relative z-10 flex justify-between items-start w-full">
          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-4 h-4 rounded-full bg-[#344767] border-4 border-[#344767] shadow-sm mb-2"></div>
            <span className="text-[11px] font-bold text-[#344767]">Appointment Details</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-4 h-4 rounded-full bg-[#344767] border-4 border-[#344767] shadow-sm mb-2"></div>
            <span className="text-[11px] font-bold text-[#344767]">Patient Information</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-4 h-4 rounded-full bg-[#344767] border-4 border-[#344767] shadow-sm mb-2"></div>
            <span className="text-[11px] font-bold text-[#344767]">Finalize Appointment</span>
          </div>
        </div>
      </div>

      {/* 📦 باکس اصلی اعلام موفقیت‌آمیز بودن ثبت نوبت کاملاً منطبق بر عکس شما */}
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl space-y-4 text-left w-full">
        <h2 className="text-xl  text-[#344767] tracking-tight">
          Appointment Scheduled
        </h2>
        <p className="text-[20px] text-[#344767]   tracking-wide">
          A confirmation eamil has been sent to your inbox.
        </p>

        {/* دکمه‌های کنترل پایینی داخل کادر سپید رنگ */}
        <div className="pt-6 flex justify-between items-center w-full border-t border-gray-50 mt-4">
          <button 
            type="button" 
            onClick={onReset} 
            className={backBtnStyle}
          >
            BACK
          </button>
          <button 
            type="button" 
            onClick={onReset} 
            className={sendBtnStyle}
          >
            SEND
          </button>
        </div>
      </div>

    </div>
  );
}
