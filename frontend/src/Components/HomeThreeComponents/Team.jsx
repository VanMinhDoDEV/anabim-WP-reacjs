/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SingleTeam from "./SingleTeam";
import { instructorData } from "../../constant/dummyData";

const Team = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Đội ngũ</div>
          <div className="column-title ">
            Những <span className="shape-bg">Giảng Viên</span> Chuyên môn
          </div>
        </div>
        <SingleTeam />
      </div>
    </div>
  );
};

export default Team;
