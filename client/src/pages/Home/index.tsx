import React, { useCallback, useState } from "react";
import QueryEditor from "../../components/QueryEditor";
import QueryButton from "../../components/QueryButton";
import QueryResultTable from "../../components/QueryResultTable";
import FileUpload from "../../components/FileUpload";
import { useExecuteQuery } from "../../hooks/useQuery";
import { Spacer, Title, Text } from "@clickhouse/click-ui";
import styles from "./Home.module.css";
import { QueryResult } from "../../types/queryResult";

const Home: React.FC = () => {
    const [query, setQuery] = useState("SELECT * FROM system.tables;");
    const [page, setPage] = useState<number>(1);
    const { mutate, data, isLoading, error } = useExecuteQuery();

    const handleRunQuery = useCallback(() => {
        mutate(query);
    }, [mutate, query]);    

    return (
        <div className={styles.homePageContainer}>
            <Title
                type='h1'
                className={styles.title}
            >
                SQL Query Editor
            </Title>
            <QueryEditor query={query} setQuery={setQuery} />
            <QueryButton isLoading={isLoading} onClick={handleRunQuery} />

            <Spacer size="xl" />

            {error && <Text>{(error as Error).message}</Text>}

            {data && (
                <QueryResultTable
                    data={data as QueryResult}
                    page={page}
                    setPage={setPage}
                    pageSize={10}
                />
            )}

            <Spacer size="xl" />

            <Title type='h2'>File Upload</Title>
            <FileUpload setQuery={setQuery} />
        </div>
    );
};

export default Home;
