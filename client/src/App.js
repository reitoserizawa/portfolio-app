import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      {/* <Blog /> */}
      <Projects />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
