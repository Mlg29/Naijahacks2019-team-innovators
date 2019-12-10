import express from "express"
var router = express.Router();
import {getAllUser,getSingleUser,createUser,updateUser,deleteUser} from "../controllers/users";

//
router.post("/", createUser)
        .get("/", getAllUser)
        .get("/:id",getSingleUser)
        .patch("/:id",updateUser)
        .delete("/:id",deleteUser)

/* GET users listing. */
// router.get('/', function(_req:Request, res:Response, _next:NextFunction) {
//   res.send('respond with a resource');
// });

export default router;
