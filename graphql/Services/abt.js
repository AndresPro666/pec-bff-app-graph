const { RESTDataSource } = require('apollo-datasource-rest');
const axios = require('axios');

class AbtService extends RESTDataSource {
    async getData(billNumber) {
        return axios.get(`http://arpec.claro.amx/PEC_RAC8/api/abt/ultimoMes/${billNumber}`)
    }
}

module.exports = AbtService;