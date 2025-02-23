export interface QueryRow {
    database: string;
    name: string;
    uuid?: string;
    engine?: string;
    [key: string]: unknown; // Allow dynamic fields for unknown column names
}

export interface QueryResult {
    rows: ReadonlyArray<QueryRow>;
}
