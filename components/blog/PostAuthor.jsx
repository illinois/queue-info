import React from "react";

const PostAuthor = ({ name, github, avatar }) => (
  <div className="d-inline-flex flex-row align-items-center px-3">
    <img src={avatar || "/static/team/default.png"} className="avatar" />
    <div>
      <div className="small d-flex flex-column">
        {name}
        {github && <a href={`https://github.com/${github}`}>@{github}</a>}
      </div>
    </div>
    <style jsx>{`
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 0.5rem;
        background-color: #dddddd;
      }
    `}</style>
  </div>
);

export default PostAuthor;
