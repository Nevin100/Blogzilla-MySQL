import React, { useState, useEffect, useContext } from "react";
import edit1 from "../assets/edit.png";
import delete1 from "../assets/delete.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import { AuthContext } from "../context/authcontext";
//importing moment for date time :
import moment from "moment";

const Single = () => {
  const [post, setpost] = useState({});
  const location = useLocation(); //for location
  const postId = location.pathname.split("/")[2]; //here mujhe post ke aage ka id chahiye isliye uski location nikali search bar se and usko splt krke yahan daala
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  //useffect and API integration:
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setpost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  //handle Delete :
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} />
        <div className="user">
          {post.userImg && <img src={post.userImg} />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.Date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={edit1} alt="" />
              </Link>
              <img onClick={handleDelete} src={delete1} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
