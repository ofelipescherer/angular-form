import axios from "axios";
import { Observable } from "rxjs/internal/Observable";
import { DataForm } from "../views/custom-form/custom-form.component";

export default class ApiService {

    async post( data : any) {
        const response =      
        await axios
        .post("https://d39faf2d68690284cb56b30d04efeb03.m.pipedream.net", data)
    }

}


