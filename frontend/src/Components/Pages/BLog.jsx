/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import JsxParser from "react-jsx-parser";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {
  calender,
  search,
  user2
} from "../../constant/images";
import Footer from "../Footer";
import Header from "../Header";
import useGetPosts from "../../Request/PostAPI";

const BLogStandard = () => {
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
  }, [postsData, location.pathname]);
  
  return (
    <>
      <Header />
      <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
        <div className="container text-center">
          <h2>Blog</h2>
          <nav>
            <ol className="flex items-center justify-center space-x-3">
              <li className="breadcrumb-item">
                <Link to={"/"}> Home</Link>
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
            <div className="lg:col-span-8 col-span-12">
              <div className="grid  grid-cols-1 gap-[30px]">
                {!isLoading && postsData.length > 0 ? postsData.map((item, index) => (
                  <div className=" bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13" key={index}>
                    <div className="course-thumb h-[420px] rounded-t-[8px] relative">
                      <img
                        src={item.link_thumb}
                        alt={item.title}
                        className=" w-full h-full object-cover rounded-t-[8px]"
                      />
                    </div>
                    <div className="course-content p-8">
                      <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white inline-block">
                        Blog
                      </span>
                      <h3 className=" mb-4 mt-4">
                        <Link
                          to={`/blog/${item.slug}`}
                          className=" hover:text-primary transition duration-150"
                        >
                          {item.title.rendered}
                        </Link>
                      </h3>
                      <div>
                        <JsxParser jsx={item.excerpt.rendered} />
                      </div>
                      <div className="flex lg:space-x-10 space-x-5 mt-6">
                        <div className=" flex items-center space-x-2">
                          <img src={calender} alt="" />
                          <span>
                              {new Date(item.date).toLocaleDateString
                              ('vi-VN', { day: 
                              'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <div className=" flex items-center space-x-2">
                          <img src={user2} alt="" />
                          <span>{item.custom_meta.author_name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
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
      <Footer />
    </>
  );
};

export default BLogStandard;
