import axios from "axios";

const instance = {   
    axios : {}
}
let vsBaseUrl = 'https://sheetdb.io/api/v1/ry96id5kwg3wo';

instance.axios = axios.create({    
     baseURL: vsBaseUrl,
    responseType:'json',
});

axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default instance;