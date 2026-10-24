
import { useState } from "react";
import { MoreVertical } from "lucide-react";

// اطلاعات نمونه داکتران
const appointmentsData = [
  {
    id: 1,
    doctor: "Dr. Mustafa",
    specialty: "Emergency",
    dayOfWeek: "Tuesday,",
    date: "April 5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNg0kHGalwvFzml1UuXVi4pBMTAK3nXNCvoUWO51wmgQ&s=10",
  },
  {
    id: 2,
    doctor: "DR. KHIRULLAH",
    specialty: "consultation",
    dayOfWeek: "Friday,",
    date: "November 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNg0kHGalwvFzml1UuXVi4pBMTAK3nXNCvoUWO51wmgQ&s=10",
  },
  {
    id: 3,
    doctor: "DR. Bilal",
    specialty: "Eximination",
    dayOfWeek: "Monday,",
    date: "March 9",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNg0kHGalwvFzml1UuXVi4pBMTAK3nXNCvoUWO51wmgQ&s=10",
  },
];

// فهرست نوبت‌های قبلی و آینده
export default function AppointmentSidebarLists() {
  const [activePeriod, setActivePeriod] = useState("Days");
  const [openMenuId, setOpenMenuId] = useState(null);

  return (
    // مجموع ارتفاع لیست‌ها با ارتفاع چارت هماهنگ است
    <div className="flex w-full min-w-0 flex-col gap-3">

      {/* کارت نوبت‌های قبلی */}
      <section className="flex h-[330px] shrink-0 flex-col overflow-visible rounded-[18px] border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(30,41,59,0.03)]">
        <h2 className="mb-3 shrink-0 text-[13px] font-bold text-[#334d6e]">
          Previous Appointments
        </h2>

        <div className="flex min-h-0 flex-1 flex-col justify-around gap-2">
          {appointmentsData.map((item) => (
            <AppointmentItem
              key={`prev-${item.id}`}
              item={item}
              uniqueId={`prev-${item.id}`}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
            />
          ))}
        </div>
      </section>

      {/* کارت نوبت‌های آینده */}
      <section className="flex h-[330px] shrink-0 flex-col overflow-visible rounded-[18px] border border-slate-100 bg-white p-3.5 shadow-[0_8px_25px_rgba(30,41,59,0.03)]">
        <h2 className="mb-2 shrink-0 text-[13px] font-bold text-[#334d6e]">
          Up Coming Appointments
        </h2>

        {/* فیلتر  زمانی */}
        <div className="mb-2 flex w-full shrink-0 rounded-lg bg-[#b9dae7] p-1">
          {["Days", "Months", "Years"].map((period) => (
            <button
              key={period}
              type="button"
              onClick={() => setActivePeriod(period)}
              className={`flex-1 rounded-md py-1 text-[10px] font-semibold transition-colors ${
                activePeriod === period
                  ? "bg-white text-[#334d6e] shadow-sm"
                  : "text-[#557285] hover:text-[#334d6e]"
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* فهرست داکتران */}
        <div className="flex min-h-0 flex-1 flex-col justify-around gap-1">
          {appointmentsData.map((item) => (
            <AppointmentItem
              key={`up-${item.id}`}
              item={item}
              uniqueId={`up-${item.id}`}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// ردیف اطلاعات پزشک
function AppointmentItem({
  item,
  uniqueId,
  openMenuId,
  setOpenMenuId,
}) {
  const isMenuOpen = openMenuId === uniqueId;

  return (
    <article className="relative flex min-w-0 items-center gap-1.5">
      {/* تصویردکتر */}
      <img
        src={item.image}
        alt={item.doctor}
        className="h-15 w-15 shrink-0 rounded-full border border-slate-100 object-cover"
      />

      {/* نام و تخصص */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[14px] font-bold leading-4 text-[#334d6e]">
          {item.doctor}
        </h3>

        <p className="truncate text-[12px] font-medium leading-3 text-slate-400">
          {item.specialty}
        </p>
      </div>

      {/* تاریخ نوبت */}
      <div className="shrink-0 text-right">
        <p className="text-[11px] leading-3 text-slate-400">
          {item.dayOfWeek}
        </p>

        <p className="whitespace-nowrap text-[11px] leading-4  text-slate-400">
          {item.date}
        </p>
      </div>

      {/* منوی سه‌نقطه‌ای */}
      <div className="relative shrink-0">
        <button
          type="button"
          aria-label={`Options for ${item.doctor}`}
          aria-expanded={isMenuOpen}
          onClick={() =>
            setOpenMenuId(isMenuOpen ? null : uniqueId)
          }
          className="rounded-md p-0.5 text-slate-400 transition hover:bg-slate-50 hover:text-[#334d6e]"
        >
          <MoreVertical size={14} />
        </button>

        {/* گزینه‌های منو */}
        {isMenuOpen && (
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 cursor-default"
              onClick={() => setOpenMenuId(null)}
            />

            <div className="absolute right-0 top-full z-50 mt-1 w-36 rounded-xl border border-slate-100 bg-white p-1.5 text-left shadow-lg">
              {[
                "Action",
                "Another action",
                "Something else here",
              ].map((action) => (
                <button
                  key={action}
                  type="button"
                  onClick={() => setOpenMenuId(null)}
                  className="w-full rounded-lg px-3 py-2 text-left text-[11px] text-slate-600 transition hover:bg-slate-50"
                >
                  {action}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}