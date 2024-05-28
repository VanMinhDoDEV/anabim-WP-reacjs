import { Disclosure } from "@headlessui/react";
import React from "react";
import { faq } from "../../constant/images";

const Accordion = () => {
  return (
    <div className="section-padding  bg-white bg-[url('../images/all-img/section-bg-15.png')] bg-bottom  bg-cover bg-no-repeat">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
          <div>
            <div className="mini-title">Câu hỏi thường gặp</div>
            <div className="column-title ">
               <span className="shape-bg">Câu hỏi</span>
            </div>
            <ul className="list accrodains space-y-[30px] lg:max-w-[470px]">
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Làm thế nào để trở thành giảng viên ?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    - Tốt nghiệp đại học tối thiểu chuyên ngành liên quan.<br/>
                    - Theo học thạc sĩ hoặc tiến sĩ trong lĩnh vực chuyên môn.<br/>
                    - Tham gia các khóa học bồi dưỡng nghiệp vụ sư phạm cho giảng viên.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>
                        Làm thế nào để bài giảng của tôi tiếp cận nhiều học sinh ?
                      </span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    - Sử dụng ngôn ngữ dễ hiểu, sinh động và gần gũi với học sinh.<br/>
                    - Kết hợp đa dạng các phương pháp giảng dạy như hình ảnh, video, bài tập thực hành,...<br/>
                    - Cung cấp nội dung bài giảng có liên quan đến thực tế và ứng dụng thực tiễn cao.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure  >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Nếu tôi không hoàn thành khóa học, có được hồi tiền không
                      ?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    Bạn chỉ được hồi tiền khi: <br/>
                    - Hủy khóa học trước khi bắt đầu: Hầu hết các website đều cho phép bạn 
                    hủy khóa học và nhận hoàn tiền đầy đủ nếu bạn hủy trước khi khóa học bắt đầu.<br/>
                    - Lỗi kỹ thuật từ phía website: Nếu bạn gặp lỗi kỹ thuật khiến bạn không thể 
                    tham gia khóa học, bạn có thể yêu cầu hoàn tiền.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>
              <Disclosure >
                {({ open }) => (
                  <li className={open ? "open" : null} >
                    <Disclosure.Button type="button" className="accrodain-button">
                      <span>Phương pháp học tập hiệu quả nhất ?</span>
                      <span className="icon-pm"></span>
                    </Disclosure.Button>

                    <Disclosure.Panel className="content">
                    - Học thụ động: Nghe giảng, đọc sách, ghi chép.<br/>
                    - Học tích cực: Làm bài tập, thảo luận nhóm, thực hành.<br/>
                    - Học bằng hình ảnh: Sử dụng sơ đồ tư duy, mindmap, flashcard.<br/>
                    - Học bằng âm thanh: Nghe podcast, ghi âm bài giảng.<br/>
                    - Học kết hợp: Kết hợp nhiều phương pháp học tập khác nhau.
                    </Disclosure.Panel>
                  </li>
                )}

              </Disclosure>


            </ul>
          </div>
          <div>
            <img src={faq} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
