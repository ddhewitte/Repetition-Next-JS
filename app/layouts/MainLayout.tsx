// layouts/MainLayout.tsx (server component)
import Navbar from "../components/Navbar"; // client component - allowed
import Footer from "../components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
      <Footer />
    </div>
  );
}
