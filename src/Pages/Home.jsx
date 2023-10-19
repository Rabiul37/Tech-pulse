import AboutCompany from "../Components/AboutCompany";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import OurService from "../Components/OurService";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Brands></Brands>
      <OurService></OurService>
      <AboutCompany></AboutCompany>
      <Footer></Footer>
    </div>
  );
};

export default Home;
