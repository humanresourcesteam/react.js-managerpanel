import axios from "axios";

const GET_ALL_MANAGER_SUMMARY_INFO = "http://localhost/manager/get-all-summary";

const GET_INFO_MANAGER_WITH_ID = "http://localhost/manager/manager/";

const ADD_MANAGER = "http://localhost/manager/add";

const GET_IMAGE_FOR_ADMIN = "http://localhost/manager/get-image?token=";

const GET_5_MANAGER = "http://localhost/manager/find-five-manager";

const GET_ID = "http://localhost/manager/get-id?token=";

const GET_INFO_FOR_ADMIN = "http://localhost/manager/manager-info?token=";
class ManagerService {
  getAllAdminSummaryInfo() {
    return axios.get(GET_ALL_MANAGER_SUMMARY_INFO);
  }

  getInfoForManagerWithId(id) {
    return axios.get(GET_INFO_MANAGER_WITH_ID + id);
  }

  addManager(data) {
    return axios.post(ADD_MANAGER, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getFiveManager() {
    return axios.get(GET_5_MANAGER);
  }

  getImage(token) {
    return axios.get(GET_IMAGE_FOR_ADMIN + token);
  }

  getInfoForAdmin(token) {
    return axios.get(GET_INFO_FOR_ADMIN + token);
  }

  getId(token) {
    return axios.get(GET_ID + token);
  }
}

export default new ManagerService();
