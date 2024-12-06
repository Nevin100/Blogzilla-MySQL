//Post function to pass in routes and then to index.js
import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT `username`,`title`,`desc`,p.img,u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id =? ";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(401).json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json("Hello!!");
};

export const deletePost = (req, res) => {
  //first need to verify the jwt token :
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not Authenticated!!");
};

export const updatePost = (req, res) => {
  res.json("Hello!!");
};
