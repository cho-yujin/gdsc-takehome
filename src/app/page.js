import Navbar from "./components/navbar.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen overflow-y-scroll">
      <div className="w-[80%]">
        <Navbar></Navbar>
        <Body></Body>
      </div>
      <Footer></Footer>
    </div>
  );
}
