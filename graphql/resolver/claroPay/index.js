const ClaroPay = require('../../Services/claropay');
module.exports = async (parent, args, context, info) => {
    const ClaroPayInstance = new ClaroPay();
    const {
        phoneNumber,
        cuil,
        email,
        documentNumber,
    } = args;
    const DataResult = await ClaroPayInstance.getData({
        phoneNumber,
        cuil,
        email,
        documentNumber
    });
    return ({
        ...DataResult
    })
}