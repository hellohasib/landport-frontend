import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/vehicles";

class VehicleService {

    getVehicles(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createVehicle(vehicle){
        return axios.post(EMPLOYEE_API_BASE_URL, vehicle);
    }

    getVehicleById(vehicleId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + vehicleId);
    }

    updateVehicle(vehicle, vehicleId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + vehicleId, vehicle);
    }

    deleteVehicle(vehicleId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + vehicleId);
    }
}

export default new VehicleService()