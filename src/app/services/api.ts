import axios from "axios";

export default class ApiService {

    async post(url: string, data : any) {
        const response = await axios.post(url, data)
    }

}


