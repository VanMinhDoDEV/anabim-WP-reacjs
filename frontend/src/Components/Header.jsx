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
    axios.get('http://localhost/anabim/server/wp-json/wp/v2/menu/main_nav')
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
      return (
        <li key={item.id} className={hasChildren ? "menu-item-has-children" : ""}>
          <a href={item.url}>{item.title}</a>
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
                    <a href="#" className="btn btn-primary py-[15px] px-8">
                      Khóa học
                    </a>
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
