import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Button,
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
    <Card sx={{ mb: 1 }}>
      <CardHeader
        avatar={<Avatar></Avatar>}
        title={name}
        subheader={getInterval(timeInterval)}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {commentText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button onClick={() => ratingUp(createDateUTC)} color="success">
          +
        </Button>
        <Typography variant="body2">{rating}</Typography>
        <Button onClick={() => ratingDown(createDateUTC)} color="error">
          -
        </Button>
      </CardActions>
    </Card>
  );
}

export default CommentItem;
