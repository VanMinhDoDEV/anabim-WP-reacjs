import React from "react";
import IntructorDetail from "../IntructorDetail";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const InstructorDetails = () => {
  return (
    <>
      <Header />
      <PageBanner
        title={"Giới thiệu giảng viên"}
        pageTitle={"giảng viên"}
        num={1}
      />
      <IntructorDetail />
      <Footer />
    </>
  );
};

export default InstructorDetails;
