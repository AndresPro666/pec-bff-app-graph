const { RESTDataSource } = require('apollo-datasource-rest');
const axios = require('axios');

class ClaroPayService extends RESTDataSource {

    getData({
        phoneNumber,
        cuil,
        email,
        documentNumber
    }) {
        return {
            "uuid": "string",
            "firstName": "string",
            "lastName": "string",
            "documentNumber": "string",
            "phoneNumber": "string",
            "email": "string",
            "address": "string",
            "city": "string",
            "gender": "M",
            "occupation": "string",
            "cuit": "string",
            "province": "string",
            "postalCode": "string",
            "alias": "string",
            "cvu": "string",
            "hasAccount": true,
            "cellularIsVerified": true,
            "emailIsVerified": true,
            "hasPersonalData": true,
            "hasDocumentPicture": true,
            "hasSelfie": true,
            "hasCVU": true,
            "hasAlias": true,
            "hasBasicProfile": true,
            "hasIntermediateProfile": true,
            "hasAdvancedProfile": true,
            "hasOnBoardingProfile": true,
            "hasManualOnBoardingProfile": true,
                        "normsAccepted": true,
            "pinUpdated": true,
            "lockAccount": true,
            "lockReason": "string",
            "terms": { "userAcceptedVersion": 0, "lastVersion": 0, "accepted": true },
            "userStandBy": { "verifiedByMobiquity": true, "verifiedByRenaper": true }
        }
    }

}

module.exports = ClaroPayService;