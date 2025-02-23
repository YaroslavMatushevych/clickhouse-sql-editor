import React, { memo } from "react";
import { TextAreaField } from "@clickhouse/click-ui";

interface QueryEditorProps {
    query: string;
    setQuery: (query: string) => void;
}

const QueryEditor: React.FC<QueryEditorProps> = ({ query, setQuery }) => {
    const handleChange = (inputValue: string) => {
        setQuery(inputValue);
    };

    return (
        <TextAreaField
            value={query}
            onChange={handleChange}
            placeholder="Write your SQL query here..."
            rows={5}
        />
    );
};

export default memo(QueryEditor);
