import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/cargos";

class CargoService {

    getCargos(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createCargo(cargo){
        return axios.post(EMPLOYEE_API_BASE_URL, cargo);
    }

    getCargoById(cargoId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + cargoId);
    }

    updateCargo(cargo, cargoId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + cargoId, cargo);
    }

    deleteCargo(cargoId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + cargoId);
    }
}

export default new CargoService()