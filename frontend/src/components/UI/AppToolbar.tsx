import React from "react";
import { Layout, Typography } from "antd";
import styles from "./AppToolbar.module.css";

const { Header } = Layout;

const AppToolbar = () => {
  return (
    <Header className={styles.appHeader}>
      <div className={styles.logo}>
        <Typography.Link href="/">
          <Typography.Title level={3}>AFRINTERVIEW ASSISTANT</Typography.Title>
        </Typography.Link>
      </div>
    </Header>
  );
};

export default AppToolbar;