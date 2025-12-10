import Hero from "./components/mainPage/Hero/Hero";
import About from "./components/mainPage/About/About";
import Products from "./components/mainPage/Products/Products";
import Services from "./components/mainPage/Services/Services";
import Contacts from "./components/mainPage/Contacts/Contacts";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Products/>
      <Services/>
      <Contacts/>
    </>
  );
}
