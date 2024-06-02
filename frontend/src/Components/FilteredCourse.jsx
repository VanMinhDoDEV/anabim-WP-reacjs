/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tab } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  user2,
  clock,
  file,
  review,
  star,
} from "../constant/images";

const FilteredCourse = ({ dataWPCourses, classNameForTabOne, classNameForTabTwo }) => {

  const [limitCourse, setLimitCourse] = useState(9); 
  
  console.log('đây là dữ liệu dataWPCourses:', dataWPCourses);
  const [sortType, setSortType] = useState('initial');
  const [sortedCourses, setSortedCourses] = useState([...dataWPCourses]);

const handleSortChange = (e) => {
  setSortType(e.target.value);
};

useEffect(() => {
  const sortArray = (type) => {
    const types = {
      popularity: 'popularity',
      price: 'price',
      category: 'category',
      initial: 'initial',
    };
    const sortProperty = types[type];
    const sortedCourses = [...dataWPCourses].sort((a, b) => (
      a[sortProperty] > b[sortProperty] ? 1 : -1
    ));
    setSortedCourses(sortedCourses);
  };
  sortArray(sortType);
}, [sortType]);


  const listIcon = [
    "clarity:grid-view-line",
    "ant-design:unordered-list-outlined",
  ];
  return (
    <Tab.Group>
      <div className="flex flex-wrap gap-5 justify-center  items-center mb-14">
        <div className="flex-1 flex flex-wrap gap-5  space-x-6  items-center">
          <Tab.List as="ul" id="tabs-nav" className=" flex space-x-4 cata-Tbas">
            {listIcon.map((className, key) => (
              <Tab
                as="li"
                className={({ selected }) => (selected ? "active" : "")}
                key={key}
              >
                <a
                  href="#"
                  className=" h-[60px] w-[60px]  flex flex-col justify-center items-center"
                >
                  <iconify-icon icon={className}></iconify-icon>
                </a>
              </Tab>
            ))}
          </Tab.List>
          <span>{limitCourse} Trong tổng số {dataWPCourses.length} Khóa học.</span>
        </div>
        <div className="flex-0">
          <div className="min-w-[272px]">
            <select onChange={handleSortChange}>
                <option value="popularity">Sắp xếp: Thứ tự phổ biến</option>
                <option value="price">Sắp xếp: Giá</option>
                <option value="category">Sắp xếp: Danh mục</option>
            </select>
          </div>
        </div>
      </div>
      <Tab.Panels as="div" id="tabs-content">
        <Tab.Panel as="div" id="tab1" className="tab-content">
          <div className={classNameForTabOne}>
          {dataWPCourses && dataWPCourses.length > 0 && sortedCourses && dataWPCourses.slice(0, limitCourse).map((item, index) => (
              <div
                className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                key={item.id || index}
              >
                <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                  <a href={item.link}>
                    <img
                      src={item.featured_media}
                      alt={item.title.rendered}
                      className=" w-full h-full object-cover rounded-t-[8px]"
                    />
                  </a>
                 <Link to={`/danh-muc-khoa-hoc/${item.slug_category}`}>
                    <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                      {item['course-category'][0]}
                    </span>
                  </Link>
                </div>
                <div className="course-content p-8">
                  <div className="text-secondary font-bold text-2xl mb-3">
                  {item.price ? (parseInt(item.price).toLocaleString('vi-VN') + 'đ') : 'Liên Hệ'}
                  </div>
                  <a href={item.link}>
                    <h4 className=" text-xl mb-3 font-bold">{item.title.rendered}</h4>
                  </a>
                  <div className="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
                    <span className=" flex items-center space-x-2 mr-3">
                      <img src={file} alt="" />
                      <span>{item.additional_info.course_settings.maximum_students} Bài</span>
                    </span>
                    <span className=" flex items-center space-x-2 mr-3">
                      <img src={clock} alt="" />
                      <span> 
                        {`${item.additional_info.course_duration.hours}h 
                        ${item.additional_info.course_duration.minutes}m`} 
                      </span>
                    </span>
                    <span className=" flex items-center space-x-2 ">
                      <img src={star} alt="" />
                      <span>5</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {limitCourse < dataWPCourses.length && (
          <div className="text-center pt-14">
            <button
              onClick={() => setLimitCourse(oldLimitCourse => oldLimitCourse+3)}
              className=" btn btn-primary inline-flex items-center  space-x-[10px]"
            >
              <span>Xem thêm</span>
              <span className=" relative top-1">
                <iconify-icon icon="ion:reload-outline"></iconify-icon>
              </span>
            </button>
          </div>
          )}
        </Tab.Panel>
        <Tab.Panel id="tab2" className="tab-content">
          <div className={classNameForTabTwo}>
            {dataWPCourses && dataWPCourses.length > 0 && dataWPCourses.slice(0, limitCourse-1).map((item, index) => (
              <div
                className=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
                hover:shadow-box6 flex p-8 space-x-6"
                key={index}
              >
                <div className="flex-none">
                  <div className="w-[159px] h-[159px]  rounded  relative">
                    <img
                      src={item.featured_media}
                      alt={item.title.rendered}
                      className=" w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="course-content flex-1">
                  <div className="text-primary font-bold text-2xl mb-2 flex justify-between">
                    <span className=" inline-block">
                      {item.price ? (parseInt(item.price).toLocaleString('vi-VN') + 'đ') : 'Liên Hệ'}
                    </span>
                    <span className=" flex space-x-1">
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                    </span>
                  </div>
                  <h4 className=" text-2xl leading-[36px] mb-4 font-bold">
                    {item.title.rendered}
                  </h4>
                  <div className="flex   space-x-6">
                    <span className=" flex items-center space-x-2">
                      <img src={file} alt="" />
                      <span>{item.additional_info.course_settings.maximum_students} Bài</span>
                    </span>
                    <span className=" flex items-center space-x-2">
                      <img src={user2} alt="" />
                      <span> 
                        {item.author} 
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {limitCourse < dataWPCourses.length && (
          <div className="text-center pt-14">
            <button
              onClick={() => setLimitCourse(oldLimitCourse => oldLimitCourse+2)}
              className=" btn btn-primary inline-flex items-center  space-x-[10px]">
              <span>Xem thêm</span>
              <span className=" relative top-1">
                <iconify-icon icon="ion:reload-outline"></iconify-icon>
              </span>
            </button>
          </div>
          )}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FilteredCourse;


/*code backup  */
// import { Tab } from "@headlessui/react";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   user2,
//   clock,
//   file,
//   review,
//   star,
// } from "../constant/images";

// const FilteredCourse = ({ dataWPCourses, classNameForTabOne, classNameForTabTwo }) => {

//   const [limitCourse, setLimitCourse] = useState(9); 
  
//   console.log('đây là dữ liệu dataWPCourses:', dataWPCourses);

//   const listIcon = [
//     "clarity:grid-view-line",
//     "ant-design:unordered-list-outlined",
//   ];
//   return (
//     <Tab.Group>
//       <div className="flex flex-wrap gap-5 justify-center  items-center mb-14">
//         <div className="flex-1 flex flex-wrap gap-5  space-x-6  items-center">
//           <Tab.List as="ul" id="tabs-nav" className=" flex space-x-4 cata-Tbas">
//             {listIcon.map((className, key) => (
//               <Tab
//                 as="li"
//                 className={({ selected }) => (selected ? "active" : "")}
//                 key={key}
//               >
//                 <a
//                   href="#"
//                   className=" h-[60px] w-[60px]  flex flex-col justify-center items-center"
//                 >
//                   <iconify-icon icon={className}></iconify-icon>
//                 </a>
//               </Tab>
//             ))}
//           </Tab.List>
//           <span>Bạn đang xem  {limitCourse} Khóa học<br/>Trong tổng số {dataWPCourses.length} Khóa học.</span>
//         </div>
//         <div className="flex-0">
//           <div className="min-w-[272px]">
//             <select>
//               <option data-display="Sort By: Popularity">
//                 Sort By: Popularity
//               </option>
//               <option value="1">Popularity</option>
//               <option value="2">Another option</option>
//               <option value="4">Potato</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <Tab.Panels as="div" id="tabs-content">
//         <Tab.Panel as="div" id="tab1" className="tab-content">
//           <div className={classNameForTabOne}>
//           {dataWPCourses && dataWPCourses.length > 0 && dataWPCourses.slice(0, limitCourse).map((item, index) => (
//               <div
//                 className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
//                 href={item.link}
//                 key={item.id || index}
//               >
//                 <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
//                   <img
//                     src={item.featured_media}
//                     alt={item.title.rendered}
//                     className=" w-full h-full object-cover rounded-t-[8px]"
//                   />
//                   <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
//                     {item['course-category'][0]}
//                   </span>
//                 </div>
//                 <div className="course-content p-8">
//                   <div className="text-secondary font-bold text-2xl mb-3">
//                   {item.price ? (parseInt(item.price).toLocaleString('vi-VN') + 'đ') : 'Liên Hệ'}
//                   </div>
//                   <h4 className=" text-xl mb-3 font-bold">{item.title.rendered}</h4>
//                   <div className="flex justify-between  flex-wrap space-y-1 xl:space-y-0">
//                     <span className=" flex items-center space-x-2 mr-3">
//                       <img src={file} alt="" />
//                       <span>{item.additional_info.course_settings.maximum_students} Bài</span>
//                     </span>
//                     <span className=" flex items-center space-x-2 mr-3">
//                       <img src={clock} alt="" />
//                       <span> 
//                         {`${item.additional_info.course_duration.hours}h 
//                         ${item.additional_info.course_duration.minutes}m`} 
//                       </span>
//                     </span>
//                     <span className=" flex items-center space-x-2 ">
//                       <img src={star} alt="" />
//                       <span>5</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {limitCourse < dataWPCourses.length && (
//           <div className="text-center pt-14">
//             <button
//               onClick={() => setLimitCourse(oldLimitCourse => oldLimitCourse+3)}
//               className=" btn btn-primary inline-flex items-center  space-x-[10px]"
//             >
//               <span>Xem thêm</span>
//               <span className=" relative top-1">
//                 <iconify-icon icon="ion:reload-outline"></iconify-icon>
//               </span>
//             </button>
//           </div>
//           )}
//         </Tab.Panel>
//         <Tab.Panel id="tab2" className="tab-content">
//           <div className={classNameForTabTwo}>
//             {dataWPCourses && dataWPCourses.length > 0 && dataWPCourses.slice(0, limitCourse-1).map((item, index) => (
//               <Link
//                 className=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
//                 hover:shadow-box6 flex p-8 space-x-6"
//                 to={"/react-templates/edumim/single-course"}
//                 key={index}
//               >
//                 <div className="flex-none">
//                   <div className="w-[159px] h-[159px]  rounded  relative">
//                     <img
//                       src={item.featured_media}
//                       alt={item.title.rendered}
//                       className=" w-full h-full object-cover rounded"
//                     />
//                   </div>
//                 </div>
//                 <div className="course-content flex-1">
//                   <div className="text-primary font-bold text-2xl mb-2 flex justify-between">
//                     <span className=" inline-block">
//                       {item.price ? (parseInt(item.price).toLocaleString('vi-VN') + 'đ') : 'Liên Hệ'}
//                     </span>
//                     <span className=" flex space-x-1">
//                       <span className="w-4 h-4 inline-block ">
//                         <img
//                           src={review}
//                           alt=""
//                           className=" w-full h-full block object-cover"
//                         />
//                       </span>
//                       <span className="w-4 h-4 inline-block ">
//                         <img
//                           src={review}
//                           alt=""
//                           className=" w-full h-full block object-cover"
//                         />
//                       </span>
//                       <span className="w-4 h-4 inline-block ">
//                         <img
//                           src={review}
//                           alt=""
//                           className=" w-full h-full block object-cover"
//                         />
//                       </span>
//                       <span className="w-4 h-4 inline-block ">
//                         <img
//                           src={review}
//                           alt=""
//                           className=" w-full h-full block object-cover"
//                         />
//                       </span>
//                     </span>
//                   </div>
//                   <h4 className=" text-2xl leading-[36px] mb-4 font-bold">
//                     {item.title.rendered}
//                   </h4>
//                   <div className="flex   space-x-6">
//                     <span className=" flex items-center space-x-2">
//                       <img src={file} alt="" />
//                       <span>{item.additional_info.course_settings.maximum_students} Bài</span>
//                     </span>
//                     <span className=" flex items-center space-x-2">
//                       <img src={user2} alt="" />
//                       <span> 
//                         {item.author} 
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           {limitCourse < dataWPCourses.length && (
//           <div className="text-center pt-14">
//             <button
//               onClick={() => setLimitCourse(oldLimitCourse => oldLimitCourse+2)}
//               className=" btn btn-primary inline-flex items-center  space-x-[10px]">
//               <span>Xem thêm</span>
//               <span className=" relative top-1">
//                 <iconify-icon icon="ion:reload-outline"></iconify-icon>
//               </span>
//             </button>
//           </div>
//           )}
//         </Tab.Panel>
//       </Tab.Panels>
//     </Tab.Group>
//   );
// };

// export default FilteredCourse;
