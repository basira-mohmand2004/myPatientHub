
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobilSidebar = () => {
    setIsMobile((prev) => !prev);
  };

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-full max-w-full overflow-x-clip bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />

      <main className="flex min-w-0 max-w-full flex-1 flex-col p-3 sm:p-4 md:p-6">
        <Header
          toggleSidebar={toggleSidebar}
          toggleMobilSidebar={toggleMobilSidebar}
        />

        <div className="w-full min-w-0 max-w-full flex-1">
          {children}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Layout;
