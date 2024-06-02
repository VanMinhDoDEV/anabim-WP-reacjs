/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import JsxParser from "react-jsx-parser";
import Course from "./Course";
import useGetUserData from "../Request/TeamAPI";
import {
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  counter1,
  counter2,
  counter3,
} from "../constant/images";
import useCoursesAPI from "../Request/CoursesAPI";


const IntructorDetail = () => {
  const [limitCourse, setLimitCourse] = useState(2); 
  const { instructorData, isLoading } = useGetUserData();

  const {dataWPCourses: courseData } = useCoursesAPI();
  // console.log('Dữ liệu từ courseData:', courseData);


  const urlSlug = window.location.pathname.split('/').pop();
  // console.log('Dữ liệu từ instructorData:', instructorData);
  // console.log(urlSlug);
  return (

    <div className="section-padding bg-[url('../images/all-img/insbg.png')] bg-contain   bg-no-repeat">
      <div className="container">
        {instructorData
        .filter(item => item.roles.includes("tutor_instructor") && item.id !== 1)
        .filter(item => item.slug === urlSlug)
        .map((item, index) => (
          <div className="grid grid-cols-12 xl:gap-0 gap-[30px]"
          key={index}
          >
            <div className="lg:col-span-4 col-span-12 ">
              <div className="bg-white shadow-box7 rounded-md max-w-[350px] lg:sticky lg:top-10">
                <div className="h-[400px] mb-8">
                  <img
                    src={item.meta._tutor_profile_photo || item.avatar_urls["96"]}
                    alt=""
                    className="w-full h-full block object-cover rounded-t-md"
                  />
                </div>
                <div className="px-8 pb-8">
                  <h5 className=" text-2xl font-bold text-black mb-4">
                    {item.name}
                  </h5>
                  <div className="mb-8">
                    {item.description}
                  </div>
                  <ul className=" space-y-[19px]">
                    <li className=" flex items-center space-x-3">
                      <div className="flex-none">
                        <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                          <iconify-icon icon="heroicons:envelope"></iconify-icon>
                        </span>
                      </div>
                      <span className=" flex-1">{item.meta.user_email}</span>
                    </li>
                    <li className=" flex items-center space-x-3">
                      <div className="flex-none">
                        <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                          <iconify-icon icon="heroicons:phone"></iconify-icon>
                        </span>
                      </div>
                      <span className=" flex-1">{item.meta.phone}</span>
                    </li>
                    <li className=" flex items-center space-x-3">
                      <div className="flex-none">
                        <span className="w-8 h-8 rounded bg-secondary text-white flex flex-col items-center justify-center text-lg">
                          <iconify-icon icon="heroicons:map-pin"></iconify-icon>
                        </span>
                      </div>
                      <span className=" flex-1">{item.meta.address}</span>
                    </li>
                  </ul>
                  <div className=" text-xl text-black mt-8 mb-4">
                    Theo dõi tôi:
                  </div>
                  <ul className="flex space-x-4 ">
                    {[{icon: fbIcon, link: item.meta.social.facebook},
                      {icon: pnIcon, link: item.meta.social.pinterest},
                      {icon: twIcon, link: item.meta.social.twitter},
                      {icon: insIcon, link: item.meta.social.instagram}]
                    .map((socialItem, indx) => (
                      <li key={indx}>
                        <a href={socialItem.link} target="_blank" rel="noreferrer" className="flex0 h-10 w-10">
                          <img src={socialItem.icon} alt="" />
                        </a>
                      </li>
                    ))}
                </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
              <div className="mb-10">
                <h2>{item.name}</h2>
                <span className=" inline-block text-primary">{item.meta._tutor_profile_job_title}</span>
              </div>
              <div>
                <JsxParser jsx={item.meta._tutor_profile_bio} />
              </div>
              <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-24">
                <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                  <img
                    src={counter1}
                    alt=""
                    className=" absolute left-1/2 -translate-x-1/2 -top-10"
                  />
                  <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                    <span className="counter">82</span>
                    k+
                  </h4>
                  <p>Học Viên</p>
                </div>

                <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                  <img
                    src={counter2}
                    alt=""
                    className=" absolute left-1/2 -translate-x-1/2 -top-10"
                  />
                  <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                    <span className="counter">460</span>+
                  </h4>
                  <p>Tốt nghiệp Xuất sắc</p>
                </div>

                <div className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4">
                  <img
                    src={counter3}
                    alt=""
                    className=" absolute left-1/2 -translate-x-1/2 -top-10"
                  />
                  <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                    <span className="counter">20</span>+
                  </h4>
                  <p>Thành công</p>
                </div>
              </div>
              <div className="mt-20 mb-14">
                <div className="mini-title">Các khóa học của giảng viên</div>
                <div className="column-title ">
                  Khóa học của <span className="shape-bg">{item.name}</span>
                </div>
              </div>
              <div className=" grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1  gap-[30px]">
                {courseData && courseData.length > 0 && (() => {
                  const course = courseData.find(course => course.author_id == item.id);
                  return course ? <Course course={course} key={course.id} /> : null;
                })()}
              </div>
              {limitCourse < courseData.length && (
              <div
              className="text-center lg:pt-14 pt-8">
                <button 
                  onClick={() => setLimitCourse(oldLimitCourse => oldLimitCourse+2)}
                  className=" btn btn-primary">
                  Xem thêm khóa học
                </button>
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntructorDetail;
