import axios from "axios";

export class ApiContext {
    constructor() {
        this.baseURL = 'https://ekyckhoaluan.herokuapp.com/';
        this.instance = axios.create(
            {
                baseURL: this.baseURL,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );

        this.instance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return error;
        });

        this.instance.interceptors.response.use(function (response) {
            return response.data;
        }, function (error) {
            return { error };
        });
    }

    get(pathUrl = '', config = {}) {
        const url = this.baseURL + pathUrl;
        return this.instance.get(url, config);
    }

    post(pathUrl = '', data = {}, config = {}) {
        const url = this.baseURL + pathUrl;
        return this.instance.post(url, data, config);
    }

    put(pathUrl = '', data = {}, config = {}) {
        const url = this.baseURL + pathUrl;
        return this.instance.put(url, data, config);
    }

    delete(pathUrl = '', config = {}) {
        const url = this.baseURL + pathUrl;
        return this.instance.delete(url, config);
    }

}