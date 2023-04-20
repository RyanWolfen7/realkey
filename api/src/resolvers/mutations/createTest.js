module.exports = async (_, {input}, {models}) => {
    console.log(models)
    try {
        let newTEST = await models.TEST.create(input);
        return newTEST;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create new test");
    }
}
