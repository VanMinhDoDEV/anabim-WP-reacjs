import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeTestAPI from "./Components/Home/HomeTestAPI";
import ErrorPage from "./Components/Pages/404Page";
import BLogStandard from "./Components/Pages/BLog";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import CourseSideBar from "./Components/Pages/CourseSideBar";
import CourseCategory from "./Components/Pages/CourseCat";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import  Instructor from "./Components/Pages/Instructor";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import SingleBlog from "./Components/Pages/SingleBlog";
// import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route path="/home-test-api" element={<HomeTestAPI />} />
          <Route path="/" element={<Home />} />
          <Route path="/giang-vien" element={<Instructor />} />
          <Route
            path="/giang-vien/:slug"
            element={<InstructorDetails />}
          />
          <Route path="/event" element={<Event />} />
          <Route
            path="/event-single"
            element={<EventSingle />}
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/khoa-hoc" element={<Courses />} />
          <Route
            path="/khoa-hoc-sidebar"
            element={<CourseSideBar />}
          />
          <Route
            path="/danh-muc-khoa-hoc/:slug"
            element={<CourseCategory />}
          />
          {/* <Route
            path="/single-course"
            element={<SingleCourse />}
          /> */}
          <Route
            path="/blog"
            element={<BLogStandard />}
          />
          <Route
            path="/blog/:slug"
            element={<SingleBlog />}
          />
          <Route
            path="/lien-he"
            element={<ContactUs />}
          />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
