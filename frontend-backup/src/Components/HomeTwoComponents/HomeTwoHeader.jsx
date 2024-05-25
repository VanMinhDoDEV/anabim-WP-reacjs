/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import wfb from "../../assets/images/social/wfb.svg";
import wt from "../../assets/images/social/wt.svg";
import wi from "../../assets/images/social/w-i.svg";
import wins from "../../assets/images/social/w-ins.svg";
import search from "../../assets/images/svg/search.svg";
import logo from "../../assets/images/logo/logo.svg";
import man2 from "../../assets/images/banner/man2.png";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
const HomeTwoHeader = () => {
  const scrollNav = useRef(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  let body = document.querySelector("body");
  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
    });
  }, []);
  showSearchBar
    ? body.classList.add("modal-open")
    : body.classList.remove("modal-open");

  body.classList.contains("modal-open")
    ? (document.documentElement.scrollTop = 0)
    : "";
  return (
    <section className=" xl:min-h-screen bg-[url('../images/banner/2.png')] bg-cover bg-no-repeat bg-center overflow-hidden xl:pb-[130px]">
      <header className="site-header ">
        <div className="bg-primary text-white py-3 md:block hidden">
          <div className=" container">
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 ">
              <ul className=" flex  divide-x divide-white divide-opacity-25 text-base lg:justify-start justify-center">
                <li className="mr-4">12893 Green Valley Street, USA 83682</li>
                <li className="pl-4">
                  <a href="mailto:contactinfo@gmail.com">
                    contactinfo@gmail.com
                  </a>
                </li>
              </ul>
              <ul className=" text-base flex  lg:justify-end justify-center divide-x divide-white divide-opacity-25 items-center">
                <li className="px-2">Follow Us On:</li>
                <li className="px-2">
                  <a href="#">
                    <img src={wfb} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wt} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wi} alt="" />
                  </a>
                </li>
                <li className="px-2">
                  <a href="#">
                    <img src={wins} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="main-header py-8 header-normal2  rt-sticky top-0 w-full z-[999] "
          ref={scrollNav}
        >
          <div className="container">
            <div className=" flex items-center justify-between ">
              <Link
                to={"/react-templates/edumim"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]  "
              >
                <img src={logo} alt="" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li className={`menu-item-has-children `}>
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim"}> Home One</Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-two"}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-three"}>
                            Home Three
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/about"}>
                            About 1
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/about-two"}>
                            About 2
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/instructor"}>
                            Instructor
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/instructor-two"}>
                            Instructor 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/react-templates/edumim/instructor-details"}
                          >
                            Instructor Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event"}>
                            Event
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/event-single"}>
                            Event Single
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/error"}>404</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Courses</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/courses"}>
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/courses-sidebar"}>
                            Courses Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-course"}>
                            Single Course
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim/blog-standard"}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/single-blog"}>
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/react-templates/edumim/contacts"}>
                        Contacts
                      </Link>
                    </li>
                  </ul>
                  <div className=" lg:block hidden">
                    <div className="border border-gray rounded-md  h-[46px] modal-search">
                      <input
                        type="text"
                        className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
                        placeholder="Search.."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div>
                    <button
                      type="button"
                      className=" md:w-[56px] md:h-[56px] h-10 w-10 rounded bg-white flex flex-col items-center justify-center modal- 
                      trigger"
                      onClick={handleShowSearchBar}
                    >
                      <img src={search} alt="" />
                    </button>
                  </div>
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-white flex flex-col items-center justify-center menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                  <div className=" hidden lg:block">
                    <a
                      href="#"
                      className="btn bg-black text-white py-[15px] px-8"
                    >
                      Start Free Trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className=" lg:hidden block">
          <div className="border border-gray rounded-md  h-[46px] modal-search">
            <input
              type="text"
              className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
      <div className="container relative">
        <div className="xl:max-w-[570px] xl:pt-[129px] lg:py-28 md:py-20 py-14  lg:space-y-10 space-y-6">
          <div className=" lg:text-[77px] lg:leading-[106.4px]  md:text-6xl md:leading-[72px] text-black font-bold text-5xl leading-[62px]">
            Better <span className="text-primary">Learning Future</span> Starts
            With Edumim
          </div>
          <div className=" plain-text text-gray leading-[30px] border-l-2 border-primary pl-4">
            It is long established fact that reader distracted by the readable
            content.
          </div>
          <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0 pt-5">
            <a href="#" className="btn btn-primary">
              Get Started Now
            </a>{" "}
            <a href="#" className="btn btn-black">
              Get Started Now
            </a>
          </div>
        </div>
        <div className="imge-box  hidden  xl:block absolute right-[-60px] top-1/2  -translate-y-1/2 mt-[60px]  ">
          <img src={man2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeTwoHeader;
