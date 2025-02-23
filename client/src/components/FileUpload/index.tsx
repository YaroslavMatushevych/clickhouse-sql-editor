import React, { useRef } from "react";
import { Button, IconButton, Text } from "@clickhouse/click-ui";
import { useFileUpload } from "../../hooks/useQuery";
import styles from "./FileUpload.module.css";

interface FileUploadProps {
    setQuery: (sql: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ setQuery }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { mutate, isLoading, isSuccess, isError } = useFileUpload(setQuery);


    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            mutate(file);
        }
    };

    return (
        <div className={styles.uploadContainer}>
            <input
                ref={fileInputRef}
                className={styles.hiddenFileInput}
                type="file"
                accept=".sql"
                style={{ display: "none" }}
                onChange={handleUpload}
            />

            <div className={styles.fileUploadContainer}>
                <Button
                    disabled={isLoading}
                    onClick={() => fileInputRef.current?.click()}
                >
                    {isLoading ? "Uploading..." : "Upload SQL File"}
                </Button>
                <IconButton
                    className={styles.uploadIcon}
                    icon="upload"
                    disabled={isLoading}
                    onClick={() => fileInputRef.current?.click()}
                />
            </div>

            {isSuccess && <Text >SQL file uploaded successfully.</Text>}

            {isError && <Text>Failed to upload SQL file. Check format.</Text>}
        </div>
    );
};

export default FileUpload;
