import "./sidebar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManagerService from "../../service/ManagerService";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import Logout from "../logout/Logout";
import withAuth from "../../withAuth";
import axios from "axios";
const Sidebar = () => {
  const token = Cookies.get("token");
  const [image, setImage] = useState("");

  useEffect(() => {
    const source = axios.CancelToken.source();

    ManagerService.getImage(token, { cancelToken: source.token })
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          // istek iptal edildiyse, hata oluştuğunu kontrol eder
          console.log("Axios request cancelled");
        } else {
          console.log("Another error happened: ", error.message);
        }
      });

    return () => {
      source.cancel();
    };
  }, [token]);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="sidebar__top--logo">HumanCo</span>
        </Link>
      </div>
      <hr />
      <div className="sidebar__center">
        <div className="sidebar__center--avatar">
          <img
            src={
              image
                ? image
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="avatar"
          />
        </div>
        <div className="sidebar__center--menu">
          <div className="menu__dashboard">
            <span className="main_span">MAIN</span>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="dasboard__item">
                <DashboardOutlinedIcon className="icon" />
                <span>Dashboard</span>
              </div>
            </Link>
          </div>
          <div className="menu__list">
            <span className="main_span">EMPLOYEE</span>
            <Link to="/employee" style={{ textDecoration: "none" }}>
              <div className="list__item">
                <EngineeringOutlinedIcon className="icon" />
                <span>Employee List</span>
              </div>
            </Link>
            <Link to="/employee/add" style={{ textDecoration: "none" }}>
              <div className="list__item">
                <PersonAddOutlinedIcon className="icon" />
                <span>Employee Add</span>
              </div>
            </Link>
          </div>
          <div className="menu__list">
            <span className="main_span">LIST</span>
            <Link to="/advance" style={{ textDecoration: "none" }}>
              <div className="list__item">
                <FormatListNumberedIcon className="icon" />
                <span>Advance List</span>
              </div>
            </Link>
            <Link to="/expence" style={{ textDecoration: "none" }}>
              <div className="list__item">
                <FormatListNumberedIcon className="icon" />
                <span>Expense List</span>
              </div>
            </Link>
            <Link to="/permi" style={{ textDecoration: "none" }}>
              <div className="list__item">
                <FormatListNumberedIcon className="icon" />
                <span>Permission List</span>
              </div>
            </Link>
          </div>
          <div className="menu__useful">
            <span className="main_span">USEFUL</span>
            <div className="main__useful_list">
              <div className="useful__item">
                <InsertChartOutlinedSharpIcon className="icon" />
                <span>Stats</span>
              </div>
              <div className="useful__item">
                <NotificationsNoneIcon className="icon" />
                <span>Notification</span>
              </div>
            </div>
          </div>
          <div className="menu__useful">
            <span className="main_span">SERVICE</span>
            <div className="main__useful_list">
              <div className="useful__item">
                <SettingsSystemDaydreamOutlinedIcon className="icon" />
                <span>System Health</span>
              </div>
              <div className="useful__item">
                <PsychologyOutlinedIcon className="icon" />
                <span>Logs</span>
              </div>
              <div className="useful__item">
                <SettingsOutlinedIcon className="icon" />
                <span>Settings</span>
              </div>
            </div>
          </div>
          <div className="menu__useful">
            <span className="main_span">USER</span>
            <div className="main__useful_list">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <div className="useful__item">
                  <AccountCircleOutlinedIcon className="icon" />
                  <span>Profile</span>
                </div>
              </Link>
              <div className="useful__item">
                <ExitToAppIcon className="icon" />
                <Logout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Sidebar);
