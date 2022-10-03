import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { BsFillTrashFill, BsFillPenFill } from "react-icons/bs";
import CheckItem from "../Buttons/CheckItem";
import PageModal from "../Modal/PageModal";
import { getClasses } from "../../utils/utils";
import styles from "../../styles/modules/todoItem.module.scss";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ToDoItemChild = ({
  checked,
  handleCheck,
  todo,
  handleDelete,
  handleUpdate,
  updateModalOpen,
  setUpdateModalOpen,
}) => {
  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoInfo}>
          <CheckItem checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === "complete" && styles["todoText--completed"],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <BsFillTrashFill />
          </div>
          <div
            className={styles.icon}
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <BsFillPenFill />
          </div>
        </div>
      </motion.div>
      <PageModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
};

export default ToDoItemChild;
