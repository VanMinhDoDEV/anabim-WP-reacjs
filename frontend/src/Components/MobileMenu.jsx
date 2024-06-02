import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';
import { fbIcon, twIcon, pnIcon, insIcon } from '../constant/images';
import useGetMenus from '../Request/MenuAPI';

const MobileMenu = ({ activeMenu, setActiveMenu }) => {
  const { mainNavData, isLoading } = useGetMenus();
  console.log(mainNavData);
  const [activeMenus, setActiveMenus] = useState([]);

  const handleShowMenu = (id) => {
    setActiveMenus((prevActiveMenus) => 
      prevActiveMenus.includes(id) ? prevActiveMenus.filter((menuId) => menuId !== id) : [...prevActiveMenus, id]
    )
  };

  const showMenu = (id) => {
    return activeMenus.includes(id);
  };

  const handleLinkClick = (e, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
    }
  };

  const MenuItem = ({ item }) => {
    const hasChildren = item.children && item.children.length > 0;
    return (
      <li
        className={`${hasChildren ? 'menu-item-has-children' : ''} ${showMenu(item.id) ? 'open' : ''}`}
        onClick={() => hasChildren && handleShowMenu(item.id)}
      >
        <a href={item.url} onClick={(e) => handleLinkClick(e, hasChildren)}>{item.title}</a>
        {hasChildren && (
          <ul className='sub-menu' style={{ display: showMenu(item.id) ? 'block' : 'none' }}>
            {item.children.map((child) => (
              <MenuItem item={child} key={child.id} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className='openmobile-menu fixed top-0 h-screen pt-10 pb-6 bg-white shadow-box2 w-[320px] overflow-y-auto flex flex-col z-[999] active-mobile-menu'>
        <div className='flex justify-between px-6 flex-none'>
          <Link to={'/react-templates/edumim/home'} className='brand-logo flex-none mr-10 '>
            <img src={logo} alt='logo' />
          </Link>
          <span
            className=' text-3xl text-black cursor-pointer rt-mobile-menu-close'
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <iconify-icon icon='fe:close'></iconify-icon>
          </span>
        </div>

        <div className='mobile-menu mt-6 flex-1 '>
          <ul className='menu-active-classNamees'>
            {mainNavData.map((item) => (
              <MenuItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
        <div className=' flex-none pb-4'>
          <div className=' text-center text-black font-semibold mb-2'>Theo dõi chúng tôi</div>
          <ul className='flex space-x-4 justify-center '>
            <li>
              <a href='#' className='flex h-10 w-10'>
                <img src={fbIcon} alt='fbIcon' />
              </a>
            </li>
            <li>
              <a href='#' className='flex h-10 w-10'>
                <img src={twIcon} alt='twiter' />
              </a>
            </li>
            <li>
              <a href='#' className='flex h-10 w-10'>
                <img src={pnIcon} alt='pnIcon' />
              </a>
            </li>
            <li>
              <a href='#' className='flex h-10 w-10'>
                <img src={insIcon} alt='insIcon' />
              </a>
            </li>
          </ul>
        </div>
      </div>{' '}
      <div className={`rt-mobile-menu-overlay ${activeMenu && 'active'}`}></div>
    </>
  );
};

export default MobileMenu;