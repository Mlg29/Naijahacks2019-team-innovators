import express,{Response,Request, NextFunction} from "express";
import User from "../models/users";
import auth from "../middleware/auth";
const bcrypt = require('bcryptjs')

const router = express.Router();

router.get("/users", (_req:Request, res:Response) => {
  //get all users
  User.find()
    .sort({ firstName: "asc" })
    .then((userData: any) => {
      return res.status(200).json({ userData });
    })
    .catch((err: Error) => {
      return res.status(500).json({ msg: `err occour: ${err}` });
    });
});



router.get("/users/:email", (req:Request, res:Response) => {
  //get single users by email
  const email: any = req.params.email;
  User.findOne({ email })
    .then((userData: any) => {
      if (userData) {
        return res.status(200).json(userData);
      }
      return res.status(404).json({ msg: "no user found" });
    })
    .catch((err: Error) => {
      return res.status(500).json({ msg: `err occour: ${err}` });
    });
});

router.post("/users", async (req:Request, res:Response) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    return res.status(201).send({ user, token });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.post("/users/login", async (req:Request, res:Response) => {
  //Login a registered user
  
  try {
      const { email} = req.body;
      const password = await bcrypt.hash(req.body.password, 10)
      console.log(password);
      
      const user = await User.findOne({email, password});
    console.log(user);
    
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    console.log("i love token");
    res.status(200).send({ user, token });
  } catch (error) {
    return res.status(400).send({error});
  }
});

router.post("/users/me/logout", auth, async (req:Request, res:Response) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token: any) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/me/logoutall", auth, async (req:Request, res:Response) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
