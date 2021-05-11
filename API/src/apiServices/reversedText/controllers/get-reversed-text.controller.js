import GetUserService from "../services/get-user.service";
const getUserService = new GetUserService();


exports.getReversedText = async (req, res) => {
    const text = req.params.text;
    let reversedText = text.split('').reverse().join('');
    console.log(text);
    if (reversedText) {
        res.status(200).json({
            text: reversedText
        });
    } else {
        res.status(400).send({
            error: "No text." 
        })
    }
};