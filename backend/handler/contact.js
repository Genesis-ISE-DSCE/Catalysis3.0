const Contact = require("../model/contact")

exports.sendMessage = async (req, res) => {
    try {
        const {name, email, message} = req.body;
        const contact = new Contact({name, email, message});
        await contact.save();
        res.status(200).json({success:true, message: "message send successfully" });
    } catch (error) {
        res.status(500).json({error: "Server Error"});
    }
}