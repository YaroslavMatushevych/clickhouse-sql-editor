import React from "react";
import { Button, Container, Switch, ThemeName, Text, Logo } from "@clickhouse/click-ui";
import styles from "./Header.module.css";

interface HeaderProps {
    theme: ThemeName;
    setTheme: (theme: ThemeName) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
    const handleSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerContainer}>
                    <Logo name="clickhouse" size="sm" />
                    <Text size="lg" weight="bold">SQL Query Editor by YM</Text>
                    <div className={styles.headerControls}>
                        <Switch
                            className={styles.switch}
                            checked={theme === "dark"}
                            onClick={handleSwitch}
                        />
                        <Button onClick={() => alert("Coming soon!")}>
                            Login
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default React.memo(Header);
