import User from "../../models/User.js";

let allUsers = async (req,res,next) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}     


let userByRole = async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.x
        let all = await User.find({role:roleQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
            next(error)
        }
    }     

export {allUsers,userByRole} 