import React, { useEffect, useState } from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext.jsx";
// import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});
  // const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[2];
  console.log(location);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${id}`, {
        withCredentials: true,
      });
      navigate("/"); // Redirect to the home page or any other page
    } catch (err) {
      console.error(err);
    }
  };

  // const getText = (html) => {
  //   const doc = new DOMParser().parseFromString(html, "text/html");
  //   return doc.body.textContent;
  // };

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(Date()).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} onClick={handleDelete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {/* <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>{" "} */}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
