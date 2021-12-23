import React from "react";
import StyleSheet from "../Css/Header.module.css";
import { Link, Routes } from "react-router-dom";
// import Routes  from "./Routers";
import Routers from "./Routers";

function Dashboard() {
  return (
    <div>
      <div className="header">
        <img
          className={StyleSheet.image}
          src="https://cambridge.inno-forum.org/wp-content/uploads/sites/3/2018/02/johnson-johnson-logo.jpg"
          alt="jnj logo"
        />
        <h1 className={StyleSheet.text}>NPI LAUNCHPAD SCORECARD</h1>
      </div>
      <div className="sidenav col-lg-6 d-flex">
        <div className={StyleSheet.navbar}>
          <ul className="nav flex-column">
            <div className="d-flex">
              <i
                className="glyphicon glyphicon-envelope"
                style={{ fontSize: "25px" }}
              ></i>
              <li className="nav-item">
                <Link
                  className="link"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Gbu"
                >
                  Gbu
                </Link>
              </li>
            </div>
            <div className="d-flex">
              <i
                className="glyphicon glyphicon-envelope"
                style={{ fontSize: "25px" }}
              ></i>
              <li className="nav-item">
                <Link
                  className="link"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Sc Franchise"
                >
                  Sc Franchise
                </Link>
              </li>
            </div>
            <div className="d-flex">
              <i
                className="glyphicon glyphicon-envelope"
                style={{ fontSize: "25px" }}
              ></i>
              <li className="nav-item">
                <Link
                  className="link"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Active"
                >
                  Active
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <Routers/>
    </div>
  );
}

export default Dashboard;
