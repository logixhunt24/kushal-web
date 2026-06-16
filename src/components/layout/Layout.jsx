import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Breadcrumb from "../../common/Breadcrumb";

export default function Layout() {
  const { pathname } = useLocation();
  const showBreadcrumb = pathname !== "/";
  return (
    <div
      className="relative min-h-screen bg-brand-bg text-brand-text"
      style={{ fontFamily: "var(--kushal-font)" }}
    >
      <Navbar />
      {showBreadcrumb && <Breadcrumb />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
