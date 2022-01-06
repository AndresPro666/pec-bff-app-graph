const CloudProfileService = require('../../Services/cloudprofile');
module.exports = async (parent, args, context, info) => {
    const CloudProfileServiceInstance = new CloudProfileService();
    const DataResult = await CloudProfileServiceInstance.getData(args.number);
    return ({
        ...DataResult.data
    })
}