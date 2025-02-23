import React from "react";
import { Button } from "@clickhouse/click-ui";
import styles from "./QueryButton.module.css";

interface QueryButtonProps {
    isLoading: boolean;
    onClick: () => void;
}

const Loader = () => <div className="animate-spin h-5 w-5 border-4 border-blue-500 rounded-full border-t-transparent"></div>;

const QueryButton: React.FC<QueryButtonProps> = ({ isLoading, onClick }) => {
    return (
        <Button className={styles.queryButton}
            onClick={onClick} disabled={isLoading}>
            {isLoading ? <Loader /> : "Run Query"}
        </Button>
    );
};

export default React.memo(QueryButton);
