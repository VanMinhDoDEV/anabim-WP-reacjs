import React from "react";
import { Link } from "react-router-dom";
import { clock, file, star } from "../constant/images";

const Course = ({ course, index }) => {
  const slug = course.slug_category;

  // console.log('Dữ liệu từ course:', course);
  return (
    <div
      className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
      href={`http://localhost/anabim/server/courses/${course.slug}`}
      key={index}
    >
      <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
        <a href={course.link}>
          <img
            src={course.featured_media}
            alt={course.title.rendered}
            className=" w-full h-full object-cover rounded-t-[8px]"
          />
        </a>
        <Link to={`/danh-muc-khoa-hoc/${slug}`}>
          <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
            {course['course-category'][0]}
          </span>
        </Link>
      </div>
      <div className="course-content p-8">
        <div className="text-secondary font-bold text-2xl mb-3">
          {course.price ? (parseInt(course.price).toLocaleString('vi-VN') + 'đ') : 'Liên Hệ'} 
        </div>
        <a href={course.link}>
          <h4 className=" text-xl mb-3 font-bold">{course.title.rendered}</h4>
        </a>
        <div className="flex justify-between  space-x-3">
          <span className=" flex items-center space-x-2">
            <img src={file} alt="Maximum students" />
            <span>{course.additional_info.course_settings.maximum_students} Bài</span>
          </span>
          <span className=" flex items-center space-x-2">
            <img src={clock} alt="Course duration" />
            <span> 
              {`${course.additional_info.course_duration.hours}h 
              ${course.additional_info.course_duration.minutes}m`} 
            </span>
          </span>
          <span className=" flex items-center space-x-2">
            <img src={star} alt="Course rating" />
            <span>5</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Course;