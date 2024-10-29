import { Schema,model } from "mongoose"

let collection = "producto"
let schema = new Schema({
    codigo:{type:String,required:true},
    nombre:{type:String,required:true}, 
    categoria:{type:String,required:true}, 
    descripcion:{type:String,required:true}, 
    precio:{type:Number,required:true}, 
    stock:{type:Number,required:true}, 
    fechaIngreso:{type:String,required:true}, 
    enOferta:{type:Boolean,required:true}, 
    porcentajeDescuento:{type:String,required:true}, 
    disponible:{type:Boolean,required:true}
},{
    timestamps:true
})

let producto = model(collection,schema)
export default producto