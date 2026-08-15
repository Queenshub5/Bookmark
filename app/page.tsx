// import Image from "next/image";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Download from "./component/Download";
import Faq from "./component/Faq";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";

export default function Home() {
  return (
     <div>
      <Nav/>
      <Hero/>
      <Features/>
      <Download/>
      <Faq/>
      <Newsletter/>
      <Footer/>
     </div>
  );
}
