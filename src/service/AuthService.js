import axios from "axios";

const LOGIN = "http://localhost:9090/api/v1/auth/login";
class AuthService {
  login(admin) {
    return axios.post(LOGIN, admin);
  }
}

export default new AuthService();
