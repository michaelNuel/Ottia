import HeroPage from "@/component/HeroBodyComponent/HeroPage/HeroPage";
import Navbar from "@/component/NavbarComponent/Navbar";

export default function Home() {
  return (
    <main className="bg-customPink h-screen ">
      <Navbar />
      <div className="max-w-7xl mx-10 overflow-hidden  mt-12 ">
        <HeroPage />
      </div>
    </main>
  );
}
