import { useState } from "react";
import StatsCard from "./StatsCard.jsx";
import CalendarSection from "./CalendarSection.jsx";
import AppointmentChart from "./AppointmentChart.jsx";
import AppointmentList from "./AppointmentList.jsx";
import Footer from "./Footer.jsx";
import { Plus, Search, List, Calendar, Home } from "lucide-react";

// کارت ایجاد نوبت جدید
function NewAppointmentCard({ setActivePage }) {
  return (
    <button
      type="button"
      onClick={() => setActivePage?.("Find Doctor")}
      className="flex min-h-[130px] w-full flex-col items-center justify-center rounded-3xl border border-slate-50 bg-white p-4 text-center shadow-[0_8px_25px_rgba(30,41,59,0.02)] transition"
    >
      <span className="flex h-10 w-10 items-center justify-center text-slate-400">
        <Plus size={28} strokeWidth={2} />
      </span>

      <span className="mt-1 text-sm font-bold text-[#707e94]">
        New Appointment
      </span>
    </button>
  );
}

// داشبورد اصلی
export default function Dashboard({ setActivePage }) {
  const [activeTab, setActiveTab] = useState("Appointments");

  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] w-full flex-col px-1 py-2">

      {/* دکمه‌های تغییر تب */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("Appointments")}
          className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold transition-all duration-200 ${
            activeTab === "Appointments"
              ? "bg-white text-[#334d6e] shadow-sm"
              : "bg-transparent text-[#707e94] hover:bg-white/50"
          }`}
        >
          <Search size={16} className="text-pink-600" />
          Appointments
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("New Booking")}
          className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold transition-all duration-200 ${
            activeTab === "New Booking"
              ? "bg-white text-[#334d6e] shadow-sm"
              : "bg-transparent text-[#707e94] hover:bg-white/50"
          }`}
        >
          <List size={16} className="text-pink-600" />
          New Booking
        </button>
      </div>

      {/* محتوای تب نوبت‌ها */}
      {activeTab === "Appointments" && (
        <div className="mt-5 space-y-4">

          {/* کارت‌های آمار و نوبت جدید */}
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_160px]">
            <StatsCard
              title="Procedures Taken"
              value="30"
              increase="3"
            />

            <StatsCard
              title="Treatments Taken"
              value="12"
              increase="1"
            />

            <NewAppointmentCard setActivePage={setActivePage} />
          </div>

          {/* تقویم سمت چپ و کارت‌های جانبی سمت راست */}
          <div className="grid min-w-0 grid-cols-1 items-start gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(270px,0.98fr)]">

            {/* کارت تقویم */}
            <div className="w-full min-w-0">
              <CalendarSection />
            </div>

            {/* ستون نمودار و فهرست نوبت‌ها */}
            <div className="flex w-full min-w-0 flex-col gap-3">
              <AppointmentChart />
              <AppointmentList />
            </div>

          </div>
        </div>
      )}

      {/* تب نوبت جدید */}
      {activeTab === "New Booking" && (
        <div className="mt-8 flex flex-col items-center justify-center w-full gap-4">
          <div className="flex flex-col gap-4 items-center">
            
            {/* دکمه اول: بدون عملکرد اجرایی */}
            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d9047b] via-[#b60bb4] to-[#7f1bd7] text-white text-[8px]  py-3.5 px-6 rounded-xl shadow-[0_4px_15px_rgba(182,11,180,0.15)] transition"
            >
              Book an Appointment with Doctor
            </button>
            </div>
            <div  className="flex flex-col gap-4 items-center">
            {/* Find Clinic */}
            <button 
              type="button"
              onClick={() => setActivePage?.("Find Clinic")}
              className="w-full  justify-center gap-2 bg-gradient-to-r from-[#d9047b] via-[#a30ebd] to-[#6d22df] text-white text-[8px]  py-3.5 px-6 rounded-xl shadow-[0_4px_15px_rgba(163,14,189,0.15)] hover:opacity-95 transition active:scale-[0.99]"
            >
              Book Room in Hospital
            </button>
            د
          </div>
        </div>
      )}

      {/* فوتر صفحه */}
      <div className="mt-auto pt-6">
        <Footer />
      </div>
    </div>
  );
}
