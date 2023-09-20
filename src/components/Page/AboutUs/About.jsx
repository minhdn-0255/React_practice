import React from "react";
import Navbar from "../../Navbar";
import "./about.css";
import Button from '../../Button';

const AboutPage = () => {
  return (
    <div className="page">
      <Navbar activeNav={"about"} />
      <div className="left-panel">
        <h2 className="about-header">Join Us</h2>
        <p className="describe">“Kết nối và truyền cảm hứng - Chúng tôi là nền tảng tạo ra sự khác biệt” </p>
        <Button type='primary'> Join Us</Button>
      </div>
    </div>
  );
}
export default AboutPage;
