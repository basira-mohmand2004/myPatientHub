import React from 'react';
import { ChevronDownIcon } from "lucide-react";

// امپورت تصاویر برای بخش خدمات ویژه بر اساس مسیرهای فایل شما
import img1 from "../../assets/download.png";
import img2 from "../../assets/download (1).png";
import img3 from "../../assets/download (2).png";
import img4 from "../../assets/download (3).png";

function SpecialServices({ onNavigate }) {
  return (
    <>
      {/* ==================== ۱. بخش خدمات ویژه (بالایی) ==================== */}
      <section>
        <div className="bg-white p-4 rounded-xl m-4 shadow-xl mt-6">
          <h2 className="text-xl text-center text-[#344767] font-bold m-4">Special Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* دکمه شماره ۱ */}
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm w-full text-left cursor-pointer rounded-sm">
              <div className="flex gap-6 items-center">
                <img src={img1} className="rounded-full w-15 h-15 shadow-sm object-cover" alt="Primary Care" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Primary Care and Internal MD</h3>
                  <p className="text-[#344767] text-sm font-bold mt-1">our Doctors Partner with you to help you to reach your welness</p>
                </div>
              </div>
              <ChevronDownIcon className="text-gray-400" />
            </button>

            {/* دکمه شماره ۲ */}
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm w-full text-left cursor-pointer rounded-sm">
              <div className="flex gap-6 items-center">
                <img src={img2} className="rounded-full w-15 h-15 shadow-sm object-cover" alt="Emergency" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Imergency Care</h3>
                  <p className="text-[#344767] text-sm font-bold mt-1">we provide emergency care for adults and children</p>
                </div>
              </div>
              <ChevronDownIcon className="text-gray-400" />
            </button>

            {/* دکمه شماره ۳ */}
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm w-full text-left cursor-pointer rounded-sm">
              <div className="flex gap-6 items-center">
                <img src={img3} className="rounded-full w-15 h-15 shadow-sm object-cover" alt="Imaging" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Imaging Services</h3>
                  <p className="text-[#344767] text-sm font-bold mt-1">our Doctors Partner with you to help you to reach your welness</p>
                </div>
              </div>
              <ChevronDownIcon className="text-gray-400" />
            </button>

            {/* دکمه شماره ۴ */}
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm w-full text-left cursor-pointer rounded-sm">
              <div className="flex gap-6 items-center">
                <img src={img4} className="rounded-full w-15 h-15 shadow-sm object-cover" alt="Urgent" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Urgent Care</h3>
                  <p className="text-[#344767] text-sm font-bold mt-1">we offer urgent care for none ...</p>
                </div>
              </div>
              <ChevronDownIcon className="text-gray-400" />
            </button>

          </div>
        </div>
      </section>

      {/* ==================== ۲. بخش تخصص‌ها (پایینی - در ادامه اولی) ==================== */}
      <section>
        <div className="bg-white p-4 rounded-xl m-4 shadow-xl mt-10">
          <h2 className="text-xl text-center text-[#344767] font-bold m-4">Find Doctors By Specialty</h2>
          <p className="text-lg text-center text-gray-500 mb-6">Select a Specialty to View all Doctors and schedule an Appointment</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm cursor-pointer transition-all rounded-sm text-left">
              <h3 className="text-lg text-gray-800">Anesthesiology</h3>
              <ChevronDownIcon className="text-gray-400" />
            </button>
          
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm cursor-pointer transition-all rounded-sm text-left">
              <h3 className="text-lg text-gray-800">Dermatology</h3>
              <ChevronDownIcon className="text-gray-400" />
            </button>
          
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm cursor-pointer transition-all rounded-sm text-left">
              <h3 className="text-lg text-gray-800">Emegency Medicine</h3>
              <ChevronDownIcon className="text-gray-400" />
            </button>
         
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm cursor-pointer transition-all rounded-sm text-left">
              <h3 className="text-lg text-gray-800">Neurology</h3>
              <ChevronDownIcon className="text-gray-400" />
            </button>
           
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm cursor-pointer transition-all rounded-sm text-left">
              <h3 className="text-lg text-gray-800">Consultation</h3>
              <ChevronDownIcon className="text-gray-400" />
            </button>
          
            <button onClick={onNavigate} className="bg-white p-4 flex justify-between items-center border-b border-gray-400 shadow-sm cursor-pointer transition-all rounded-sm text-left">
              <h3 className="text-lg text-gray-800">Ophthalmology</h3>
              <ChevronDownIcon className="text-gray-400" />
            </button>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecialServices;


