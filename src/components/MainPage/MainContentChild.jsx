import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/modules/main.module.scss";
import ToDoItem from "../ToDoItem/ToDoItem";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const containerChild = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const MainContentChild = ({ filteredTodoList }) => {
  return (
    <motion.div
      className={styles.main__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
        ) : (
          <motion.p variants={containerChild} className={styles.emptyText}>
            Empty list.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MainContentChild;
