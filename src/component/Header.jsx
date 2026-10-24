import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  House,
  Menu,
  Search,
  UserCircle,
  Settings,
  Bell,
  Clock3,
  Music2,
  CreditCard,
} from "lucide-react";

export default function Header({
  onMenuClick,
  search = "",
  setSearch = () => {},
}) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }

  const notifications = [
    {
      title: "New Message",
      description: "From Laur",
      time: "13 minutes ago",
      icon: UserCircle,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "New Album",
      description: "By Travis Scott",
      time: "1 day ago",
      icon: Music2,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Payment Successfully Completed",
      description: "",
      time: "2 days ago",
      icon: CreditCard,
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
   <header
  className={`sticky top-0 z-30 flex min-h-[88px] flex-wrap items-center justify-between gap-3 rounded-b-2xl border px-4 py-3 backdrop-blur-sm transition-colors duration-300 sm:px-6 md:px-8 ${
    isScrolled
      ? "border-slate-100 bg-white shadow-sm"
      : "border-white/80 bg-[#f8f9fc]/95"
  }`}
>
      {/* عنوان، مسیر صفحه و منو */}
      <div className="flex min-w-0 items-center gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-[#718096]">
            <Link
              to="/login"
              aria-label="Go to Login"
              title="Login"
              className="text-[#98a4b5] transition "
            >
              <House size={14} />
            </Link>

            <span>/</span>
            <span className="truncate">Appointment</span>
          </div>

          <h1 className="mt-1 text-sm font-bold text-[#354968]">
            Appointment
          </h1>
        </div>

        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={onMenuClick}
          className="ml-2 rounded-lg p-2 text-[#596b88] transition hover:bg-white"
        >
          <Menu size={21} />
        </button>
      </div>

      {/* جست‌وجو و ابزارهای سمت راست */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* جست‌وجو: حالت عادی و حالت فوکوس */}
        <div
          className={`flex h-10 items-center ${
            searchFocused ? "gap-0" : ""
          }`}
        >
          {!searchFocused ? (
            /* حالت عادی: ذره‌بین داخل باکس نوشتار */
            <label className="flex h-10 w-[150px] items-center gap-2 rounded-lg border border-[#d6dce5] bg-white px-3 shadow-sm transition sm:w-[220px]">
              <Search
                size={17}
                className="shrink-0 text-[#40536f]"
              />

              <input
                type="search"
                value={search}
                onFocus={() => setSearchFocused(true)}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Type here..."
                aria-label="Search appointments"
                className="min-w-0 w-full bg-transparent text-xs text-[#40516f] outline-none placeholder:text-[#a5afbf]"
              />
            </label>
          ) : (
            /* حالت تایپ: ذره‌بین در باکس جداگانه */
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-l-lg border border-r-0 border-[#d6dce5] bg-white text-[#40536f]">
                <Search size={17} strokeWidth={2.5} />
              </span>

              <label className="flex h-10 w-[150px] items-center rounded-r-lg border border-cyan-400 bg-white px-3 ring-2 ring-cyan-300 sm:w-[180px]">
                <input
                  type="search"
                  autoFocus
                  value={search}
                  onBlur={() => setSearchFocused(false)}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Type here..."
                  aria-label="Search appointments"
                  className="min-w-0 w-full bg-transparent text-xs text-[#40516f] outline-none placeholder:text-[#a5afbf]"
                />
              </label>
            </>
          )}
        </div>

        {/* خروج از حساب */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-1 whitespace-nowrap rounded-lg px-1 py-2 text-xs font-medium text-[#40516f] "
        >
          <UserCircle size={15} />
          <span className="hidden sm:inline">Log out</span>
        </button>

        {/* تنظیمات */}
        <Link
          to="/appointment"
          aria-label="Settings"
          title="Settings"
          className="rounded-lg p-1  transition hover:bg-white"
        >
          <Settings size={16} />
        </Link>

        {/* اعلان‌ها */}
        <div className="relative">
          <button
            type="button"
            aria-label="Notifications"
            aria-expanded={notificationsOpen}
            onClick={() =>
              setNotificationsOpen((previous) => !previous)
            }
            className="rounded-lg p-1 text-[#40516f] transition hover:bg-white"
          >
            <Bell size={16} fill="currentColor" />
          </button>

          {notificationsOpen && (
            <>
              <button
                type="button"
                aria-label="Close notifications"
                onClick={() => setNotificationsOpen(false)}
                className="fixed inset-0 z-40 cursor-default"
              />

              <div className="absolute right-0 top-10 z-50 w-[min(320px,calc(100vw-24px))] rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_12px_35px_rgba(30,41,59,0.16)]">
                {notifications.map((notification, index) => {
                  const Icon = notification.icon;

                  return (
                    <button
                      type="button"
                      key={notification.title}
                      onClick={() => {
                        setNotificationsOpen(false);
                        window.alert(
                          `${notification.title} ${notification.description}`.trim()
                        );
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-slate-50 ${
                        index < notifications.length - 1
                          ? "mb-2"
                          : ""
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${notification.color}`}
                      >
                        <Icon size={19} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs leading-5 text-[#40516f]">
                          <strong>{notification.title}</strong>{" "}
                          {notification.description}
                        </span>

                        <span className="mt-1 flex items-center gap-1 text-[10px] text-[#8b9ab0]">
                          <Clock3 size={11} />
                          {notification.time}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
