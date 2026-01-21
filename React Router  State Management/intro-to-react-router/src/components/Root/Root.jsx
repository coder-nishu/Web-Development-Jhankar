import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SlideBar from "../SlideBar/SlideBar";
import "./Root.css";
export default function Root() {
  return (
    <div>
      <Header></Header>
      <div className="main-root">
        <SlideBar></SlideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}
