import React from 'react';
import { Link } from 'react-router-dom';
import { clock, file, star } from '../../constant/images';

const SingleCourse = ({ courseData }) => {
  const slug = courseData.slug_category;
  return (
    <div className="cat-2 cat-3 grid-item xl:w-1/3 lg:w-1/2 w-full px-[15px] mb-[15px]" key={courseData.id}>
      <div className="bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm block mb-5">
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <a href={courseData.link}>
            <img src={courseData.featured_media} alt={courseData.title.rendered} className="w-full h-full object-cover rounded-t-[8px]" />
          </a>
          <Link to={`/danh-muc-khoa-hoc/${slug}`}>
            <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
              {courseData['course-category'][0]}
            </span>
          </Link>
        </div>
        <div className="course-content p-8">
          <div className="text-secondary font-bold text-2xl mb-3">
            {courseData.price ? (parseInt(courseData.price).toLocaleString('vi-VN') + 'đ') : 'Liên Hệ'}
          </div>
          <a href={courseData.link}>
            <h4 className="text-xl mb-3 font-bold">{courseData.title.rendered}</h4>
          </a>
          <div className="flex justify-between space-x-3">
            <span className="flex items-center space-x-2">
              <img src={file} alt="" />
              <span>{courseData.additional_info.course_settings.maximum_students} Bài</span>
            </span>
            <span className="flex items-center space-x-2">
              <img src={clock} alt="" />
              <span> 
                {`${courseData.additional_info.course_duration.hours}h 
                ${courseData.additional_info.course_duration.minutes}m`} 
              </span>
            </span>
            <span className="flex items-center space-x-2">
              <img src={star} alt="" />
              <span>5</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;