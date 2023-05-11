import "./widget.scss";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState } from "react";
const Widget = ({ type }) => {
  const [adminCount, setAdminCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);
  let data;
  switch (type) {
    case "total":
      data = {
        title: "TOTAL EMPLOYEE",
        link: "See all manager",
        count: managerCount,
        icon: (
          <ManageAccountsOutlinedIcon
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;

    case "retired":
      data = {
        title: "RETIRED EMPLOYEE",
        link: "See all employee",
        count: 0,
        icon: (
          <BadgeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "laik":
      data = {
        title: "LAIK EMPLOYEE",
        link: "See all employee",
        count: 0,
        icon: (
          <BadgeOutlinedIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "active":
      data = {
        title: "ACTIVE EMPLOYEE",
        link: "See all total company",
        count: companyCount,
        icon: (
          <AccessibilityNewOutlinedIcon
            className="icon"
            style={{
              backgroundColor: " rgba(0, 128, 0, 0.20)",
              color: "green",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="widget__left">
        <span className="widget__title">{data.title}</span>
        <span className="widget__counter">{data.count}</span>
        <span className="widget__link">{data.link}</span>
      </div>
      <div className="widget__right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
