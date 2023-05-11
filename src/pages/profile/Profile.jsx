import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ManagerService from "../../service/ManagerService";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import withAuth from "../../withAuth";
import CompanyService from "../../service/CompanyService";
const Profile = () => {
  const [manager, setManager] = useState({});
  const [managerFormData, setManagerFormData] = useState({});
  const token = Cookies.get("token");

  useEffect(() => {
    ManagerService.getInfoForAdmin(token).then((response) => {
      console.log(response);
      setManager({ ...response.data });
      setManagerFormData({ ...response.data });
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="manager__info">
          <div className="top">
            <h2>
              {managerFormData.firstName + " " + managerFormData.surname}{" "}
            </h2>
          </div>
          <div className="bottom">
            <div className="bottom-top">
              <img
                src={
                  manager.image
                    ? manager.image
                    : "https://images.unsplash.com/photo-1683097504876-42a726767b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                }
                className="image"
              />
            </div>
            <div className="bottom-bot">
              <div className="personal">
                <div className="formInput">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={managerFormData.email || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Firstname</label>
                  <input
                    type="text"
                    name="firstName"
                    value={managerFormData.firstName || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="formInput">
                  <label>Surname</label>
                  <input
                    type="text"
                    name="lastName"
                    value={managerFormData.surname || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="formInput">
                  <label>Birthday</label>
                  <input
                    type="text"
                    name="birthDate"
                    value={managerFormData.birthDate || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Birthday Place</label>
                  <input
                    type="text"
                    name="birthdayPlace"
                    value={managerFormData.birthdayPlace || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="work">
                <div className="formInput">
                  <label>Identification Number</label>
                  <input
                    type="text"
                    name="identificationNumber"
                    value={managerFormData.identificationNumber || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={managerFormData.phone || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Date Of Employment</label>
                  <input
                    type="text"
                    name="dateOfEmployment"
                    value={managerFormData.dateOfEmployment || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="formInput">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={managerFormData.address || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Profile);
