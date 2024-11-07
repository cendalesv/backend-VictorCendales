import { Router } from "express";
import {allUsers,userByRole}  from "../controllers/users/read.js";
import {  create } from "../controllers/users/create.js";
import {  update } from "../controllers/users/update.js";
import {  findOneAndDelete, findByIdAndDelete } from "../controllers/users/delete.js";
import validator from "../middlewares/validator.js"
import schemaUsersCreate from "../schemas/users/create.js"

const routerUsers = Router()

routerUsers.get("/all", allUsers)
routerUsers.get("/role/:x", userByRole)
routerUsers.post("/create",validator(schemaUsersCreate),create)
routerUsers.put("/update",update)
routerUsers.delete("/findOneAndDelete",findOneAndDelete)
routerUsers.delete("/findByIdAndDelete/:id", findByIdAndDelete)


export default routerUsers