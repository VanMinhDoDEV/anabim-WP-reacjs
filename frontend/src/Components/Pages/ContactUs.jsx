import React from "react";
import { call, mail, map } from "../../constant/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Contact Us"} pageName="Contact" />
      <div className="nav-tab-wrapper tabs  section-padding">
        <div className="container">
          <div className=" grid grid-cols-12 gap-[30px]">
            <div className="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <div className="mini-title">Liên hệ </div>
              <h4 className="column-title ">
                Chúng tôi đang <span className="shape-bg">Chờ phản hồi</span>
              </h4>
              <div>
                Để không bỏ lỡ bất kỳ điều gì từ chúng tôi, 
                xin bạn để lại thông tin giúp chúng tôi nhanh 
                chóng phản hồi yêu cầu của bạn.
              </div>
              <ul className=" list-item space-y-6 pt-8">
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={mail} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1">Email chúng tôi:</h4>
                    <div>Contactyourmail@gmail.com</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={call} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className=" lg:text-xl text-lg mb-1">Số điện thoại chúng tôi:</h4>
                    <div>094.9229.686</div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-none mr-6">
                    <div className="">
                      <img src={map} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="lg:text-xl text-lg mb-1">Địa chỉ:</h4>
                    <div>75 - Hà Trì - Hà Cầu - Hà Nội</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              <div className="bg-white shadow-box7 p-8 rounded-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
