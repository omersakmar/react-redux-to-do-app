import React from "react";
import { Toaster } from "react-hot-toast";
import MainContent from "./components/MainPage/MainContent";
import PageHeader from "./components/MainPage/PageHeader";
import Title from "./components/Title";
import styles from "../src/styles/modules/main.module.scss";
const App = () => {
  return (
    <>
      <div className="container">
        <Title>What to do?</Title>
        <div className={styles.main__wrapper}>
          <PageHeader />
          <MainContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
};

export default App;
