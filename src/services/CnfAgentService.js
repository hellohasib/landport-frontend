import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://45.79.126.105/tamabil/api/v1/cnfAgents";

class CnfAgentService {

    getCnfAgents(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createCnfAgent(cnfAgent){
        return axios.post(EMPLOYEE_API_BASE_URL, cnfAgent);
    }

    getCnfAgentById(cnfAgentId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + cnfAgentId);
    }

    updateCnfAgent(cnfAgent, cnfAgentId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + cnfAgentId, cnfAgent);
    }

    deleteCnfAgent(cnfAgentId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + cnfAgentId);
    }
}

export default new CnfAgentService()