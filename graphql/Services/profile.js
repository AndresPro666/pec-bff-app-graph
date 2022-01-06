const { RESTDataSource } = require('apollo-datasource-rest');
const axios = require('axios');

class ProfileService extends RESTDataSource {

    getData(billNumber) {
        return axios.get(`http://arwmiclaro.claro.amx/csc-cloud-profile/cloud-profile/profile/3512119876`)
    }

}

module.exports = ProfileService;