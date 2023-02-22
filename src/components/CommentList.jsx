import { Typography } from "@mui/material";
import React from "react";
import CommentItem from "./CommentItem";

function CommentList(props) {
  const { commentsArray, setCommentsArray } = props;

  const ratingUp = (date) => {
    setCommentsArray((prevArr) => {
      const newArr = prevArr.map((el) =>
        el.createDateUTC === date ? { ...el, rating: el.rating + 1 } : el
      );
      localStorage.setItem("comments", JSON.stringify(newArr));
      return newArr;
    });
  };

  const ratingDown = (date) => {
    setCommentsArray((prevArr) => {
      const newArr = prevArr.map((el) =>
        el.createDateUTC === date ? { ...el, rating: el.rating - 1 } : el
      );
      localStorage.setItem("comments", JSON.stringify(newArr));
      return newArr;
    });
  };

  console.log(commentsArray, "---0-0");

  return (
    <div>
      {commentsArray.map((item, index) =>
        item.rating < -10 ? (
          <Typography>Открыть комментарий</Typography>
        ) : (
          <CommentItem
            key={index}
            ratingUp={ratingUp}
            ratingDown={ratingDown}
            {...item}
          />
        )
      )}
    </div>
  );
}

export default CommentList;
