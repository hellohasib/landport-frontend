import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/fastweights";

class FastWeightService {

    getWeights(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createWeight(fastweight){
        return axios.post(EMPLOYEE_API_BASE_URL, fastweight);
    }

    getWeightById(weightId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + weightId);
    }

    updateWeight(weight, weightId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + weightId, weight);
    }

    deleteWeight(weightId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + weightId);
    }
}

export default new FastWeightService()