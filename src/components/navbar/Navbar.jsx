import "./navbar.scss";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import { Link } from "react-router-dom";
import ManagerService from "../../service/ManagerService";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import withAuth from "../../withAuth";
import axios from "axios";
const Navbar = () => {
  const token = Cookies.get("token");
  const [image, setImage] = useState("");
  useEffect(() => {
    // Axios için iptal tokeni oluştur
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

    // useEffect temizleme fonksiyonu
    return () => {
      source.cancel();
    };
  }, [token]);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div className="item">
              <img
                src={
                  image
                    ? image
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                className="avatar"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Navbar);
