import React from 'react';
import { clock, file, star } from '../../constant/images';

const SingleCourse = ({ courseData }) => {

  // console.log('Rendering SingleCourse for data', courseData);
  const {
    course_category,
    guid,
    thumbnail_url,
    additional_info,
    ratings,
    post_title,
  } = courseData;
  const courseDuration = `${additional_info.course_duration[0].hours}h ${additional_info.course_duration[0].minutes}m`;
  return (
    <div className="cat-2 cat-3 grid-item xl:w-1/3 lg:w-1/2 w-full px-[15px] mb-[15px]" key={courseData.ID}>
      <a className="bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm block mb-5" href={`http://localhost/anabim/server/courses/${courseData.post_name}`}>
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <img src={thumbnail_url} alt="" className="w-full h-full object-cover rounded-t-[8px]" />
          <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
            {course_category[0].name}
          </span>
        </div>
        <div className="course-content p-8">
          <div className="text-secondary font-bold text-2xl mb-3">Liên hệ</div>
          <h4 className="text-xl mb-3 font-bold">{post_title}</h4>
          <div className="flex justify-between space-x-3">
            <span className="flex items-center space-x-2">
              <img src={file} alt="" />
              <span>{additional_info.course_settings[0].maximum_students} Bài</span>
            </span>
            <span className="flex items-center space-x-2">
              <img src={clock} alt="" />
              <span>{courseDuration}</span>
            </span>
            <span className="flex items-center space-x-2">
              <img src={star} alt="" />
              <span>{ratings.rating_avg}</span>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SingleCourse;