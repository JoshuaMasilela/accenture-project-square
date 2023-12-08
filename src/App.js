import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Services from "./components/sections/services";
import CaseStudies from "./components/sections/case_studies";
import Brands from "./components/sections/brands";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div >
    <Navbar/>
      <div>
        <Banner/>
      </div>
      <div>
        <Services/>
      </div>
      <div>
        <CaseStudies/>
      </div>
      <div>
        <Brands/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
