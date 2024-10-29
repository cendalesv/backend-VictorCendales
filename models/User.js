import { Schema,model } from "mongoose"

let collection = "user"
let schema = new Schema({
    _id:{type:Schema.Types.ObjectId, require:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    photo:{type:String,required:true},
    role:{type:Number,required:true}
},{
    timestamps:true
})

let User = model(collection,schema)
export default User