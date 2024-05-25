import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeThree from "./Components/Home/HomeThree";
import HomeTestAPI from "./Components/Home/HomeTestAPI";
import ErrorPage from "./Components/Pages/404Page";
import BLogStandard from "./Components/Pages/BLogStandard";
import ContactUs from "./Components/Pages/ContactUs";
import Courses from "./Components/Pages/Courses";
import CourseSideBar from "./Components/Pages/CourseSideBar";
import Event from "./Components/Pages/Event";
import EventSingle from "./Components/Pages/EventSingle";
import InstructorDetails from "./Components/Pages/InstructorDetails";
import SingleBlog from "./Components/Pages/SingleBlog";
import SingleCourse from "./Components/Pages/SingleCourse";
import Thanks from "./Components/Pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route path="/home-test-api" element={<HomeTestAPI />} />
          <Route path="/" element={<Home />} />
          <Route path="anabim/home-three" element={<HomeThree />} />
          <Route
            path="/instructor-details"
            element={<InstructorDetails />}
          />
          <Route path="/event" element={<Event />} />
          <Route
            path="/event-single"
            element={<EventSingle />}
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/courses-sidebar"
            element={<CourseSideBar />}
          />
          <Route
            path="/single-course"
            element={<SingleCourse />}
          />
          <Route
            path="/blog-standard"
            element={<BLogStandard />}
          />
          <Route
            path="/single-blog"
            element={<SingleBlog />}
          />
          <Route
            path="/contacts"
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
