import React, { useMemo, useState } from "react";
import { Map as MapIcon, List as ListIcon, ChevronDown, Earth } from "lucide-react";
import MapWidget from "./MapWidget"; // فراخوانی نقشه تعاملی لایوبل

// تعریف دیتای بومی پزشکان کاملاً متناسب با متن داخل عکس‌های شما
const doctorsData = [
  {
    id: 1,
    name: "Prof. Dr. Muhammad Shamsir Bin Mohd Aris",
    specialty: "Obstetrics and Gynaecology",
    role: "Visiting Consultant",
    address: "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    web: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    languages: "English, Malay",
    gender: "Male",
    distance: 1.2,
    nextAvailable: "TUESDAY, MARCH 22",
    photo: "src/assets/doctor-avatar.cd9829645211560df46b.jpg"
  },
  {
    id: 2,
    name: "PROF. DR. MADYA DR. Khairullah",
    specialty: "Obstetrics and Gynaecology",
    role: "Visiting Consultant",
    address: "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    web: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    languages: "English, Malay",
    gender: "Male",
    distance: 3.5,
    nextAvailable: "TUESDAY, MARCH 22",
    photo: "src/assets/doctor2.5b57c16bc5ccff0d3d65.jpg"
  }
];

export default function DoctorResult({ onSelectDoctor, query = "" }) {
  const [viewMode, setViewMode] = useState("list"); // وضعیت پیش‌فرض نمایش بر اساس عکس اول لیست است
  const [sortBy, setSortBy] = useState("available");
  const [genderFilter, setGenderFilter] = useState("");

  // فیلتر هوشمند و داینامیک لیست بر اساس پارامترها
  const filteredList = useMemo(() => {
    return doctorsData.filter((doc) => {
      const matchGender = !genderFilter || doc.gender === genderFilter;
      const matchQuery = !query || 
        doc.name.toLowerCase().includes(query.toLowerCase()) || 
        doc.specialty.toLowerCase().includes(query.toLowerCase());
      return matchGender && matchQuery;
    });
  }, [genderFilter, query]);

  return (
    <div className="w-full p-4 max-w-[1600px] mx-auto text-left space-y-6">
      
      

      {/* 🎛️ تب‌های کنترل مپ و لیست کپسولی شکل سفید رنگ بالای گرید، دقیقاً مطابق با عکس شما */}
    {/* 📌 کادر اصلی دکمه‌ها: با اضافه کردن حداکثر عرض (max-w-xs یا max-w-sm) می‌توانید درازای کل کادر را کنترل کنید */}
<div className="relative flex bg-gray-100/50 p-1 rounded-xl  w-full max-w-xs justify-start select-none">
  
  {/* 📌 لایه متحرک پس‌زمینه سفید خالص که با انیمیشن بین دو دکمه جابه‌جا می‌شود */}
  <div
    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 ease-in-out pointer-events-none
      ${viewMode === 'map' ? 'left-1' : 'left-[calc(50%+2px)]'}
    `}
  />

  {/* دکمه نقشه (Map) - از نظر عرضی درازتر شده است */}
  <button 
    onClick={() => setViewMode('map')} 
    className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm rounded-xl transition-all cursor-pointer 
      ${viewMode === 'map' ? 'text-gray-900' : 'text-gray-900 hover:text-gray-700'}
    `}
  >
    <Earth size={20} className={`transition-colors duration-300 ${viewMode === 'map' ? 'text-[#CB0C9F]' : 'text-[#CB0C9F]'}`} /> 
    <span>Map</span>
  </button>

  {/* دکمه لیست (List) - از نظر عرضی درازتر شده است */}
  <button 
    onClick={() => setViewMode('list')} 
    className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 text-sm rounded-xl transition-all cursor-pointer 
      ${viewMode === 'list' ? 'text-gray-900' : 'text-gray-700 hover:text-gray-700'}
    `}
  >
    <ListIcon size={20} className={`transition-colors duration-300 text-[#CB0C9F]`} /> 
    <span>List</span>
  </button>

</div>

      {/* گریدبندی دو ستونه اصلی */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full">
        
        {/* پنل فیلترهای مستقل سمت چپ */}
        <aside className="lg:col-span-1 space-y-4">
          {/* باکس متنی اول */}
          <div className="space-y-3 bg-white p-5 rounded-xl border border-gray-100 shadow-sm w-full">
            <input type="text" placeholder="Primary Care" className="w-full border border-gray-200 rounded-sm px-3 py-2.5  text-xs focus:bg-white focus:border-fuchsia-400 focus:outline-none transition " />
            <input type="text" placeholder="Zip code or Neighborhood" className="w-full border border-gray-200 rounded-sm px-3 py-2.5  text-xs focus:bg-white focus:border-fuchsia-400 focus:outline-none transition " />
          </div>

          {/* باکس انتخابگرها و چک‌باکس‌های دوم */}
          <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm space-y-4 text-xs text-gray-500">
            <h4 className="text-sm  text-left mb-1">Filter By</h4>
            
            <div className="relative">
              <select defaultValue="" className="w-full appearance-none border border-gray-200 rounded-sm px-4 py-2.5 bg-white text-gray-400 focus:outline-none cursor-pointer">
                <option value="" disabled hidden>Specialty</option>
                <option>Obstetrics and Gynaecology</option>
              </select>
              <span className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"><ChevronDown size={14} /></span>
            </div>

            <div className="relative">
              <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} className="w-full appearance-none border border-gray-200 rounded-sm px-4 py-2.5 bg-white text-gray-400 focus:outline-none cursor-pointer">
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <span className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"><ChevronDown size={14} /></span>
            </div>
            <div className="relative">
              <select defaultValue="" className="w-full appearance-none border border-gray-200 rounded-sm px-4 py-2.5 bg-white text-gray-400 focus:outline-none cursor-pointer">
                <option value="" disabled hidden>Condition</option>
                <option>Pregnancy</option>
              </select>
              <span className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"><ChevronDown size={14} /></span>
            </div>

            <div className="relative">
              <select defaultValue="" className="w-full appearance-none border border-gray-200 rounded-sm px-4 py-2.5 bg-white text-gray-400 focus:outline-none cursor-pointer">
                <option value="" disabled hidden>languages</option>
                <option>English</option>
                <option>Malay</option>
              </select>
              <span className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"><ChevronDown size={14} /></span>
            </div>

            {/* بخش تیک‌های رده سنی */}
            <div className="space-y-2.5 pt-3 border-t border-gray-100">
              <h4 className="text-left text-sm ">Providers Who Treat</h4>
              {["All Ages", "Children", "Adults"].map((x) => (
                <label key={x} className="flex items-center space-x-2 text-slate-700 font-bold cursor-pointer">
                  <input type="checkbox" className="rounded text-fuchsia-600 border-gray-300 w-3.5 h-3.5" />
                  <span className="text-xs ml-2">{x}</span>
                </label>
              ))}
            </div>

            {/* بخش تیک‌های نوع نمایش */}
            <div className="space-y-2.5 pt-3 border-t border-gray-100">
              <h4 className="text-left text-sm">View Only</h4>
              {["Online Scheduling", "Primary Care"].map((x) => (
                <label key={x} className="flex items-center space-x-2 text-slate-700 font-bold cursor-pointer">
                  <input type="checkbox" className="rounded text-fuchsia-600 border-gray-300 w-3.5 h-3.5" />
                  <span className="text-xs ml-2">{x}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ==================== ستون سمت راست: نمایش نتایج اصلی پزشکان ==================== */}
        <section className="lg:col-span-3 space-y-4">
          
          {/* بخش دکمه‌های رنگی Sort By */}
          <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 tracking-wider mb-2">
            <span className="text-sm font-bold text-slate-700">Sort By</span>
            <button 
              onClick={() => setSortBy("available")} 
              className={`rounded-sm px-5 py-2.5 text-[12px]   tracking-wider transition-all cursor-pointer text-white ${sortBy === "available" ? "bg-[#CB0C90]  shadow-md" : "bg-[#CB0C90] "}`}
            >
              NEXT AVAILABLE
            </button>
            <button 
              onClick={() => setSortBy("distance")} 
              className={`rounded-sm px-5 py-2.5 text-[12px]  tracking-wider transition-all cursor-pointer text-white ${sortBy === "distance" ? "bg-[#CB0C90] shadow-md" : "bg-[#CB0C90] "}`}
            >
              DISTANCE
            </button>
          </div>

          {/* سوییچ شرطی بین حالت مپ لواتیبل یا لیست کارت‌های بزرگ بر اساس عکس‌ها */}
          {viewMode === "map" ? (
            <MapWidget list={filteredList} onOpenProfile={onSelectDoctor} />
          ) : (
            <div className="space-y-5">
              {filteredList.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md flex flex-col sm:flex-row items-start gap-6 text-left"
                >
                  
                  {/* تصویر پزشک منطبق با کادر مستطیلی عکس شما */}
                  <button  onClick={() => onSelectDoctor(doctor)} 
                  className="w-25 h-25 rounded-xl overflow-hidden flex-shrink-0  shadow-xl cursor-pointer">
                    <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover object-top" />
                  </button>

                  {/* بخش جزئیات متنی پزشک دقیقا روبروی عکس */}
                  <div className="flex-1 text-sm text-gray-400 font-medium space-y-1 text-left">
                    <button 
                      onClick={() => onSelectDoctor(doctor)} 
                      className="text-base  text-slate-600 hover:text-fuchsia-600 transition-colors text-left block leading-tight cursor-pointer"
                    >
                      {doctor.name}
                    </button>
                    <p className=" text-sm">{doctor.specialty}</p>
                    <p className="text-gray-400 font-medium text-[15px]">{doctor.role}</p>
                    
                    <div className="pt-2 text-gray-400 space-y-0.5 text-sm">
                      <p> {doctor.address}</p>
                      <p> <span className="text-gray-400 font-semibold">{doctor.web}</span></p>
                      <p> {doctor.phone}</p>
                      <p> {doctor.languages}</p>
                    </div>

                    {/* دکمه ارغوانی رنگ فعال ورود به نوبت‌دهی نهایی */}
                    <div className="pt-3">
                      <button 
                        onClick={() => onSelectDoctor(doctor)} 
                        className="bg-[#CB0C90] hover:[#CB0C90] text-white  text-[12px] tracking-wider px-5 py-3.5 rounded-sm cursor-pointer shadow-sm transition-all"
                      >
                        NEXT AVAILABLE: {doctor.nextAvailable}
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
