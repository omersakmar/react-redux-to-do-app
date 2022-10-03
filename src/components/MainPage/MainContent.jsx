import React from "react";
import { useSelector } from "react-redux";
import MainContentChild from "./MainContentChild";

const MainContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return <MainContentChild filteredTodoList={filteredTodoList} />;
};

export default MainContent;
