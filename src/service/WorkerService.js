import axios from "axios";

const GET_INFO_FOR_ADMIN =
  "http://localhost:9092/api/v1/manager/manager-info?token=";

const ADD_EMPLOYEE = "http://localhost:9093/api/v1/workers/addworker";

const GET_ALL_EMPLOYEE_FOR_COMPANY =
  "http://localhost:9093/api/v1/workers/get-all-employee-for-company/";
class WorkerService {
  addEmployee(data) {
    return axios.post(ADD_EMPLOYEE, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getAllWorker(companyId) {
    return axios.get(GET_ALL_EMPLOYEE_FOR_COMPANY + companyId);
  }
}

export default new WorkerService();
