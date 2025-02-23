import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    PORT: process.env.PORT || 8080,
    CLICKHOUSE_URL: process.env.CLICKHOUSE_URL || 'http://localhost:8123',
};