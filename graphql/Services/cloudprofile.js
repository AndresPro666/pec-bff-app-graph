const { RESTDataSource } = require('apollo-datasource-rest');
const axios = require('axios');

class CloudProfileService extends RESTDataSource {

    getData(billNumber) {
        return axios.get(`http://arwmiclaro.claro.amx/csc-cloud-profile/cloud-profile/account-profile/${billNumber}`)
    }

}

module.exports = CloudProfileService;