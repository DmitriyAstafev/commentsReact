import React from "react";
import BadComment from "./BadComment";
import CommentItem from "./CommentItem";

function CommentList(props) {
  const { commentsArray,ratingUp,ratingDown,setVisible } = props;

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
