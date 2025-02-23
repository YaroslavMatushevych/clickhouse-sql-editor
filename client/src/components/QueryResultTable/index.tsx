import React, { useMemo } from "react";
import { Pagination, Spacer, Table } from "@clickhouse/click-ui";
import { QueryResult } from "../../types/queryResult";

interface QueryResultTableProps {
    data?: QueryResult;
    page: number;
    setPage: (page: number) => void;
    pageSize?: number;
}

const QueryResultTable: React.FC<QueryResultTableProps> = ({ data = { rows: [] }, page, setPage, pageSize = 50 }) => {
    const rows = useMemo(() => data.rows ?? [], [data.rows]);

    if (!rows.length) return <p>No results</p>;

    // Define important fields to display
    const importantKeys = ["database", "name", "total_rows", "total_bytes"];

    // Extract headers based on selected keys
    const headers = useMemo(
        () =>
            importantKeys.map((key) => ({
                label: key,
            })),
        []
    );

    // Paginate data and map only selected fields
    const totalPages = Math.ceil(rows.length / pageSize);
    const paginatedRows = useMemo(() => {
        const start = (page - 1) * pageSize;
        return rows.slice(start, start + pageSize).map((row, index) => ({
            id: `row-${start + index}`,
            items: importantKeys.map((key) => ({
                label: String(row[key] ?? "-"), // Show "-" if the value is missing
            })),
        }));
    }, [rows, page, pageSize]);

    return (
        <>
            <Table
                headers={headers}
                rows={paginatedRows}
                onSort={() => {}} // Placeholder functions to prevent errors
                onSelect={() => {}}
                onEdit={() => {}}
                onDelete={() => {}}
                showHeader
            />

            <Spacer size="md" />

            {totalPages > 1 && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    onChange={setPage}
                />
            )}
        </>
    );
};

export default React.memo(QueryResultTable);
