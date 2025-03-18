import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./css/BookCheck.css";
import "./css/SelectRoom.css";
import "./css/ViewDetail.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
  ViewDetail,
  BookCheck,
  SelectRooms,
} from "./pages/index";
import Footer from "./components/common/Footer";
import ViewDetailPage from "./pages/ViewDetailPage";
import ViewDetailPage2 from "./pages/ViewDetailPage2";
import ViewDetailPage3 from "./pages/ViewDetailPage3";
import BookCheckPage from "./pages/BookCheckPage";
import SelectRoomsPage from "./pages/SelectRoomsPage";
import Complete from "./pages/Complete";
import Mailform from "./pages/Mailform";
import DBcheck from "./pages/DBcheck";
import Sample from "./pages/Sample";
import Login from "./pages/Login";
import Login_app from "./pages/Login_app";
import Mypage from "./pages/Mypage";
import Register from "./pages/Register";


export default function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ViewDetail" element={<ViewDetailPage />} />
            <Route path="/ViewDetail2" element={<ViewDetailPage2 />} />
            <Route path="/ViewDetail3" element={<ViewDetailPage3 />} />
            <Route path="/BookCheckPage" element={<BookCheckPage />} />
            <Route path="/SelectRooms" element={<SelectRoomsPage />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="/Mailform" element={<Mailform />} />
            <Route path="/Sample" element={<Sample />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login_app" element={<Login_app />} />
            <Route path="/DBcheck" element={<DBcheck />} />


          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
