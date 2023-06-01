import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const defaultTheme = createTheme();

const InputTodo = () => {
  const dispatch = useDispatch();
  const [todolist, setTodolist] = useState({ id: 0, text: "", date: "" });

  const handleText = (e) => {
    setTodolist({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todolist.text !== "") {
      const formattedDate = new Date().toLocaleString();
      dispatch(add({ text: todolist.text, date: formattedDate }));
    }
    setTodolist({ text: "", date: "" });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            UMC 10주차 미션 Todo
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="할 일 입력"
              name="email"
              autoComplete="email"
              autoFocus
              value={todolist.text}
              onChange={handleText}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default InputTodo;
