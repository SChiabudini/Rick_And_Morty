const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    
    const { email, password } = req.body;
    
    try {
        if(!email || !password || !email.trim() || !password.trim()){
            return res.status(400).send('Faltan datos')
        };

        const [user, created] = await User.findOrCreate(
            { 
                where: { email },
                defaults: { password }
        });

        return res.status(200).json({ user, created });
    
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = postUser;