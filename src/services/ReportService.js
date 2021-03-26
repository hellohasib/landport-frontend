import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/report";

class ReportService {

    getReport(fromdate,todate){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+fromdate+'/'+todate);
    }


}

export default new ReportService()