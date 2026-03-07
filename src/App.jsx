import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-transparent">
        <Header />
        <AboutMe />
        <Portfolio />
        <Education />
        <Footer />
      </div>
    </>
  );
}

export default App;
