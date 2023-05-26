import axios from "axios";

const GET_ALL_EXPENSE = "http://34.173.89.16/expense/managers/";
const UPDATE_EXPENSE_STATUS = "http://34.173.89.16/expense/update";
class ExpenseService {
  getallexpense(managerid) {
    return axios.get(GET_ALL_EXPENSE + managerid);
  }
  update(data) {
    return axios.put(UPDATE_EXPENSE_STATUS, data);
  }
}

export default new ExpenseService();
