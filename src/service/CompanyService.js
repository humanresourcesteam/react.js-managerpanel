import axios from "axios";

const GET_COMPANY_NAME_FOR_MANAGER =
  "http://34.173.89.16/company/company-info-for-admin/";

class CompanyService {
  getCompanyName(companyId) {
    return axios.get(GET_COMPANY_NAME_FOR_MANAGER + companyId);
  }
}

export default new CompanyService();
