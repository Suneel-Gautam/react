import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { Router, Route } from "react-router-dom";
function App() {
  return (
    <>
  
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
