const { User } = require('../DB_connection');

const login = async (req, res) => {

    const {email, password}  = req.query;

    try {
        if(!email || !password){
            return res.status(400).send('Missing data')
        };
        
        const user = await User.findOne({where: { email }});

        if(!user){
            return res.status(404).send('User not found');
        };

        if(user.password !== password){
            return res.status(403).send('Wrong password');
        };

        return res.status(200).json({access: true});
        
    } catch (error) {
       return res.status(500).send(error.message);
    }
}

module.exports = login;