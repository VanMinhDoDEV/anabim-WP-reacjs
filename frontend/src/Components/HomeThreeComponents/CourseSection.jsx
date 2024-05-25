import React, { useState, useEffect } from "react";
import axios from "axios";
import useCoursesAPI from "../../Request/CoursesAPI";
import CourseFilter from "./CourseFilter";
import SingleCourse from "./SingleCourse";

const CourseSection = () => {
  const [filterData, setFilterData] = useState([]);
  const [activeData, setActiveData] = useState(0);
  
  const { data: courses, isLoading } = useCoursesAPI();

  useEffect(() => {
    if (courses) {
      const filteredCourses = courses.data && courses.data.posts;
      setFilterData(filteredCourses);
    }
  }, [courses]);
  return (
    <div className="section-padding bg-[url('../images/all-img/section-bg-11.png')] bg-cover bg-no-repeat">
      <div className="container">
        <div className="flex items-center flex-wrap flex-y-4">
          <div className="flex-1">
            <div className="mini-title">Khóa học của chúng tôi</div>
            <div className="column-title">
              Xin chọn <span className="shape-bg">Khóa học</span> phù hợp
            </div>
          </div>
          <div className="flex-none">
            <CourseFilter
              mainData={useCoursesAPI}
              activeData={activeData}
              setActiveData={setActiveData}
              setFilterData={setFilterData} />
          </div>
        </div>
        <div className="flex flex-wrap pt-10 grids">
          {!isLoading && filterData?.length > 0 ? (
            filterData.slice(0, 12).map((data, index) => (
              <SingleCourse key={index} courseData={data} />
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>Hiện chưa có khóa học nào</h1>
          )}
        </div>
        <div className="text-center lg:pt-16 pt-10">
          <a href="#" className="btn btn-primary">
            Xem thêm khóa học
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;