import axios from "axios";

const FORGOT_PASSWORD = "http://localhost:8082/api/v1/mail/forgot";
class MailService {
  forgotPassword(advance) {
    return axios.post(FORGOT_PASSWORD, advance);
  }
}

export default new MailService();
