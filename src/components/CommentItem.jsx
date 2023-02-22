import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function CommentItem(props) {
  const { name, commentText, rating, createDateUTC, ratingUp, ratingDown } =
    props;
  const timeInterval = Date.parse(new Date().toISOString()) - createDateUTC;

  const getInterval = (timeInterval) => {
    const days = Math.trunc(timeInterval / 86400000);
    const hours = Math.trunc(timeInterval / 3600000) % 24;
    const minutes = Math.trunc(timeInterval / 60000) % 60;
    if (days) {
      return `${days} дн. назад`;
    } else if (hours) {
      return `${hours} ч. назад`;
    } else {
      return `${minutes} мин. назад`;
    }
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography>{getInterval(timeInterval)}</Typography>
            <Typography>{commentText}</Typography>
          </React.Fragment>
        }
      ></ListItemText>
      <ListItemButton onClick={() => ratingUp(createDateUTC)}>+</ListItemButton>
      <Typography>{rating}</Typography>
      <ListItemButton onClick={() => ratingDown(createDateUTC)}>
        -
      </ListItemButton>
    </ListItem>
  );
}

export default CommentItem;
