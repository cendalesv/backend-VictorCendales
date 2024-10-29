import { Schema,model } from "mongoose"

let collection = "mascota"
let schema = new Schema({
    codigo:{type:String,required:true},
    nombre:{type:String,required:true},
    categoria:{type:String,required:true},
    descripcion:{type:String,required:true},
    edad:{type:Number,required:true},
    peso:{type:Number,required:true},
    fechaIngreso:{type:String,required:true},
    enAdopcion:{type:Boolean,required:true},
    vacunado:{type:Boolean,required:true},
    esterilizado:{type:Boolean,required:true},
    disponible:{type:Boolean,required:true}
},{
    timestamps:true
})

let Mascota = model(collection,schema)
export default Mascota