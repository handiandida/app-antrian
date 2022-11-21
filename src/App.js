import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./pages/main";
import "./App.css";

const App = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
