import User from "../../models/User.js";
import "../../models/Auto.js"

let allUsers = async (req,res,next) => {
    try {
        //filtros
        let {name,role} = req.query
        console.log(name);
        console.log(role);
        let query = {}

        if (name) {
            query.name = {$regex: "^" +name , $options: "i"}
        }

        let all = await User.find(query).populate("auto", "marca modelo").exec();

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