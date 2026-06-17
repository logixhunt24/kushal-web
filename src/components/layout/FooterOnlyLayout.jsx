import Footer from "./Footer";

export default function FooterOnlyLayout({ children }) {
  return (
    <div
      className="relative min-h-screen bg-brand-bg text-brand-text"
      style={{ fontFamily: "var(--kushal-font)" }}
    >
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
