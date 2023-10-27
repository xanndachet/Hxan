const Models = require('./Models');

const AdminDAO = {
    async selectByUsernameAndPassword(username, password) {
        const query = { username: username, password: password };

        try {
            const data = await Models.Admin.findOne(query);
            console.log('xan',data);
            return data;
        } catch (err) {
           
            return err;

        }


    }
};
AdminDAO.selectByUsernameAndPassword('admin','123')
module.exports = AdminDAO;