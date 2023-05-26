import axios from "axios";

const GET_PERMISSION = "http://34.173.89.16/permission/manager/";

const UPDATE_PERMISION_STATUS = "http://34.173.89.16/permission/update";
class PermissionService {
  getPermissionForWorker(managerid) {
    return axios.get(GET_PERMISSION + managerid);
  }
  updatePermission(data) {
    return axios.put(UPDATE_PERMISION_STATUS, data);
  }
}

export default new PermissionService();
