import { useMutation } from "react-query";
import { runQuery, uploadSQLFile } from "../api/queryService";

export const useExecuteQuery = () => {
    return useMutation(runQuery);
};


export const useFileUpload = (setQuery: (sql: string) => void) => {
    return useMutation(
        async (file: File) => {
            return uploadSQLFile(file);
        },
        {
            onSuccess: (data) => {
                if (data.sqlContent) {
                    setQuery(data.sqlContent); // Auto-fill Query Editor
                }
            },
            onError: (error) => {
                console.error("File Upload Error:", error);
            }
        }
    )
};
