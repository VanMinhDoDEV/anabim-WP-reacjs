/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import JsxParser from "react-jsx-parser";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'; // render location
import {
  user2,
  comment,
  calender,
  fbIcon,
  pnIcon,
  twIcon,
  insIcon,
  search
} from "../constant/images";
import useGetPosts from "../Request/PostAPI";

const BlogPost = () => {
  const { postsData, isLoading } = useGetPosts();
  const [randomPosts, setRandomPosts] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (postsData && postsData.length >= 4) {
      let randomPosts = [];
      let postsCopy = [...postsData];  // Tạo một bản sao của postsData

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * postsCopy.length);
        randomPosts.push(postsCopy[randomIndex]);
        postsCopy.splice(randomIndex, 1);  // Xóa bài viết đã lấy ra khỏi mảng
      }
      
      setRandomPosts(randomPosts);
    }
  }, [postsData, location.pathname]); // render location

  const urlSlug = window.location.pathname.split('/').pop();
  return (
    <>
      <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
        <div className="container text-center">
          <h2>Blog</h2>
          <nav>
            <ol className="flex items-center justify-center space-x-3">
              <li className="breadcrumb-item">
                <Link to={"/"}> Home</Link>
              </li>
              <li className="breadcrumb-item">-</li>
              <li className="breadcrumb-item">
                <Link to={"/blog"}> Blog</Link>
              </li>
              <li className="breadcrumb-item">-</li>
              <li className="text-primary">
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          {postsData
          .filter(item => item.slug === urlSlug)
          .map((item, index) => (
          <div className="lg:col-span-8 col-span-12"
          key={index}
          >
            <div className="bg-[#F8F8F8] rounded-md">
              <img src={item.link_thumb} alt="" className=" rounded-t-md mb-10" />
              <div className="px-10 pb-10">
                <div className="flex  flex-wrap  xl:space-x-10 space-x-5 mt-6 mb-6">
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={user2} alt="" />
                    <span>{item.custom_meta.author_name}</span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={calender} alt="" />
                    <span>
                      {new Date(item.date).toLocaleDateString
                      ('vi-VN', { day: 
                      'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </a>
                  <a className=" flex items-center space-x-2" href="#">
                    <img src={comment} alt="" />
                    <span>02 Bình luận</span>
                  </a>
                </div>
                <div className="blog-content">
                  <h1>
                    {item.title.rendered}
                  </h1>
                  <JsxParser jsx={item.content.rendered} decodeEntities />
                </div>
                <div className="grid xl:grid-cols-2 grid-cols-1  gap-5 md:mt-14 mt-8 ">
                  <ul className="flex items-center space-x-3 ">
                    <li className=" text-black font-semibold">Từ khóa:</li>
                    {item.custom_meta.tag_name.map((tag, tagIndex) => (
                      <li key={tagIndex}>
                        <a
                          href="#"
                          className=" px-3 py-1  bg-white rounded hover:text-primary"
                        >
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex space-x-3 xl:justify-end items-center  ">
                    <li className=" text-black font-semibold">Chia sẻ:</li>

                    {[fbIcon, pnIcon, twIcon, insIcon].map((item, indx) => (
                      <li key={indx}>
                        <a href="#" className="flex h-8 w-8">
                          <img src={item} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
           
          </div>
         ))}
         <div className="lg:col-span-4 col-span-12">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="wdiget widget_search">
                <div className="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Từ khóa..."
                      className="border-none focus:ring-0 bg-transparent"
                    />
                  </div>
                  <div className="flex-none">
                    <button className="btn btn-primary">
                      <img src={search} alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-12">
                <div className="sidebarWrapper space-y-[30px]">
                  <div className="wdiget widget-recent-post">
                    <h4 className=" widget-title">Bài ngẫu nhiên</h4>
                    <ul className="list">
                      {randomPosts && randomPosts.length > 0 && randomPosts.map((randomPost) => (
                        <li key={randomPost.id} className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                          <div className="flex-none ">
                            <div className="h-20 w-20  rounded">
                              <Link to={`/blog/${randomPost.slug}`}>
                                <img
                                  src={randomPost.link_thumb}
                                  alt={randomPost.title.rendered}
                                  className=" w-full h-full object-cover rounded"
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="flex-1 ">
                            <div className="mb-1 font-semibold text-black">
                            <Link to={`/blog/${randomPost.slug}`}>
                              {randomPost.title.rendered}
                            </Link>
                            </div>
                            <Link className=" text-secondary font-semibold" to={`/blog/${randomPost.slug}`}>
                              Xem ngay
                            </Link>
                          </div>
                        </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* sidebar */}
              <div className="wdiget">
                <h4 className="widget-title">Từ khóa</h4>
                <ul className="flex flex-wrap">
                    {
                      !isLoading &&
                      postsData.length > 0 &&
                      (() => {
                        let displayedTags = {};
                        return postsData.map((item, index) =>
                          item.custom_meta &&
                            item.custom_meta.tag_name &&
                            (Array.isArray(item.custom_meta.tag_name)
                              ? item.custom_meta.tag_name.map((tag, tagIndex) => {
                                    if (!displayedTags[tag]) {
                                        displayedTags[tag] = true;
                                        return (
                                          <li className="mr-2 mb-2" key={`${index}_${tagIndex}`}>
                                            <a href="#" 
                                            className=
                                            "bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  
                                            duration-150 hover:bg-primary hover:text-white">
                                              {tag}
                                            </a>
                                          </li>
                                        )
                                    }
                                })
                              : (!displayedTags[item.custom_meta.tag_name] &&
                                (displayedTags[item.custom_meta.tag_name] = true) &&
                                <li className="mr-2 mb-2" key={`${index}_0`}>
                                  <a href="#" className=
                                  "bg-[#F8F8F8] px-3 py-1 rounded text-base  transition-all  
                                  duration-150 hover:bg-primary hover:text-white">
                                    {item.custom_meta.tag_name}
                                  </a>
                                </li>
                              )
                          )
                        );
                      })()
                    }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </> 
  );
};
export default BlogPost;
