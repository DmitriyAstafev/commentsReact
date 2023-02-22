import { Container } from "@mui/material";
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

  return (
    <Container>
      <CommentList
        commentsArray={commentsArray}
        setCommentsArray={setCommentsArray}
      />
      <Form commentsArray={commentsArray} setCommentsArray={setCommentsArray} />
    </Container>
  );
}

export default App;
