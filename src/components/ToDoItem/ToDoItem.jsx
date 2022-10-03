import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ToDoItemChild from "./ToDoItemChild";
import toast from "react-hot-toast";
import { deleteTodo, updateTodo } from "../../slices/todoReducers";
const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo deleted");
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };
  return (
    <ToDoItemChild
      checked={checked}
      handleCheck={handleCheck}
      todo={todo}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      updateModalOpen={updateModalOpen}
      setUpdateModalOpen={setUpdateModalOpen}
    />
  );
};

export default ToDoItem;
