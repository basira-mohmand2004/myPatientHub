import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { DocMini } from "./AppointmentDetails"; // استفاده از کارت مینی پزشک کامپوننت قبل

// المان فرم اینپوت استاندارد هماهنگ با کادر و فونت‌های ظریف اسکرین‌شات شما
const inpStyle = "w-full rounded-sm border border-gray-200 bg-white px-3 py-2.5 text-xs  outline-none focus:border-blue-300 transition-all  mt-1";

function F({ label, ...props }) {
  return (
    <label className="block text-[11px]  text-[#344767] text-left">
      {label}
      <input {...props} className={inpStyle} />
    </label>
  );
}

export default function PatientInformation({ doctor, booking, onBack, onNext }) {
  const [form, setForm] = useState({ first: "", last: "", email: "", confirm: "", phone: "" });
  const [payGateway, setPayGateway] = useState("mastercard");
  const [hasPaid, setHasPaid] = useState(false);
  const [acceptRules, setAcceptRules] = useState(false);

  const handleFieldChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  
  const processPayment = () => {
    setHasPaid(true);
    alert("Payment successful!");
  };

  return (
    <div className="w-full p-4 max-w-[1600px] mx-auto text-left relative z-10 space-y-8">
      
      {/* 📍 استپر خطی افقی کاملاً تراز با مرحله دوم نوبت‌دهی (دایره ۱ و ۲ تیره) */}
      <div className="relative w-full max-w-4xl mx-auto py-4">
        <div className="absolute top-6 left-[15%] right-[15%] h-px bg-gray-200 z-0"></div>
        <div className="absolute top-6 left-[15%] w-[35%] h-0.5 bg-[#344767] z-0"></div>
        <div className="relative z-10 flex justify-between items-start w-full">
          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-4 h-4 rounded-full bg-[#344767] border-4 border-[#344767] shadow-sm mb-2"></div>
            <span className="text-[11px] font-bold text-[#344767]">Appointment Details</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center">
            <div className="w-4 h-4 rounded-full bg-[#344767] border-4 border-[#344767] shadow-sm mb-2"></div>
            <span className="text-[11px] font-bold text-[#344767]">Patient Information</span>
          </div>
          <div className="flex flex-col items-center flex-1 text-center opacity-30">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 mb-2"></div>
            <span className="text-[11px] font-medium text-gray-400">Finalize Appointment</span>
          </div>
        </div>
      </div>

      {/* گریدبندی دو ستونه اصلی فرم */}
      <div className="space-y-4 p-8 bg-white border border-gray-100 rounded-3xl shadow-xl text-xs text-gray-500">
      <div className="grid gap-6 md:grid-cols-[1.6fr_1fr] items-start w-full">
        
        {/* ستون بزرگ سمت چپ: کلیه فیلدهای متنی پرونده بیمار */}
         
        <div className="">
          <div>
            <h2 className="text-xl  text-slate-800">Schedule an Appointment</h2>
            <p className="text-gray-600 text-xl mt-1">Who is taking appointment?</p>
            <div className="mt-3 flex gap-4 text-sm font-bold text-slate-600">
              {["Me", "My Dependent"].map((o, i) => (
                <label key={o} className="flex items-center gap-1.5 cursor-pointer">
                  <input type="radio" name="who" defaultChecked={i === 0} className="text-fuchsia-600 focus:ring-fuchsia-500" />
                  <span>{o}</span>
                </label>
              ))}
            </div>
          </div>
          
          <h3 className="text-xl text-slate-700 pb-1 pt-3">Insurance Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <F label="Insurance Company And Plan"  />
            <F label="Insurance Member ID" />
          </div>
          
          <h3 className="text-xl  text-slate-700  pb-1 pt-3">Personal Information</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <F label="First Name" placeholder="Eg. Michael" value={form.first} onChange={handleFieldChange("first")} />
            <F label="Last Name" placeholder="Eg. Tomson" value={form.last} onChange={handleFieldChange("last")} />
            <F label="Email" type="email" placeholder="Eg.tomson@gmail.com" value={form.email} onChange={handleFieldChange("email")} />
            <F label="Confirm Email" type="email"  value={form.confirm} onChange={handleFieldChange("confirm")} />
            <F label="Phone Number" placeholder="+49 403 4394 3" value={form.phone} onChange={handleFieldChange("phone")} />
            <F label="Street Address"  />
            
            <div className="space-y-1"><p className="font-extrabold text-slate-500 text-[11px]">Gender</p>
              <div className="flex gap-4 font-bold text-gray-400 pt-2">{["Female", "Male", "Other"].map((g) => <label key={g} className="flex items-center gap-1.5 cursor-pointer"><input type="radio" name="g" className="text-fuchsia-600" /><span>{g}</span></label>)}</div>
            </div>
            <div className="space-y-1"><p className="font-extrabold text-slate-500 text-[11px]">Phone Type</p>
              <div className="flex gap-4 font-bold text-gray-400 pt-2">{["Phone", "Home", "Work"].map((g) => <label key={g} className="flex items-center gap-1.5 cursor-pointer"><input type="radio" name="pt" className="text-fuchsia-600" /><span>{g}</span></label>)}</div>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <F label="City" placeholder="XXXXX" />
            <F label="State" placeholder="XXXXX" />
            <F label="Zip Code" placeholder="XXXXX" />
          </div>
          <h3 className="text-xl text-slate-700  pb-1 pt-3">Visit Information</h3>
          <label className="block text-[12px] font-extrabold text-slate-500 text-left">
            Reason For Visit (Symptoms, Diagonsis, Test Results, Or Other Information)
            <textarea rows={3} className="w-full border border-gray-200 rounded-sm px-3 py-2 bg-white text-xs font-normal focus:bg-white focus:border-cyan-400 focus:outline-none transition mt-1 shadow-inner"  />
          </label>
          <F  label="Refferring Doctor (Optional)" placeholder="XXXXX" />
        </div>

        {/* ستون سمت راست: فاکتور خلاصه بلیت نوبت پزشک و درگاه کارت اعتباری کپسولی */}
        <div className="space-y-4">
          
          {/* باکس جزئیات بلیت نوبت فوقانی راست */}
          <div className="rounded-3xl p-5 border border-gray-100 shadow-xl bg-white text-xs text-gray-400 font-medium space-y-2 text-left flex flex-col gap-1">
            <h3 className="text-xl  text-slate-800  pb-2">Appointment Details</h3>
            <DocMini doctor={doctor} visit={booking?.visit || "video"} />
            <p className="mt-2 text-[15px] text-[#CB0C9F]">Date and Time</p>
            <p className="text-gray-500 text-sm ">Tuesday, March 22 2022 at 8:00</p>
            <p className="text-[#CB0C9F] text-[15px] mt-2">Visit Type</p>
            <p className="text-gray-500 text-sm">Video Visit</p>
            <p className="mt-3 text-[#CB0C9F] text-[15px] ">About Video Visit</p>
            <p className="text-gray-400 leading-relaxed text-sm">video visit lets you see doctor from your mobile device instead of an in-person appointment.<span className="text-purple-700">Learn More About Video Visits </span> and how to prepare</p>
          </div>
          
          {/* باکس درگاه کارت بانکی شبیه‌ساز فیلدهای فاکتور شما */}
          <div className="space-y-3 rounded-3xl p-5 border border-gray-100 shadow-xl bg-white text-xs text-gray-400 font-semibold text-left">
            <p className="text-[15px] text-[#344767]">Credit and Debit Cards</p>
            <p className="text-gray-400 -mt-1 font-bold">Transaction fee may apply</p>
            <F label="Card Holder Name" placeholder="XXXXX" />
            <F label="Card Number" placeholder="XXXXX" inputMode="numeric" />
            <div className="grid grid-cols-3 gap-2">
              <F label="Start Date" type="text" placeholder="mm/dd/yyyy" />
              <F label="End Date" type="text" placeholder="mm/dd/yyyy" />
              <F label="CVV" maxLength={4} placeholder="XXXXX" />
            </div>
            
            {/* دکمه سبز رنگ PAY NOW منطبق بر تصویر سوم شما */}
            <div className="pt-2">
              <button 
                type="button" 
                onClick={processPayment} 
                className={`w-full rounded-sm py-3 text-xs font-black text-white transition-all shadow-md cursor-pointer text-center ${
                  hasPaid ? "bg-green-600" : "bg-[#8ce600] hover:bg-lime-500 text-white"
                }`}
              >
                {hasPaid ? "PAID ✓" : "PAY NOW"}
              </button>
            </div>

            {/* چک‌باکس فعال‌سازی تیک پذیرش قوانین */}
            <label className="flex items-center space-x-2 text-gray-400 font-bold py-1 cursor-pointer">
              <input type="checkbox" checked={acceptRules} onChange={(e) => setAcceptRules(e.target.checked)} className="rounded text-fuchsia-600 border-gray-300 w-3.5 h-3.5" />
              <span className="ml-1 text-[12px] text-[#344767]">I have read and accept the term of use rules</span>
            </label>
          
          
          {/* ماژول‌های انتخابی مسترکارت و پی‌پال */}
          <p className="pt-2 pb-2 text-[15px]  text-slate-700 text-left">Payment Method</p>
          {["mastercard", "paypal"].map((m) => (
            <button 
              key={m} 
              type="button" 
              onClick={() => setPayGateway(m)} 
              className={`flex w-full items-center gap-4 rounded-xl border border-gray-200 p-6 text-left text-xs bg-white cursor-pointer transition-all ${
                payGateway === m ? "border-fuchsia-500 bg-fuchsia-50/10 shadow-sm" : "border-gray-100"
              }`}
            >
              <span className="w-12 text-lg font-black flex justify-center text-center">
                {m === "mastercard" ? <span className="text-red-500 text-xl">●<span className="text-amber-500 -ml-1.5">●</span></span> : <span className="text-blue-800 font-bold">P</span>}
              </span>
              <div className="flex-1 text-left">
                <b className="text-slate-800 font-black block text-xs capitalize">{m} Online Banking</b>
                <span className="text-[10px] text-gray-400 font-medium">Free of charges</span>
              </div>
              {payGateway === m ? <Pencil size={14} className="text-fuchsia-600" /> : <span className="h-3 w-3 rounded-full border border-gray-200 block" />}
            </button>
          ))}
        </div>
       </div>
      </div>

      {/* کلیدهای ناوبری انتهای فرم دقیقا هماهنگ با تصویر سوم */}
      <div className="mt-4 flex justify-between items-center w-full pt-2">
        <button type="button" onClick={onBack} className="rounded-sm bg-gray-200 hover:bg-gray-300 px-6 py-2.5 text-xs font-black text-gray-600 cursor-pointer transition-all">
          BACK
        </button>
        <button 
          type="button" 
          onClick={onNext} 
          className="rounded-sm bg-[#1e293b] hover:bg-slate-800 px-6 py-2.5 text-xs font-black text-white cursor-pointer transition-all"
        >
          NEXT
        </button>
      </div>

    </div>
    </div>
  );
}
