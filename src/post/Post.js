import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";

function Post() {
  const [apidata, setApiData] = useState([]);
  const apiUrl = " https://academics.newtonschool.co/api/v1/linkedin/post";

  const getData = () => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        projectId: "nae1y51qfcg9",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data.data);
      })
      .catch((err) => console.error("Error", err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {apidata &&
        apidata.map((post) => (
          <div className="posts">
            <div className="post__header">
              <div className="post__headerLeft">
                <Avatar src={post.author.profileImage} />
                <div className="post__profile_details">
                  <h3>{post.author.name}</h3>
                  <p>{post.title}</p>
                </div>
              </div>

              <div className="post__headerRight">
                <MoreVertIcon />
              </div>
            </div>

            <div className="post__body">
              <p>{post.content}</p>
              <img className='post-img' src={post.channel.image} />

              <div className="post__numbers">
                <span className="like__number">{post.likeCount}    likes</span>

                <span className="comment__number">{post.commentCount}   comments</span>
              </div>
            </div>

            <div className="post__footer">
              <div className="post__footer__option">
                <ThumbUpIcon />
                <span>Like</span>
              </div>

              <div className="post__footer__option">
                <CommentIcon />
                <span>Comment</span>
              </div>

              <div className="post__footer__option">
                <SendIcon />
                <span>Send</span>
              </div>

              <div className="post__footer__option">
                <ShareIcon />
                <span>Share</span>
              </div>
            </div>
          </div> //last div
        ))}
    </>
  );
}

export default Post;
