const User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    },
    async index(req, res) {
        const users = await User.findAll({ raw: true });

        return res.json(users);
    },
    async update(req, res) {
        const { id } = req.params;
        const { name, email } = req.body;

        await User.update({ name, email }, { where: { id: id } });
        const users = await User.findOne({ where: {id: id} })
        return res.json(users);
    },
    async deleteUser(req, res) {
        const { id } = req.params;

        await User.destroy({ where: { id: id } });
        const users = await User.findAll({ raw: true });

        return res.json(users);
    },
    async finUserbyId(req, res){
        const { id } = req.params;

        const users = await User.findOne({ where: {id: id} })
        return res.json(users);
    }
}