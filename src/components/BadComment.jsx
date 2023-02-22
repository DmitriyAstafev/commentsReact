import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

function BadComment({ setVisible, date }) {
  return (
    <Card sx={{ mb: 1 }} onClick={() => setVisible(date)}>
      <CardContent>
        <Typography color={"error"}>Открыть комментарий</Typography>
      </CardContent>
    </Card>
  );
}

export default BadComment;
