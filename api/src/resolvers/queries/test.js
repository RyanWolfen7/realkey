module.exports = async (_, {}, {models}) => {
    return await models.TEST.find();
}
