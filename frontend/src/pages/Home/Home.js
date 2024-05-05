import React from "react";
import { MdOutlineInventory } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Home.scss";
import invi from "../../assets/invi.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <MdOutlineInventory size={40} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="btnLog">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="btnLog">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h1>InviHelp</h1>
          <p>
            Helps to manage stocks of products in many varieties for businesses
            on both large and small scale, effectively and efficiently.
          </p>
          <div className="hero-buttons">
            <button className="btnStart">
              <Link to="/dashboard">Start!</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="--" text="Active Users  " />
            <NumberText num="  --" text="  Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={invi} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
