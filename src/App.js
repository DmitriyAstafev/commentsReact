import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CommentList from "./components/CommentList";
import Form from "./components/Form";

function App() {
  const [commentsArray, setCommentsArray] = useState([]);

  useEffect(() => {
    let comments = JSON.parse(localStorage.getItem("comments"));
    if (!comments) {
      comments = localStorage.setItem("comments", JSON.stringify([]));
    }
    setCommentsArray(comments);
  }, []);

  const createCommentHandler = (commentData) => {
    const date = Date.parse(new Date().toISOString());
    setCommentsArray([
      ...commentsArray,
      { ...commentData, createDateUTC: date, rating: 0, isVisible: false },
    ]);
    localStorage.setItem(
      "comments",
      JSON.stringify([
        ...commentsArray,
        { ...commentData, createDateUTC: date, rating: 0, isVisible: false },
      ])
    );
  };

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
    <>
    <Typography variant="h3" align="center">Система комментариев на ReactJS</Typography>
    <Container maxWidth="sm">
      <CommentList
        commentsArray={commentsArray}
        ratingUp={ratingUp}
        ratingDown={ratingDown}
        setVisible={setVisible}
      />
      <Form createCommentHandler={createCommentHandler} />
    </Container>
    </>
  );
}

export default App;
