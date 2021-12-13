const User = require('../model/user.model')

const register = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({ user });

    } catch (e) {
        return res.status(501).json({ message: "Someting went wrong" });
        }
};

const login =async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });


        if (!user) {
            const user = await User.create({
                email: req.body.email,
                password: req.body.password,
                name: "user" + Math.round(Math.random(1000)*1000),
                profile_photo_url: "https://picsum.photos/200",
                role: ["user"]
            });
          return  res.status(201).json({ user, message: "Not a user but Now Created and logedin" });
            
        }

       return  res.status(201).json({ user,message:"already a user loged in" });
        
    } catch (e) {
        return res.status(501).json({ message: "Someting went wrong" });
        }
}

module.exports = {register,login}