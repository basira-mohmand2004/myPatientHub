
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobilSidebar = () => {
    setIsMobile(!isMobile);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        isMobile={isMobile}
        setIsMobile={setIsMobile}
      />

      <main className="flex-1 p-8 md:p-6 flex flex-col">
        <Header
          toggleSidebar={toggleSidebar}
          toggleMobilSidebar={toggleMobilSidebar}
        />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Layout;
