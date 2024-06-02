import React from "react";
// import Brands from "../Brands";
import Footer from "../Footer";
import Header from "../Header";
import Testimonial from "../HomeThreeComponents/Testimonials";
import PageBanner from "../PageBanner";
import Team from "../Team";

const InstructorOne = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Giảng viên"} pageName={"Giảng viên"} num={1} />
      <Team />
      <Testimonial />
      {/* <Brands
        section_padding_bottom={"section-padding-bottom"}
        section_padding_top={"section-padding-top"}
      /> */}
      <Footer />
    </>
  );
};

export default InstructorOne;
