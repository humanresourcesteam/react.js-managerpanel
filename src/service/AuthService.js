import axios from "axios";

const LOGIN = "http://34.173.89.16/auth/login";
class AuthService {
  login(admin) {
    return axios.post(LOGIN, admin);
  }
}

export default new AuthService();
