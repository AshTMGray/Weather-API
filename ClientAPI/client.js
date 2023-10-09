import axios from 'axios'

export class ApiClient {
    responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
            return Promise.resolve(responseObject);
        }
        else {
            return Promise.reject(new Error(responseObject.statusText));
        }
    }
}
