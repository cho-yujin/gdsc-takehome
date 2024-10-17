import Navbar from "./components/navbar.js";
import MobileNavbar from "./components/mobile-navbar.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen overflow-y-scroll">
      <div className="w-[80%]">
        <div className="hidden md:block">
          <Navbar/>
        </div>
        <div className="block md:hidden">
          <MobileNavbar/>
        </div>
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}
