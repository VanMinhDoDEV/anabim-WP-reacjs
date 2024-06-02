import React from "react";
import { useParams } from 'react-router-dom';
import FilteredCourse from "../FilteredCourse";
import Footer from "../Footer";
import Header from "../Header";
import useCoursesAPI from "../../Request/CoursesAPI";
import PageBanner from "../PageBanner";

const CourseCategory = () => {
  const { dataWPCourses, isLoading} = useCoursesAPI();
  const { slug } = useParams();
  const filteredCourses   = dataWPCourses.filter(course => course.slug_category === slug);
  return (
    <>
      <Header />
      <PageBanner title={"Courses"} pageName="Courses" />
      <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom">
        <div className="container">
          <FilteredCourse
            dataWPCourses={filteredCourses}
            classNameForTabOne={
              "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]"
            }
            classNameForTabTwo={
              "grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[30px]"
            }
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseCategory;
