/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo/logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);

  useEffect(() => {
    // Gọi API để lấy dữ liệu menu
    axios.get(`${process.env.REACT_APP_API_ROOT_WP}/menu/main_nav/`)
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error('Có lỗi xảy ra khi gọi API:', error);
      });

    // Scrolling nav
    const handleScroll = () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderMenuItems = (items) => {
    return items.map(item => {
      const hasChildren = item.children && item.children.length > 0;

      //render url Wp -react

      //1: render all link, but all link is <a>
      const MyLink = ({ to, isReactRoute, children }) => {
        if (isReactRoute) {
          return <Link to={to}>{children}</Link>;
        } else {
          return <a href={to}>{children}</a>;
        }
      };
      // 2: link but not <a>

      // let url = '#';
      // try {
      //   url = new URL(item.url).pathname;
      // } catch(error) {
      //   console.error('Invalid URL:', item.url);
      // }

      return (
        <li key={item.id} className={hasChildren ? "menu-item-has-children" : ""}>
          {/* link */}
          {/* 1 */}
          <MyLink to={item.url} isReactRoute={item.isReactRoute}>{item.title}</MyLink>
          {/* 2 */}
          {/* <Link to={url}>{item.title}</Link> */}
          {hasChildren && (
            <ul className="sub-menu">
              {renderMenuItems(item.children)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <>
      <header
        className="site-header home-one-header top-0 w-full z-[999] rt-sticky"
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className="flex items-center justify-between">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]"
              >
                <img src={logo} alt="logo" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classes">
                    {renderMenuItems(menuItems)}
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className="hidden lg:block">
                    <Link to={"/khoa-hoc"} className="btn btn-primary py-[15px] px-8">
                      Khóa học
                    </Link>
                  </div>
                  <div className="block lg:hidden">
                    <button
                      type="button"
                      className="text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon icon="cil:hamburger-menu" rotate="180deg"></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
