
const { models } = require("mongoose")

module.exports = async (_, {id, input}, {models}) => {
    const TESTToUpdate = await models.TEST.findOne({_id: id});

    Object.keys(input).forEach(value => {
        TESTToUpdate[value] = input[value];
    });

    const updatedTEST = await TESTToUpdate.save();
    return updatedTEST;
}
