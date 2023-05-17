import axios from "axios";

const GET_PERMISSION = "http://localhost:9096/api/v1/permission/manager/";

const UPDATE_PERMISION_STATUS =
  "http://localhost:9096/api/v1/permission/update";
class PermissionService {
  getPermissionForWorker(managerid) {
    return axios.get(GET_PERMISSION + managerid);
  }
  updatePermission(data) {
    return axios.put(UPDATE_PERMISION_STATUS, data);
  }
}

export default new PermissionService();
