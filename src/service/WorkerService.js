import axios from "axios";

const GET_INFO_FOR_ADMIN = "http://34.173.89.16/manager/manager-info?token=";

const ADD_EMPLOYEE = "http://34.173.89.16/workers/addworker";

const GET_ALL_EMPLOYEE_FOR_COMPANY =
  "http://34.173.89.16/workers/get-all-employee-for-company/";

const GET_WORKER_INFO = "http://34.173.89.16/workers/workers/";
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

  getEmployeeInfo(employeeid) {
    return axios.get(GET_WORKER_INFO + employeeid);
  }
}

export default new WorkerService();
