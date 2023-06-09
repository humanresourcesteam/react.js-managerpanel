import axios from "axios";

const GET_ALL_ADVANCES = "http://localhost/advance/managers/";
const UPDATE_ADVANCE_STATUS = "http://localhost/advance/update";

class AdvanceService {
  getAllAdvances(managerid) {
    return axios.get(GET_ALL_ADVANCES + managerid);
  }
  updateAdvanceStatus(data) {
    return axios.put(UPDATE_ADVANCE_STATUS, data);
  }
}

export default new AdvanceService();
