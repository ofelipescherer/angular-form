import axios from "axios";

export default class ApiService {

    async post( data : any) {
        const response =      
        await axios
        .post("https://4e034d772db8ec4cfc4d2f159fef9c76.m.pipedream.net", data)
    }

}


