/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CourseBlock = () => {
  return (
    <div
      className="lg:pt-10 section-padding-bottom bg-white bg-[url('../images/all-img/section-bg-14.png')] bg-center bg-no-repeat
            bg-cover"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
          <div className="bg-[url('../images/all-img/bg-ins-1.png')] bg-cover  bg-no-repeat p-10  rounded-md">
            <div className="max-w-[337px]">
              <div className="mini-title">Bạn muốn </div>
              <div className=" text-[34px] text-black leading-[51px]">
                Trở thành một <span className="shape-bg"> Giảng Viên</span>
              </div>
              <div className=" mt-6 mb-12">
                Hãy trở thành đối tác của chúng tôi.
              </div>
              <a href="#" className="btn btn-primary">
                Đăng ký giảng viên
              </a>
            </div>
          </div>
          <div className="bg-[url('../images/all-img/bg-ins-2.png')]  bg-no-repeat p-10 bg-cover rounded-md">
            <div className="max-w-[337px]">
              <div className="mini-title">Bạn muốn</div>
              <div className=" text-[34px] text-black leading-[51px]">
                Tham gia những <span className="shape-bg">Khóa học</span>
              </div>
              <div className=" mt-6 mb-12">
                Những khóa học tốt nhất mà bạn đang cần.
              </div>
              <a href="#" className="btn btn-black">
                Đăng ký học
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBlock;
