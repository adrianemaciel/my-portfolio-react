import "./style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Tech from "./components/Tech";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <About />
      <Courses />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
