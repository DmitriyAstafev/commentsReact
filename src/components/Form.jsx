import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const initComment = {
  name: "",
  email: "",
  commentText: "",
  rating: 0,
  createDateUTC: 0,
};

function Form(props) {
  const { commentsArray, setCommentsArray } = props;
  console.log(commentsArray, "------------------");
  const [inputValue, setInputValue] = useState(initComment);
  // const [commentsArray, setCommentsArray] = useState(comments);

  const changeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const createCommentHandler = () => {
    const date = Date.parse(new Date().toISOString());
    setCommentsArray([
      ...commentsArray,
      { ...inputValue, createDateUTC: date },
    ]);
    // setInputValue({...inputValue, createDateUTC: date});
    localStorage.setItem(
      "comments",
      JSON.stringify([...commentsArray, { ...inputValue, createDateUTC: date }])
    );
  };
  // console.log(inputValue);
  // console.log(commentsArray);

  return (
    <>
      <Stack>
        <TextField
          onChange={changeHandler}
          name="name"
          label="Имя"
          variant="outlined"
        />
        <TextField
          onChange={changeHandler}
          name="email"
          label="Электронная почта"
          variant="outlined"
        />
        <TextField
          onChange={changeHandler}
          multiline={true}
          minRows={5}
          name="commentText"
          label="Комментарий"
          variant="outlined"
        />
        <Button onClick={createCommentHandler}>Отправить комментарий</Button>
      </Stack>
    </>
  );
}

export default Form;
