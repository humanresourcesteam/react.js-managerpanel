import "./newemployee.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const NewEmployee = () => {
  const [widgetmanager, setWidgetmanager] = useState([
    {
      id: "",
      firtName: "",
      surname: "",
      email: "",
    },
  ]);

  useEffect(() => {
    console.log("useEffect runs");

    axios
      .get("http://localhost:9093/api/v1/workers/get-new-employee")
      .then((response) => {
        setWidgetmanager([...response.data]);
      });
    return () => {
      console.log("useEffect clean-up");
    };
  }, []);

  return (
    <div className="widgetNew">
      <span className="widgetSmTitle">New Join Employee</span>
      <ul className="widgetSmList">
        {widgetmanager.map((employee, index) => (
          <li key={index} className="widgetSmListItem">
            <img src={employee.image} alt="" className="widgetSmImg" />
            <div className="widgetSmEmployee">
              <span className="widgetUsername">
                {employee.name} {employee.surname}
              </span>
              <span className="widgetUserTitle">{employee.occupation}</span>
            </div>
            <Link
              className="links"
              to={"/manager/" + employee.id}
              style={{ textDecoration: "none" }}
            >
              <button className="widgetSmButton">
                <VisibilityIcon className="widgetSmIcon" />
                Display
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewEmployee;
