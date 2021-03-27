import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://45.79.126.105/tamabil/api/v1/report";

class ReportService {

    getReport(fromdate,todate){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+fromdate+'/'+todate);
    }


}

export default new ReportService()