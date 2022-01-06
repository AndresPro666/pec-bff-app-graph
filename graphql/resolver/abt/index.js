const AntService = require('../../Services/abt');
module.exports = async (parent, args, context, info) => {
    const AntServiceInstance = new AntService();
    const DataResult = await AntServiceInstance.getData(args.number);
    return ({
        ...DataResult.data
    })
}