import React from "react";
import { Text, Separator } from "@clickhouse/click-ui";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <>
            <Separator size="sm" />

            <footer className={styles.footer}>
                <Text align="center" size="sm" color="muted">
                    © {new Date().getFullYear()} ClickHouse SQL Editor. Created by Yaroslav Matushevych. All rights reserved.
                </Text>
            </footer>
        </>
    );
};

export default Footer;
