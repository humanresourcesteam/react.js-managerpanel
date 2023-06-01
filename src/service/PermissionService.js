import axios from "axios";

const GET_PERMISSION = "http://localhost/permission/manager/";

const UPDATE_PERMISION_STATUS = "http://localhost/permission/update";
class PermissionService {
  getPermissionForWorker(managerid) {
    return axios.get(GET_PERMISSION + managerid);
  }
  updatePermission(data) {
    return axios.put(UPDATE_PERMISION_STATUS, data);
  }
}

export default new PermissionService();
