import axiosService from "../components/Utils/axios";

const username = "hbjddoyv";
const password = "1erfp6dygggx9ec5iidn"

class DespesaService {

    GetDespesas = () => {
        return new Promise((resolve, reject) => {
            axiosService.axios.get('', {
                'auth': {
                    "username": username,
                    "password": password
                }
            })
                .then((response) => {
                    if (response.data) {
                        resolve(response.data);
                    } else {
                        reject(response.data.error);
                    }
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }

    GetDespesasPorTipo = (tipo) => {
        return new Promise((resolve, reject) => {
            axiosService.axios.get(`/search?tipo=${tipo}`, {
                'auth': {
                    "username": username,
                    "password": password
                }
            })
                .then((response) => {
                    if (response.data) {
                        resolve(response.data);
                    } else {
                        reject(response.data.error);
                    }
                })
                .catch((error) => {
                    reject(error)
                });
        });
    }

}

const despesaService = new DespesaService();

export default despesaService;