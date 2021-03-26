import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/pilots";

class PilotService {

    getPilots(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createPilot(pilot){
        return axios.post(EMPLOYEE_API_BASE_URL, pilot);
    }

    getPilotById(pilotId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + pilotId);
    }

    updatePilot(pilot, pilotId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + pilotId, pilot);
    }

    deletePilot(pilotId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + pilotId);
    }
}

export default new PilotService()