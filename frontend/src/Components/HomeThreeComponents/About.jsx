import React from "react";
import { about5, h, videoIcon, whiteWebIcon } from "../../constant/images";

const About = () => {
  return (
    <div className="about-area  section-padding-top pb-16 relative z-[1]">
      <div className=" absolute right-[7%] top-[20%] z-[-1] hidden xl:block">
        <img src={h} alt="" />
      </div>
      <div className="container">
        <div className="grid grid-cols-12 xl:gap-[70px] lg:gap-10 gap-6">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={about5} alt="" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
            <div className="mini-title">Giới thiệu Anabim</div>
            <h4 className="column-title ">
              Chúng tôi giúp bạn học mọi lúc ở{" "}
              <span className="shape-bg">Mọi nơi</span>
            </h4>
            <div>
              Nền tảng <span className="shape-bg">Elearning</span> kết nối bạn với giảng viên mỗi khi bạn cần.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={videoIcon} alt="" className="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                    Học bằng video
                  </h4>
                  <div>
                    Tiết kiệm thời gian di chuyển và sắp xếp lịch học linh hoạt.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-20 w-20 rounded-full bg-white  shadow-box10 flex flex-col justify-center items-center">
                    <img src={whiteWebIcon} alt="" className=" " />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">
                    Kết nối trực tuyến với giảng viên
                  </h4>
                  <div>
                    Bài giảng xây dựng bởi giảng viên giàu kinh nghiệm và tâm huyết.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
