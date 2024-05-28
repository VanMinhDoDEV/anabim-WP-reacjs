/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerLogo from "../assets/images/logo/footer-logo.svg";
import useGetMenus from "../Request/MenuAPI";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  const {mainNavData, footerNavOneData, footerNavTwoData, isLoading } = useGetMenus();

  return (
    <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-padding container">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          <div className="single-footer">
            <div className="lg:max-w-[270px]">
              <a href="#" className="mb-10 block">
                <img src={footerLogo} alt="" />
              </a>
              <p>
                Nền tảng elearning giúp kết nối giảng viên và học viên 
                chúng tôi hỗ trợ đa nền tảng thông qua công nghệ web.
              </p>
              <ul className="flex space-x-4 pt-8">
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:facebook"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:twitter"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:linkedin"></iconify-icon>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition hover:bg-primary hover:text-white"
                  >
                    <iconify-icon icon="bxl:instagram"></iconify-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="single-footer">
            <div className="flex space-x-[80px]">
              <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Links</h4>
                {footerNavOneData.map(item => 
                <ul className="list-item space-y-5" key={item.id}>
                  <li>
                    <a href={item.url}>
                      {item.title}</a>
                  </li>
                </ul>
                )}
              </div>
              {/* <div className="flex-1 lg:flex-none">
                <h4 className="mb-8 text-2xl font-bold text-white">Legal</h4>
                {footerNavTwoData.map(item => 
                <ul className="list-item space-y-5" key={item.id}>
                  <li>
                    <a href={item.url}>
                      {item.title}</a>
                  </li>
                </ul>
                )}
              </div> */}
            </div>
          </div>
          <div className="single-footer">
            <h4 className="mb-8 text-2xl font-bold text-white">Nhận tin tức</h4>
            <div className="mb-8">
              Đăng ký để <span className="text-primary underline">Nhận tin miên phí</span>{" "}
              từ chúng tôi. Để chúng ta cùng tốt hơn!
            </div>
            <div className="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
              <div className="flex-none">
                <span className=" ">
                  <img src="assets/images/icon/mail.svg" alt="" />
                </span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Nhập email của bạn"
                  className="border-none focus:ring-0"
                />
              </div>
            </div>
            <button className="btn btn-primary block w-full text-center">
              Đăng ký nhận tin
            </button>
          </div>
        </div>
      </div>
      <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
        &copy; Copyright {updatedDate} | Min Web | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
