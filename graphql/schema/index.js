const { ApolloServer, gql } = require('apollo-server');

module.exports = gql`
    type Book {
        title: String
        author: String
    }

    type Cloudprofile {
        cycle: String
	    businessName: String
	    countLines: Int
	    countActiveLines: Int
	    dueAmount: Float
	    creditRisk: String
	    companyId: String
    }

    type AbtId {
        cellularNumber: String
        anioMes: String
    },

    type Abt {
        id: AbtId
	    qRecarga: String
	    rangoRecX3: String
	    rangoRecDesc: String
        montoRec1: String
        montoRec2: String
        montoRec3: String
        cantDiasCon: String
        totalMBPiramide: String
        recomendado1: String
        recomendado2: String
        recomendado3: String
        qLlamadasOutOnnet: String
        qLlamadasInOnnet: String
        qLlamadasOutOffnet: String
        qLlamadasInOffnet: String
        qSmsOut: String
        piramideSegmento: String
        flagMalConfCel4G: String
        flagNoTieneUsim: String
        cbtId: String
        accIdentificationNumber: String
        accIdentificationType: String
        clientIdentificationNumber: String
        clientIdentificationType: String
        email: String
        dLlamadasOutOnnet: String
        dLlamadasOutOffnet: String
        qMbTotal: String
        montoRecarga: String
        rplId: String
        clientId: String
        accountId: String
        suscriptoClaroVideo: String
        minutosClaroVideo: String
        cantidadClaroVideo: String
        suscriptoClaroMusica: String
        minutosClaroMusica: String
        cantidadClaroMusica: String
        flagEmailValidado: String
        canalPreferido: String
        fechaUltimaConexionCanPref: String
        factElectronica: String
        domicilioFact: String
        antiguedadEqp: String
        imeiTracking: String
        imeiNegado: String
        negCiaId: String
        negRazon: String
        fechaSuspCobranza: String
        fechaCancCobranza: String
        ultimoCanalConectado: String
        fechaUltimaConexionCan: String
        dLlamadasInVolte: String
        dLlamadasOutVolte: String
        dLlamadasInVowifi: String
        dLlamadasOutVowifi: String
        accPaymentHistory: String
        qRecompra: String
        fechaMinRecompra: String
        fechaMaxRecompra: String
        mbRecompra: String
    }

    type Profile {
            cellularNumber: String
            status: String
            reasonId: String
            businessType: String
            segment: String
            titular: String
            user: String
            plan: String,
            ciclo: String
            accountId: String
            companyId: String
            risk: String
            sim: String
            imei: String
            callRestriction: String
            callRestrictionDescription: String
    }

    type Terms { 
        userAcceptedVersion: Int
        lastVersion: Int
        accepted: String
    }
    type UserStand { 
        verifiedByMobiquity: String  
        verifiedByRenaper: String
    }
    type Claropay {
        uuid: String
        firstName: String
        lastName: String
        documentNumber: String
        phoneNumber: String
        email: String
        address: String,
        city: String
        gender: String
        occupation: String
        cuit: String
        province: String
        postalCode: String
        alias: String
        cvu: String,
        hasAccount: String
        cellularIsVerified: String
        emailIsVerified: String
        hasPersonalData: String
        hasDocumentPicture: String
        hasSelfie: String
        hasCVU: String
        hasAlias: String
        hasBasicProfile: String
        hasIntermediateProfile: String
        hasAdvancedProfile: String
        hasOnBoardingProfile: String
        hasManualOnBoardingProfile: String
        normsAccepted: String
        pinUpdated: String
        lockAccount: String
        lockReason: String
        terms: Terms,
        userStandBy: UserStand
    }

    type Query {
        books: [Book]
        cloudprofile(number: Float!): Cloudprofile
        abt(number: Float!): Abt
        profile(number: Float!): Profile
        claropay(
            phoneNumber: String
            cuil: String
            email: String
            documentNumber: String
        ): Claropay
    }
`;