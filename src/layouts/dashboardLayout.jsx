import "./dashboardLayout.css";
import { useState } from "react";
import Sidebar from "../components/ui/sidebar";
import { SidebarContext } from "../hooks/sidebarContext";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`layout ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <div className="sidebar-layout">
          <Sidebar />
        </div>
        <main className="main-layout">{children}</main>
      </div>
    </SidebarContext.Provider>
  );
}
