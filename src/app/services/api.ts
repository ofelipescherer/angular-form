


import axios from "axios";

export default class ApiService {

    async post(data : any) {
        const response = await axios.post("", data)
    }

}


