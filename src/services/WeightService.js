import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://45.79.126.105:8080/tamabil/api/v1/weights";

class WeightService {

    getWeights(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createWeight(weight){
        return axios.post(EMPLOYEE_API_BASE_URL, weight);
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

export default new WeightService()