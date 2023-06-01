import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, updateMemo } from "../redux/todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Box from "@mui/joy/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Textarea from "@mui/joy/Textarea";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";

const TodoDetail = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todo.find((item) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [italic, setItalic] = useState(false);
  const [fontWeight, setFontWeight] = useState("normal");
  const [anchorEl, setAnchorEl] = useState(null);

  const [memo, setMemo] = useState("");

  if (!todo) {
    return <div>No todo selected</div>;
  }

  const { text, date, memo: todoMemo } = todo;

  const handleRemove = () => {
    dispatch(remove(todo.id));
    navigate("../");
  };

  const handleMemoChange = (e) => {
    setMemo(e.target.value);
  };

  const handleMemoUpdate = () => {
    dispatch(updateMemo({ id: todo.id, memo }));
  };

  return (
    <Container>
      <Item>
        <Title>{text}</Title>
        <Date>작성일: {date}</Date>
        <Button startIcon={<DeleteIcon />} onClick={handleRemove}></Button>
      </Item>

      <FormControl>
        <FormLabel>Your comment</FormLabel>
        <Textarea
          label="Memo"
          value={memo}
          onChange={handleMemoChange}
          placeholder="Type something here…"
          minRows={3}
          endDecorator={
            <Box
              sx={{
                display: "flex",
                gap: "var(--Textarea-paddingBlock)",
                pt: "var(--Textarea-paddingBlock)",
                borderTop: "1px solid",
                borderColor: "divider",
                flex: "auto",
              }}
            >
              <IconButton
                variant="plain"
                color="neutral"
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <FormatBold />
                <KeyboardArrowDown fontSize="md" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                size="sm"
                placement="bottom-start"
                sx={{ "--ListItemDecorator-size": "24px" }}
              >
                {["200", "normal", "bold"].map((weight) => (
                  <MenuItem
                    key={weight}
                    selected={fontWeight === weight}
                    onClick={() => {
                      setFontWeight(weight);
                      setAnchorEl(null);
                    }}
                    sx={{ fontWeight: weight }}
                  >
                    <ListItemDecorator>
                      {fontWeight === weight && <Check fontSize="sm" />}
                    </ListItemDecorator>
                    {weight === "200" ? "lighter" : weight}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton
                variant={italic ? "soft" : "plain"}
                color={italic ? "primary" : "neutral"}
                aria-pressed={italic}
                onClick={() => setItalic((bool) => !bool)}
              >
                <FormatItalic />
              </IconButton>
              <Button onClick={handleMemoUpdate} sx={{ ml: "auto" }}>
                Send
              </Button>
            </Box>
          }
          sx={{
            minWidth: 300,
            fontWeight,
            fontStyle: italic ? "italic" : "initial",
          }}
        />
      </FormControl>

      {todoMemo && <Memo>Previous Memo: {todoMemo}</Memo>}
    </Container>
  );
};

export default TodoDetail;

const Container = styled.div`
  margin-top: 20px;
  padding: 10px 50px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h1``;

const Date = styled.div``;

const Memo = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;
