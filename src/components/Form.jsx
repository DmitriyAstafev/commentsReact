import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form(props) {
  const { commentsArray, setCommentsArray } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createCommentHandler = (commentData) => {
    const date = Date.parse(new Date().toISOString());
    setCommentsArray([
      ...commentsArray,
      { ...commentData, createDateUTC: date, rating: 0 },
    ]);
    localStorage.setItem(
      "comments",
      JSON.stringify([
        ...commentsArray,
        { ...commentData, createDateUTC: date, rating: 0 },
      ])
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(createCommentHandler)}>
        <Stack>
          <TextField
            name="name"
            label="Имя"
            variant="outlined"
            {...register("name", { required: "Введите свое имя" })}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
          <TextField
            name="email"
            label="Электронная почта"
            variant="outlined"
            {...register("email", {
              required: "Введите адрес электронной почты",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите корректный адрес электронной почты",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            multiline={true}
            minRows={5}
            name="commentText"
            label="Комментарий"
            variant="outlined"
            {...register("commentText", {
              required: "Введите текст комментария",
            })}
            error={Boolean(errors.commentText)}
            helperText={errors.commentText?.message}
          />
          <Button type="submit">Отправить комментарий</Button>
        </Stack>
      </form>
    </>
  );
}

export default Form;
