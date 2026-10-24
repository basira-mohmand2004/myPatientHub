import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Store,
  MessageSquare,
  ShoppingBag,
  Pill,
  Contact,
  UserRound,
  Settings,
  HelpCircle,
  Apple,
  Download,
  X,
} from "lucide-react";

// آیتم‌های منوی سایدبار
const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Appointments", icon: CalendarDays },
  { label: "Find Doctor", icon: Stethoscope },
  { label: "Find Clinic", icon: Store },
  { label: "Chat", icon: MessageSquare },
  { label: "Find MarketPlace", icon: ShoppingBag },
  { label: "Find Pharmacy", icon: Pill },
  { label: "My Dependents", icon: Contact },
  { label: "My Account", icon: UserRound },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({
  collapsed = false,
  mobileOpen = false,
  onMenuClick = () => {},
  activePage = "Appointments",
  onPageChange = () => {},
}) {
  // انتخاب آیتم منو
  const handleNavigation = (label) => {
    onPageChange(label);
    onMenuClick();
  };

  return (
    <>
      {/* پس‌زمینه هنگام باز بودن سایدبار در موبایل */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={onMenuClick}
          className="fixed inset-0 z-40 bg-slate-900/20 md:hidden"
        />
      )}

      {/* بدنه سایدبار */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen flex-col
          overflow-hidden border-r border-slate-100
          bg-[#f6f8fb]
          transition-[width,transform] duration-300 ease-in-out
          ${collapsed ? "w-[76px]" : "w-[252px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* لوگوی بالای سایدبار */}
        <div
          className={`
            flex h-[105px] shrink-0 items-center
            border-b border-slate-200/60
            ${collapsed ? "justify-center px-2" : "gap-3 px-7"}
          `}
        >
         {/* لوگوی MyPatientHUB */}
<div className="relative flex h-10 w-10 shrink-0 flex-col items-center justify-center leading-none">
  <div className="relative flex items-center justify-center">
    <span className="text-[28px] font-black tracking-[-3px] text-[#17458b]">
      M
    </span>

    <span className="absolute left-[2px] top-[5px] h-[19px] w-[2px] bg-[#e51b91]" />
    <span className="absolute left-[7px] top-[23px] h-[3px] w-[5px] bg-[#e51b91]" />
  </div>

  <span className="-mt-[5px] mr-[1px] text-[9px] font-black tracking-[-0.5px] text-[#d9159e]">
    HUB
  </span>
</div>

          {!collapsed && (
            <span className="whitespace-nowrap text-[14px] font-semibold text-[#344b70]">
              MyPatientHUB
            </span>
          )}

          {/* دکمه بستن سایدبار در موبایل */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Close sidebar"
            className="ml-auto rounded-lg p-1 text-slate-500 hover:bg-white md:hidden"
          >
            <X size={19} />
          </button>
        </div>

   
        <nav className="sidebar-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 pb-5 pt-4">
      
          <div className="flex flex-col gap-[3px]">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  title={collapsed ? item.label : undefined}
                  onClick={() => handleNavigation(item.label)}
                  className={`
                    group flex h-[53px] w-full shrink-0
                    items-center rounded-[11px]
                    text-left transition-colors duration-200
                    ${
                      active
                        ? "bg-white text-[#344b70] shadow-[0_7px_22px_rgba(30,50,80,0.07)]"
                        : "bg-transparent text-[#72819d] hover:bg-white/80"
                    }
                    ${collapsed ? "justify-center px-1" : "gap-3 px-4"}
                  `}
                >
                  {/* آیکون داخل مربع سفید */}
                  <span
                    className={`
                      flex h-[34px] w-[34px] shrink-0
                      items-center justify-center rounded-[9px]
                      transition-colors
                      ${
                        active
                          ? "bg-[#d50ba4] text-white shadow-[0_3px_8px_rgba(213,11,164,0.22)]"
                          : "bg-white text-[#394c7a] shadow-[0_2px_5px_rgba(30,45,70,0.14)] group-hover:text-[#d50ba4]"
                      }
                    `}
                  >
                    <Icon size={16} strokeWidth={2.2} />
                  </span>

                  {/* عنوان آیتم */}
                  {!collapsed && (
                    <span
                      className={`whitespace-nowrap text-[13px] ${
                        active ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

  
          {!collapsed ? (
            <div className="mt-7 px-3">
              <div className="relative min-h-[146px] overflow-hidden rounded-[15px] bg-gradient-to-br from-[#ed3da7] via-[#c64ac6] to-[#9865d7] p-[14px] text-white shadow-sm">
                {/* خطوط تزئینی پس‌زمینه کارت */}
                <div className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-1 top-3 h-24 w-24 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-10 left-7 h-24 w-24 rounded-full border border-white/10" />

                {/* آیکون راهنما */}
                <div className="relative mb-3 flex h-7 w-7 items-center justify-center rounded-md bg-white text-[#d72ca8]">
                  <HelpCircle size={23} strokeWidth={2.8} />
                </div>

                {/* عنوان کارت */}
                <p className="relative text-[13px] font-bold leading-5">
                  Download
                </p>
                <p className="relative text-[10px] font-semibold leading-4">
                  MyPIHUB Mobile App
                </p>

                {/* دکمه‌های دانلود */}
                <div className="relative mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    aria-label="Apple app"
                    title="Apple app"
                    className="flex h-[29px] items-center justify-center rounded-lg bg-white text-[#cf20a2] shadow-sm transition hover:bg-pink-50"
                  >
                    <Apple size={15} fill="currentColor" />
                  </button>

                  <button
                    type="button"
                    aria-label="Download app"
                    title="Download app"
                    className="flex h-[29px] items-center justify-center rounded-lg bg-white text-[#cf20a2] shadow-sm transition hover:bg-pink-50"
                  >
                    <Download size={15} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* کارت کوچک دانلود در حالت جمع‌شده */
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                title="Download MyPIHUB Mobile App"
                aria-label="Download MyPIHUB Mobile App"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ed3da7] to-[#9865d7] text-white"
              >
                <Download size={19} />
              </button>
            </div>
          )}
        </nav>
      </aside>
    </>
  );
}
