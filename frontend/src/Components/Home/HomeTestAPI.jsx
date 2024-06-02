import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import TestAPI from "../../Request/TestAPI";



function HomeTestAPI() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <TestAPI/>
      <Header />
      <Footer />
    </>
  );
}

export default HomeTestAPI;
