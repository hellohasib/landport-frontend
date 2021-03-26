import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/importers";

class ImporterService {

    getImporters(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createImporter(importer){
        return axios.post(EMPLOYEE_API_BASE_URL, importer);
    }

    getImporterById(importerId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + importerId);
    }

    updateImporter(importer, importerId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + importerId, importer);
    }

    deleteImporter(importerId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + importerId);
    }
}

export default new ImporterService()