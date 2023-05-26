import axios from "axios";

const GET_ALL_ADVANCES = "http://34.173.89.16/advance/managers/";
const UPDATE_ADVANCE_STATUS = "http://34.173.89.16/advance/update";

class AdvanceService {
  getAllAdvances(managerid) {
    return axios.get(GET_ALL_ADVANCES + managerid);
  }
  updateAdvanceStatus(data) {
    return axios.put(UPDATE_ADVANCE_STATUS, data);
  }
}

export default new AdvanceService();
