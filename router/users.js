import { Router } from "express";
import {allUsers,userByRole}  from "../controllers/users/read.js";
import {  create } from "../controllers/users/create.js";

const routerUsers = Router()

routerUsers.get("/all", allUsers)
routerUsers.get("/role/:x", userByRole)
routerUsers.post("/create",create)

export default routerUsers