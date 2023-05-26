import axios from "axios";

const FORGOT_PASSWORD = "http://localhost/mail/forgot";
class MailService {
  forgotPassword(advance) {
    return axios.post(FORGOT_PASSWORD, advance);
  }
}

export default new MailService();
