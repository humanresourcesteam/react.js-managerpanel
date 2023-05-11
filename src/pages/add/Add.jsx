import Sidebar from "../../components/sidebar/Sidebar";
import "./add.scss";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import Cookies from "js-cookie";
import ManagerService from "../../service/ManagerService";
import WorkerService from "../../service/WorkerService";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [managerid, setManagerid] = useState("");
  const [companyid, setCompanyid] = useState("");
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    ManagerService.getInfoForAdmin(token).then((response) => {
      console.log(response);
      setCompanyid(response.data.companyid);
      setManagerid(response.data.id);
    });
  }, []);

  //IMAGE SETTINGS AREA
  const [newImage, setNewImage] = useState("");
  const inputFileRef = useRef(null);
  const handleImageClick = () => {
    inputFileRef.current.click();
  };
  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };
  //IMAGE SETTINGS AREA END

  const [employee, setEmployee] = useState({
    managerid: "",
    companyid: "",
    image: "",
    name: "",
    secondname: "",
    surname: "",
    secondSurname: "",
    birthDate: "",
    birthPlace: "",
    identificationNumber: "",
    dateOfEmployment: "",
    occupation: "",
    email: "",
    address: "",
    companyPhone: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(employee);
    WorkerService.addEmployee(employee).then(
      () => {
        alert("başarılı");
        navigate("/employee");
      },
      (response) => {
        alert(response.response.data.message);
      }
    );
  };

  return (
    <div className="add">
      <Sidebar />
      <div className="addContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add new Employee</h1>
        </div>
        <div className="bottom">
          <div className="bottom_top">
            <img
              src={
                newImage
                  ? URL.createObjectURL(newImage)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              className="image"
              onClick={handleImageClick}
            />
            <div className="formInput">
              <label htmlFor="file"></label>
              <input
                type="file"
                id="file"
                onChange={onChangeImage}
                ref={inputFileRef}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <form className="bottom_bottom" onSubmit={handleSubmit}>
            <div className="formarea">
              <div className="form_left">
                <div className="formInput">
                  <label> Email</label>
                  <input
                    type="email"
                    onChange={(e) =>
                      setEmployee({ ...employee, email: e.target.value })
                    }
                  />
                </div>
                <div className="formInput">
                  <label> Identication Number</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        identificationNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="formInput">
                  <label> Name</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, name: e.target.value })
                    }
                  />
                </div>
                <div className="formInput">
                  <label> Second name</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, secondname: e.target.value })
                    }
                  />
                </div>
                <div className="formInput">
                  <label> Surname</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, surname: e.target.value })
                    }
                  />
                </div>
                <div className="formInput">
                  <label>Second surname</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, secondname: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form_right">
                <div className="formInput">
                  <label>Birth Place</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, birthPlace: e.target.value })
                    }
                  />
                </div>
                <div className="formInput">
                  <label>Birthdate</label>
                  <input
                    type="date"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        birthDate: new Date(e.target.value)
                          .toISOString()
                          .substring(0, 10),
                      })
                    }
                  />
                </div>
                <div className="formInput">
                  <label>Date Of Employment</label>
                  <input
                    type="date"
                    onChange={(e) =>
                      setEmployee({
                        ...employee,
                        dateOfEmployment: new Date(e.target.value)
                          .toISOString()
                          .substring(0, 10),
                      })
                    }
                  />
                </div>
                <div className="formInput">
                  <label>Oppucation</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, occupation: e.target.value })
                    }
                  />
                </div>
                <div className="formInput">
                  <label>Phone</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, companyPhone: e.target.value })
                    }
                  />
                </div>
                <div className="formInput">
                  <label>Address</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setEmployee({ ...employee, address: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <button
              className="addButton"
              onClick={(e) => {
                if (newImage != "") {
                  setEmployee({
                    ...employee,
                    image: newImage,
                    companyid: companyid,
                    managerid: managerid,
                  });
                } else {
                  setEmployee({
                    ...employee,
                    companyid: companyid,
                    managerid: managerid,
                  });
                }
              }}
            >
              SAVE EMPLOYEE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
