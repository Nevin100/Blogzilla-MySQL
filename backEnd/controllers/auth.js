import { db } from "../db.js";
import bcrypt from "bcryptjs";

//Router register:
export const register = (req, res) => {
  //Check existing user
  const q = "SELECT * FROM users WHERE email = ? OR username = ?"; //query
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    //sending query and values
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!"); //user already exists

    //Hash the password and create a user  :using bcrypt.js
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //Insertion of values
    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES(?)";
    const values = [req.body.username, req.body.email, hash];

    //sending of values into database
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(" User has been created successfully!!");
    });
  });
};

export const login = (req, res) => {};
export const logout = (req, res) => {};
