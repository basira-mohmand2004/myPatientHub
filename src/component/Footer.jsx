import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-100 px-1 py-5">
      <div className="flex flex-col items-center justify-between gap-4 text-[12px] text-[#707e94] sm:flex-row">
        <p className="font-medium">
          © {new Date().getFullYear()}, made with <span className="text-rose-500">🖤</span> by{" "}
          <Link
            to="/cloudflare-error"
            className="font-bold text-[#334d6e] hover:text-[#e31a8f]"
          >
            MyPiHUB
          </Link>{" "}
          for a better web.
        </p>

        {/* لینک‌ها */}
        <nav className="flex flex-wrap items-center justify-center gap-6 font-medium">
          <Link to="/cloudflare-error" className="hover:text-[#e31a8f] transition-colors">
            MyPatientHUB
          </Link>

          <Link to="/cloudflare-error" className="hover:text-[#e31a8f] transition-colors">
            About Us
          </Link>

          <Link to="/cloudflare-error" className="hover:text-[#e31a8f] transition-colors">
            Blog
          </Link>
        </nav>
      </div>
    </footer>
  );
}
