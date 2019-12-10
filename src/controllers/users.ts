import { Response, Request } from "express";
import bcrypt from "bcrypt";
import userModel from "../models/users";



// create new user
const createUser = (req: Request, res: Response) => {
  const { firstName,lastName, phone, username, email, password } = req.body;

  //check for empty field
  if (!firstName ||!lastName || !phone ||!username|| !email) {
    res.status(400).json({ message: "Please provide all user details" });
    return;
  }
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log("this is hash", hash);
    if (err) {
      return res.status(500).json({ msg: "can not hash password" });
    }

    const newuser = {
        firstName,
        lastName, 
        phone, 
        username, 
        email,
      password: hash
    };

    const userDB = new userModel(newuser);
    return userDB
      .save()
      .then((user:object) => {
        console.log(user);
        return res.status(201).json({ msg: "user created successfull" });
      })
      .catch(() => {
        return res.status(404).json({ msg: "user not created" });
      });
  });
};

//get all user
const getAllUser = (_req:Request, res:Response) => {
  return userModel
    .find()
    .then((user:object) => {
      console.log(user);
      return res.status(200).json(user);
    })
    .catch(() => {
      return res.status(404).json({ msg: "user not created" });
    });
};

//get single user
const getSingleUser = (req:Request, res:Response) => {
  const userID = req.params.id;

  return userModel
    .findById(userID)
    .then((user:object) => {
      return res.status(200).json(user);
    })
    .catch((err:Error) => {
        console.log(err);
      res.status(404).json({ msg: "user with the ID not found" });
      return;
    });
};

//update user
const updateUser = (req:Request, res:Response) => {
  //get values from frontend
  const userID = req.params.id;
  const userBody = req.body;

  return userModel
    .update({ _id: userID }, { $set: userBody })
    .then((user:object) => {
      console.log(user);
      return res.status(201).json({ msg: "user updated successfully" });
    })
    .catch((err:Error) => {
      res.status(404).json({ msg: "user with the ID not found" });
      console.log(err);
      return;
    });
};

//get delete a  user
const deleteUser = (req:Request, res:Response) => {
  const userID = req.params.id;

  return userModel
    .findByIdAndDelete(userID)
    .then((user:object) => {
      console.log(user);
      return res.status(200).json({ msg: "user deleted" });
    })
    .catch((err:Error) => {
      res.status(404).json({ msg: "user with the ID not found" });
      console.log(err);
      return;
    });
};


// const UserLogin = (req: any, res: any) => {
//   // const userID = req.params.id;
//   const {email, password}=req.body
//   return userModel
//     .findOne({email:email})
//     .then(user => {
//       checkUser(user.password, password)
//       // return res.status(200).json(user);
//     })
//     .catch(err => {
//       res.status(404).json({ msg: "user with the email not found" });
//       console.log(err);
//       return;
//     });
// };


// async function checkUser(email, password) {
//   //... fetch user from a db etc.

//   const match = await bcrypt.compare(password, user.passwordHash);

//   if(match) {
//       //login
//   }

//   //...
// }

export { createUser, getAllUser, getSingleUser, updateUser, deleteUser };
