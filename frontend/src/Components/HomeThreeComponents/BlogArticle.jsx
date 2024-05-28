/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { calender2, user2 } from "../../constant/images";
import useGetPosts from "../../Request/PostAPI";

const BlogArticle = () => {
  const { postsData, isLoading } = useGetPosts();



  //  useEffect(() => {
  //   if(postsData){
  //       console.log(postsData);
  //   }
  // }, [postsData]);

  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Tin tức và Blog</div>
          <div className="column-title ">
             <span className="shape-bg">Tin tức</span> có thể bạn đang cần
          </div>
        </div>
        <div className="grid  xl:grid-cols-2 grid-cols-1 gap-[30px] lg:pt-10  pt-5">
          {postsData.map((post, index) => (
            <div
              className=" bg-white shadow-box7 rounded-[8px] group transition duration-150 ring-0 hover:ring-2 hover:ring-primary
            hover:shadow-box8 sm:flex p-4 sm:space-x-6 space-y-6 sm:space-y-0"
              key={post.id}
            >
              <div className="flex-none">
                <div className="sm:w-[200px] h-[182px]  rounded  relative">
                  <img
                    src={post.link_thumb}
                    alt={post.title.rendered}
                    className=" w-full h-full object-cover rounded"
                  />
                </div>
              </div>
              <div className="course-content flex-1">
                <div className="mb-4">
                  <span className="inline-block text-base text-secondary bg-[#E3F9F6] font-medium rounded px-[10px] py-1">
                    Blog
                  </span>
                </div>
                <h4 className=" lg:text-2xl lg:leading-[36px] text-1xl mb-4 font-bold">
                  <Link
                    to={'/react-templates/edumim/single-blog'}
                    className=" group-hover:text-primary transitio duration-150"
                  >
                    {post.title.rendered}
                  </Link>
                </h4>
                <div className="flex   space-x-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender2} alt="" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user2} alt="" />
                    <span>Minh Tàu</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
