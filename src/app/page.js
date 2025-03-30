
import NavBar from "@/components/NavBar";
import Cards from "@/components/main/Cards";
import About from "@/components/main/About_us";
import Advantages from "@/components/main/Advantages";
import Top from "@/components/main/Top";
import Orders from "@/components/main/Orders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center flex-col content-max">
      <NavBar></NavBar>
      <Top></Top>
      <Cards></Cards>
      <About></About>
      <Advantages></Advantages>
      <Orders></Orders>
      <Footer></Footer>
    </div>
  );
}
