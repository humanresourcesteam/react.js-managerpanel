import axios from "axios";

const GET_ALL_EXPENSE = "http://localhost:9097/api/v1/expense/managers/";
const UPDATE_EXPENSE_STATUS = "http://localhost:9097/api/v1/expense/update";
class ExpenseService {
  getallexpense(managerid) {
    return axios.get(GET_ALL_EXPENSE + managerid);
  }
  update(data) {
    return axios.put(UPDATE_EXPENSE_STATUS, data);
  }
}

export default new ExpenseService();
