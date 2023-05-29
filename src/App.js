import BannerTitle from "./components/bannerTitle/bannerTitle";
import Business from "./components/business/business";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Offers from "./components/offers/offers";
import OnlineStore from "./components/onlineStore/onlineStore";
import SingleBagSection from "./components/singleBagSection/singleBagSection";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerTitle />
      <SingleBagSection />
      <Offers />
      <OnlineStore />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
