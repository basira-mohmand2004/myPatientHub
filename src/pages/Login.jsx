import React from "react";

export default function Login({ onBack }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-purple-200">
      
      {/* بخش بالایی شامل پس‌زمینه  */}
      <div className="w-full bg-gradient-to-tr from-[#1b1c4b] via-[#4d2c77] to-[#aa3a75] pt-12 pb-24 px-4 text-center rounded-b-[45px] md:rounded-b-[60px] shadow-md flex flex-col items-center shrink-0">
        <h1 className="text-white text-2xl md:text-4xl font-extrabold tracking-wide mb-2">
          Welcome to MyPatientHUB!
        </h1>
        <p className="text-purple-200 text-xs md:text-sm font-medium opacity-90">
          We provide smart healthcare services in your hands.
        </p>
      </div>


      <div className="flex-1 flex flex-col items-center px-4 -mt-16 z-10">
        <div className="w-full max-w-[400px] bg-white rounded-3xl p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 text-center">
          <h2 className="text-[#334d6e] text-xs md:text-sm font-bold mb-5">
            Sign in to MyPatientHUB
          </h2>

          {/* (Facebook & Google) کنار هم */}
          <div className="flex justify-center gap-3 mb-5">
            {/* فیسبوک */}
            <button
              type="button"
              className="flex items-center justify-center border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition w-16 h-10 rounded-xl"
            >
              <svg className="w-4 h-4 text-[#1877f2] fill-[#1877f2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            {/* گوگل */}
            <button
              type="button"
              className="flex items-center justify-center border border-slate-200 hover:border-red-400 hover:bg-slate-50 transition w-16 h-10 rounded-xl"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.466 0-6.277-2.85-6.277-6.36s2.81-6.36 6.277-6.36c1.5 0 2.87.53 3.93 1.54L21 4.24C18.68 2.13 15.63 1 12.24 1 6.03 1 1 6.05 1 12.28s5.03 11.28 11.24 11.28c6.5 0 11.53-4.66 11.53-11.28 0-.64-.06-1.26-.19-1.855H12.24z"
                />
              </svg>
            </button>
          </div>

          {/* فرم اصلی ورود */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            <input
              type="text"
              placeholder="Email or Phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs text-slate-700 placeholder:text-slate-400 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-left"
            />

            <input
              type="password"
              placeholder="Please enter your password"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs text-slate-700 placeholder:text-slate-400 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-left"
            />

            {/* دکمه SIGN IN سرخابی */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#c8007e] py-3 text-[11px] font-extrabold tracking-wider text-white hover:bg-[#b0006e] transition"
            >
              SIGN IN
            </button>
          </form>


          <div className="flex justify-between items-center text-[10px] font-bold mt-3.5 px-1 text-slate-400">
            <a href="#forgot" className="hover:text-purple-600 transition">
              Forgot password?
            </a>
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-slate-600 select-none">
              <input type="checkbox" className="rounded border-slate-300 accent-purple-600 h-3.5 w-3.5" />
              Remember me
            </label>
          </div>

          <div className="relative my-4 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <span className="relative bg-white px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">or</span>
          </div>

  
          <button
            type="button"
            className="w-full rounded-xl bg-[#0099ff] py-3 text-[11px] font-extrabold tracking-wider text-white hover:bg-[#0088ee] transition"
          >
            SIGN UP
          </button>

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="mt-4 text-[10px] font-bold text-slate-400 hover:text-purple-600 block mx-auto transition"
            >
              ← Back to Appointments
            </button>
          )}
        </div>
      </div>


      <div className="w-full py-8 px-4 flex flex-col items-center mt-12 shrink-0">
       
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] md:text-[11px] font-bold text-slate-400/90 text-center max-w-3xl">
          <a href="#playstore" className="hover:text-slate-600 transition">Google Play Store APP</a>
          <a href="#appstore" className="hover:text-slate-600 transition">App Store APP</a>
          <a href="#about-hub" className="hover:text-slate-600 transition">About MyPatientHUB</a>
          <a href="#about-us" className="hover:text-slate-600 transition">About Us</a>
          <a href="#blog" className="hover:text-slate-600 transition">Our Blog</a>
        </div>

    
        <div className="w-full max-w-4xl border-t border-slate-200/50 my-4" />
        <p className="text-[10px] font-bold text-slate-400">
          Copyright © 2022 MyPiHUB.
        </p>
      </div>

    </div>
  );
}
