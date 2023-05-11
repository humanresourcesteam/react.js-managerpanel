import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./single.scss";
import { useParams } from "react-router-dom";
import WorkerService from "../../service/WorkerService";
import { useState, useEffect } from "react";
const Single = () => {
  let params = useParams();
  const [worker, setWorker] = useState({});

  useEffect(() => {
    WorkerService.getEmployeeInfo(params.employeeId).then((response) => {
      setWorker({ ...response.data });
    });
  }, []);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h2>Ali Öğütçen</h2>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <img
              src={
                worker.image
                  ? worker.image
                  : "https://images.unsplash.com/photo-1683097504876-42a726767b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
              }
              className="image"
            />
          </div>
          <div className="bottom-bot">
            <div className="personal">
              <div className="formInput">
                <label>Email</label>
                <input type="email" value={worker.email} />
              </div>
              <div className="formInput">
                <label>Firstname</label>
                <input type="text" value={worker.name} />
              </div>

              <div className="formInput">
                <label>Surname</label>
                <input type="text" value={worker.surname} />
              </div>

              <div className="formInput">
                <label>Birthday</label>
                <input type="text" value={worker.birthDate} />
              </div>
              <div className="formInput">
                <label>Birthday Place</label>
                <input type="text" value={worker.birthPlace} />
              </div>
            </div>
            <div className="work">
              <div className="formInput">
                <label>Identification Number</label>
                <input type="text" value={worker.identificationNumber} />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" value={worker.companyPhone} />
              </div>
              <div className="formInput">
                <label>Date Of Employment</label>
                <input type="text" value={worker.dateOfEmployment} />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" value={worker.address} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
