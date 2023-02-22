import React from "react";
import BadComment from "./BadComment";
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

  const setVisible = (date) => {
    setCommentsArray((prevArr) => {
      const newArr = prevArr.map((el) =>
        el.createDateUTC === date ? { ...el, isVisible: true } : el
      );
      return newArr;
    });
  };

  return (
    <div>
      {commentsArray.map((item, index) =>
        item.rating < -10 && !item.isVisible ? (
          <BadComment setVisible={setVisible} date={item.createDateUTC}/>
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
