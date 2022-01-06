const ProfileService = require('../../Services/profile');
module.exports = async (parent, args, context, info) => {
    const ProfileInstance = new ProfileService();
    const DataResult = await ProfileInstance.getData(args.number);
    return ({
        ...DataResult.data
    })
}