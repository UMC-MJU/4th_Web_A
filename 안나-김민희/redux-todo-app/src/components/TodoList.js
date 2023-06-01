import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <List sx={{ width: "100%", maxwidth: 360, bgcolor: "background.paper" }}>
      {todoList.map((todo, index) => {
        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <Button
                varient="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(remove(todo.id))}
              ></Button>
            }
            disablePadding
          >
            <ListItemButton dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  onChange={() => dispatch(complete(todo.id))}
                />
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate(`../${todo.id}`)}
                id={todo.id}
                primary={todo.text}
                sx={
                  todo.completed
                    ? {
                        textDecoration: "line-through",
                        color: "gray",
                      }
                    : {}
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
